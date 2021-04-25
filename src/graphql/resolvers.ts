import { Resolvers } from "@/generated/resolvers-types";

import { sendEmail } from "./emails";
import { newsletter } from "./newsletter";

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
    sendEmail,
    newsletter,
  },
  Query: {
    hello: () => "world",
  },
};
