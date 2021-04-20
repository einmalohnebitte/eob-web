import { Resolvers } from "@/generated/resolvers-types";

import { newsletter } from "./newsletter";
import { sellEmail } from "./sellEmail";
import { spreadEmail } from "./spreadEmail";

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
    spreadEmail,
    newsletter,
  },
  Query: {
    hello: () => "world",
  },
};
