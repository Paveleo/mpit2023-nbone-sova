import { buildSchema } from "graphql"

const { default: gql } = require('graphql-tag')

const Upload = gql`
    scalar Upload
    type Mutation{
        singleUpload(upload: Upload!):String
        multiUpload(upload: [Upload]!):[String]
        deleteFile(fileName: String!): String!
    }
`

module.exports = {
    Upload
}