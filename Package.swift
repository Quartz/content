// swift-tools-version:5.2
import PackageDescription

let package = Package(
	name: "QuartzContent",
	platforms: [.macOS(.v10_14), .iOS(.v13), .tvOS(.v13), .watchOS(.v6)],
	products: [
		.library(name: "QuartzContent", targets: ["QuartzContent"])
	],
	dependencies: [
		.package(
			name: "Apollo",
			url: "https://github.com/apollographql/apollo-ios",
			.exact("0.42.0")
		)
	],
	targets: [
		.target(
			name: "QuartzContent",
			dependencies: [
				.product(name: "Apollo", package: "Apollo"),
				.product(name: "ApolloSQLite", package: "Apollo")
			],
			path: "iOS/QuartzContent"
		)
	]
)
