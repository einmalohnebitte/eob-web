import { Resolvers } from "@/generated/resolvers-types";

import { sellEmail } from "./sellEmail";

export type ResolverContext = {
  session?: {
    user?: {
      name: string;
      password: string;
    };
  };
};

export const resolvers: Resolvers = {
  Mutation: {
    sellEmail,
  },
  Query: {
    hello: () => "world",
  },
};
