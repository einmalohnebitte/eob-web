import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

import * as Types from "../../server/generated/local";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EmailReq = {
  subject: Scalars["String"];
  html: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  sendEmail: Scalars["Boolean"];
  newsletter: Scalars["Boolean"];
};

export type MutationSendEmailArgs = {
  email: EmailReq;
};

export type MutationNewsletterArgs = {
  user: NewsletterReq;
};

export type NewsletterReq = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]>;
};

export type SellEmailReq = {
  shop: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  address: Scalars["String"];
  postCode: Scalars["Int"];
  town: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  sticker: Scalars["String"];
  email: Scalars["String"];
};

export type SpreadEmailReq = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  postCode: Scalars["Int"];
  town: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
};

export type SubscribeNewsletterMutationVariables = Types.Exact<{
  user: Types.NewsletterReq;
}>;

export type SubscribeNewsletterMutation = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "newsletter"
>;

export const SubscribeNewsletterDocument: DocumentNode<
  SubscribeNewsletterMutation,
  SubscribeNewsletterMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscribeNewsletter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "user" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NewsletterReq" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "newsletter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "user" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "user" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
