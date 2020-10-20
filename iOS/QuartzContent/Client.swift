import Apollo
import ApolloSQLite
import Foundation

public enum QuartzContent {

	private static let endpoint = URL(string: "https://content.qz.com/graphql")!

	private static let name = "content"

	/// Quartz content GraphQL Apollo client.
	///
	/// - Parameters:
	///   - authorization: `Authorization` header string to append to network requests.
	///   - userAgent: `User-Agent` header string to append to network requests.
	///   - database: If true, uses ApolloSQLite for caching responses. If false, uses a simple in-memory cache.
	/// - Throws: May throw if a database file cannot be created. Will never throw if `database` is false.
	public static func client(
		authorization: (() -> String?)?,
		userAgent: (() -> String?)?,
		database: Bool
	) throws -> ApolloClient {
		let cache: NormalizedCache
		if database {
			let dbURL = try databaseURL(for: name)
			let dbCache = try SQLiteNormalizedCache(fileURL: dbURL)
			cache = dbCache
		} else {
			cache = InMemoryNormalizedCache()
		}
		let store = ApolloStore(cache: cache)
		let interceptor = QuartzInterceptor(store: store, authorization: authorization, userAgent: userAgent)
		let transport = RequestChainNetworkTransport(
			interceptorProvider: interceptor,
			endpointURL: endpoint,
			autoPersistQueries: true,
			requestBodyCreator: QuartzRequestBodyCreator(),
			useGETForQueries: true
		)
		return ApolloClient(networkTransport: transport, store: store)
	}

	private static func databaseURL(for name: String) throws -> URL {
		let cacheURL = try FileManager.default.url(
			for: .cachesDirectory,
			in: .userDomainMask,
			appropriateFor: nil,
			create: true
		)
		let url = cacheURL.appendingPathComponent("quartz-cache-\(name).sqlite3")
		if !FileManager.default.fileExists(atPath: url.path) {
			FileManager.default.createFile(atPath: url.path, contents: nil, attributes: nil)
		}
		return url
	}
}

/// Adds dynamic `Authorization` and `User-Agent` headers to requests.
/// Absolutely insane amount of boilerplate for this, but we want these strings to be able to change without
/// having to re-create a whole ApolloClient stack every time the user logs in / out.
/// `apollo-ios` 0.34.0+ with `RequestChainNetworkTransport` makes the assumption that request headers
/// won’t change for the lifecycle of ApolloClient. Not a good assumption!
private final class QuartzInterceptor: LegacyInterceptorProvider {

	private let authorization: (() -> String?)?
	private let userAgent: (() -> String?)?

	init(
		client: URLSessionClient = URLSessionClient(),
		shouldInvalidateClientOnDeinit: Bool = true,
		store: ApolloStore,
		authorization: (() -> String?)?,
		userAgent: (() -> String?)?
	) {
		self.authorization = authorization
		self.userAgent = userAgent
		super.init(client: client, shouldInvalidateClientOnDeinit: shouldInvalidateClientOnDeinit, store: store)
	}

	override func interceptors<Operation>(
		for operation: Operation
	) -> [ApolloInterceptor] where Operation: GraphQLOperation {
		return [QuartzHeadersInterceptor(authorization: authorization?(), userAgent: userAgent?())] +
			super.interceptors(for: operation)
	}

}

/// Adds `Authorization` and `User-Agent` headers.
private final class QuartzHeadersInterceptor: ApolloInterceptor {

	private let authorization: String?
	private let userAgent: String?

	init(authorization: String?, userAgent: String?) {
		self.authorization = authorization
		self.userAgent = userAgent
	}

	func interceptAsync<Operation: GraphQLOperation>(
		chain: RequestChain,
		request: HTTPRequest<Operation>,
		response: HTTPResponse<Operation>?,
		completion: @escaping (Result<GraphQLResult<Operation.Data>, Error>) -> Void
	) {
		if let authorization = authorization {
			request.addHeader(name: "Authorization", value: authorization)
		}
		if let userAgent = userAgent {
			request.addHeader(name: "User-Agent", value: userAgent)
		}
		chain.proceedAsync(request: request, response: response, completion: completion)
	}

}

/// Overrides the default implementation of `RequestBodyCreator`,
/// which maddeningly sends an unnecessary `id` URL parameter that causes an error on our PHP GraphQL server.
/// Some discussion here: https://spectrum.chat/apollo/apollo-ios/upgrading-to-0-34-1-makes-query-return-query-queryid-are-mutually-exclusive~f3f9526d-6078-43de-989b-90e798fd3228
private struct QuartzRequestBodyCreator: RequestBodyCreator {

	fileprivate func requestBody<Operation: GraphQLOperation>(
		for operation: Operation,
		sendOperationIdentifiers: Bool,
		sendQueryDocument: Bool,
		autoPersistQuery: Bool
	) -> GraphQLMap {
		var body: GraphQLMap = [
			"variables": operation.variables,
			"operationName": operation.operationName
		]

		if sendQueryDocument {
			body["query"] = operation.queryDocument
		}

		if autoPersistQuery {
			guard let operationIdentifier = operation.operationIdentifier else {
				preconditionFailure(
					"To enable `autoPersistQueries`, Apollo types must be generated with operationIdentifiers"
				)
			}

			body["extensions"] = [
				"persistedQuery": ["sha256Hash": operationIdentifier, "version": 1]
			]
		}

		return body
	}

}
