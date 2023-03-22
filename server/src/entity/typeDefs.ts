import { mergeTypeDefs } from "@graphql-tools/merge";
// import User from "./User/typeDefs";
import { gql } from "apollo-server-core";

const { Upload } = require('./Upload/typeDefs')
const { Cache } = require('./Cache/typeDefs')

const Initial = gql`
   scalar DateTime
   scalar Json
`

const typeDefsArray = [Cache, Initial, Upload];

export default typeDefsArray;
