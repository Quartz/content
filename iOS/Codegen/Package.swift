// swift-tools-version:5.2
import PackageDescription

let package = Package(
	name: "Codegen",
	platforms: [.macOS(.v10_14)],
	products: [
		.library(name: "Codegen", targets: ["Codegen"])
	],
	dependencies: [
		.package(
			name: "Apollo",
			url: "https://github.com/apollographql/apollo-ios",
			.exact("0.42.0")
		),
		.package(url: "https://github.com/apple/swift-argument-parser", from: "0.3.0")
	],
	targets: [
		.target(name: "Codegen", dependencies: [
			.product(name: "ApolloCodegenLib", package: "Apollo"),
			.product(name: "ArgumentParser", package: "swift-argument-parser")
		], path: "Sources")
	]
)
