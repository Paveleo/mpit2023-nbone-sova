const { processUpload, deleteFile } = require("../../utils/upload.js")
// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
// @ts-ignore


const Upload = {
	Upload: GraphQLUpload,
	Mutation: {
		singleUpload: (_parent, { upload }, { prisma }) => {
			return processUpload(upload)
		},
		multiUpload: (_parent, { upload }, { prisma }) => {
			return upload.map(async (upload) => processUpload(upload))
		},
		deleteFile: async (_parent, { fileName }, { prisma }) => {
            await deleteFile(fileName)
            return fileName
        },
	}
}

module.exports = {
	Upload
}
