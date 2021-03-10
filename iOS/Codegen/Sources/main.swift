import ApolloCodegenLib
import ArgumentParser
import Foundation

struct Codegen: ParsableCommand {

	@Option(help: "GraphQL Endpoint")
	var endpoint = "https://content.qz.com/graphql"

	@Option(help: "Local path of query files")
	var includes = "Queries/**/*.gql"

	@Option(help: "Local path of schema file")
	var schema = "Schemas/ContentSchema.json"

	static private let parentURL = FileFinder
		.findParentFolder()
		.deletingLastPathComponent() // CodeGen
		.deletingLastPathComponent() // iOS
		.deletingLastPathComponent() // quartz/content repo

	mutating func run() throws {
		guard let endpoint = URL(string: endpoint) else { throw Error.invalidEndpoint }

		let cliFolderURL = FileFinder
			.findParentFolder()
			.deletingLastPathComponent() // CodeGen
			.appendingPathComponent("ApolloCLI", isDirectory: true)

		let output = Codegen.parentURL
			.appendingPathComponent("iOS")
			.appendingPathComponent("QuartzContent", isDirectory: true)
			.appendingPathComponent("QuartzContent", isDirectory: false)
			.appendingPathExtension("swift")

		let options = ApolloSchemaOptions(
			schemaFileName: URL(fileURLWithPath: schema).deletingPathExtension().lastPathComponent,
			downloadMethod: .introspection(endpointURL: endpoint),
			outputFolderURL: URL(fileURLWithPath: schema, relativeTo: Codegen.parentURL).deletingLastPathComponent()
		)
		try ApolloSchemaDownloader.run(with: cliFolderURL, options: options)

		try generateSwiftFiles(output, cli: cliFolderURL)
	}

	private func generateSwiftFiles(_ target: URL, cli: URL) throws {
		let options = ApolloCodegenOptions(
			codegenEngine: .typescript,
			includes: includes,
			mergeInFieldsFromFragmentSpreads: false,
			modifier: .public,
			omitDeprecatedEnumCases: true,
			operationIDsURL: URL(fileURLWithPath: schema, relativeTo: Codegen.parentURL)
				.deletingPathExtension()
				.appendingPathExtension("operations.json"),
			outputFormat: .singleFile(atFileURL: target),
			urlToSchemaFile: URL(fileURLWithPath: schema, relativeTo: Codegen.parentURL)
		)
		try ApolloCodegen.run(from: Codegen.parentURL, with: cli, options: options)
	}

	enum Error: Swift.Error {
		case invalidEndpoint
	}

}

Codegen.main()
