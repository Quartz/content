import ApolloCodegenLib
import ArgumentParser
import Foundation

struct Codegen: ParsableCommand {

	@Option(help: "Local path of query files")
	var includes = "Queries/**/*.gql"

	@Option(help: "Local path of schema file")
	var schema = "Schemas/ContentSchema.json"

	mutating func run() throws {
		let cliFolderURL = FileFinder
			.findParentFolder()
			.deletingLastPathComponent() // CodeGen
			.appendingPathComponent("ApolloCLI", isDirectory: true)

		let output = FileFinder
			.findParentFolder()
			.deletingLastPathComponent() // CodeGen
			.deletingLastPathComponent() // iOS
			.appendingPathComponent("QuartzContent", isDirectory: true)
			.appendingPathComponent("QuartzContent", isDirectory: false)
			.appendingPathExtension("swift")

		try generateSwiftFiles(output, cli: cliFolderURL)
	}

	private func generateSwiftFiles(_ target: URL, cli: URL) throws {
		let parentURL = FileFinder
			.findParentFolder()
			.deletingLastPathComponent() // CodeGen
			.deletingLastPathComponent() // iOS
			.deletingLastPathComponent() // quartz/content repo

		let options = ApolloCodegenOptions(
			codegenEngine: .typescript,
			includes: includes,
			mergeInFieldsFromFragmentSpreads: false,
			modifier: .public,
			omitDeprecatedEnumCases: true,
			operationIDsURL: URL(fileURLWithPath: schema, relativeTo: parentURL)
				.deletingPathExtension()
				.appendingPathExtension("operations.json"),
			outputFormat: .singleFile(atFileURL: target),
			urlToSchemaFile: URL(fileURLWithPath: schema, relativeTo: parentURL)
		)
		try ApolloCodegen.run(from: parentURL, with: cli, options: options)
	}

	enum Error: Swift.Error {
		case invalidEndpoint
	}

}

Codegen.main()
