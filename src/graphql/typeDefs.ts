import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  input SellEmailReq {
    firstName: String!
    lastName: String!
    message: String!
    subject: String!
    email: String!
  }

  type Mutation {
    sellEmail(email: SellEmailReq!): Boolean!
  }

  type Query {
    hello: String
  }
`;
