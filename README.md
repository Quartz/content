# Quartz Content Queries

This repo contains shared GraphQL queries for Quartz content at [content.qz.com/graphql](https://content.qz.com/graphql).

Queries are used to automatically generate TypeScript types and React hooks for React projects, and Swift types for iOS projects, using [Apollo](https://www.apollographql.com/docs/). This repo hosts both an [NPM package](/package.json) and a [Swift package](/Package.swift) for client use.

## Adding queries

Shared queries can be found in [`/Queries`](/Queries). Fragments that might be shared in multiple queries are grouped in [`/Queries/Fragments`](/Queries/Fragments). Queries related to a single page or function are grouped into folders, for instance, [`/Queries/Home`](/Queries/Home).

## Usage

### NPM

```sh
npm i --save @quartz/content
```
