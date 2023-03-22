import { ApolloServer } from "apollo-server-express";
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
const { BaseRedisCache } = require("apollo-server-cache-redis");
const responseCachePlugin = require('apollo-server-plugin-response-cache')
import { applyMiddleware } from "graphql-middleware";
import express from "express";
import http from "http";
import GraphQLSetup from "./graphql";
import { PrismaClient } from "@prisma/client";
import { createContext } from "./context";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import PrismaSelectMiddleware from "./utils/prismaSelect";
import path from "path";

const Redis = require("ioredis");

const redis = new Redis({
	port: 6379,
	host: "127.0.0.1",
});



const startApolloServer = async (typeDefs, resolvers, prisma: PrismaClient) => {
	const app = express();
	app.use(graphqlUploadExpress());
	app.use('/public', express.static("public"));

	const httpServer = http.createServer(app);
	const server = new ApolloServer({
		schema: applyMiddleware(GraphQLSetup.schema, PrismaSelectMiddleware),
		context: createContext,
		csrfPrevention: false,
		// cache: new BaseRedisCache({
		// 	client: redis,
		// }),
		plugins: [
			responseCachePlugin(),
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageGraphQLPlayground(),
		],
	});
	await server.start();
	server.applyMiddleware({ app });
	await new Promise<void>((resolve) =>
		httpServer.listen({ port: 4000, path: '/graphql' }, resolve)
	);
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

export default startApolloServer;
