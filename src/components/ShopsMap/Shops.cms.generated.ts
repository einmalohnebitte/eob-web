import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

import * as Types from "../../server/generated/graphql";

export type ShopsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ShopsQuery = { __typename?: "Query" } & {
  shops: Array<
    { __typename?: "Shop" } & Pick<
      Types.Shop,
      "id" | "name" | "openinghours" | "website"
    > & {
        location?: Types.Maybe<
          { __typename?: "Location" } & Pick<
            Types.Location,
            "latitude" | "longitude"
          >
        >;
        categories: Array<
          { __typename?: "ShopCategory" } & Pick<
            Types.ShopCategory,
            "id" | "name" | "isMain"
          >
        >;
        shopTown?: Types.Maybe<
          { __typename?: "ShopTown" } & Pick<Types.ShopTown, "name">
        >;
      }
  >;
  shopCategories: Array<
    { __typename?: "ShopCategory" } & Pick<
      Types.ShopCategory,
      "id" | "name" | "isMain"
    >
  >;
  shopTowns: Array<
    { __typename?: "ShopTown" } & Pick<Types.ShopTown, "id" | "name"> & {
        location?: Types.Maybe<
          { __typename?: "Location" } & Pick<
            Types.Location,
            "latitude" | "longitude"
          >
        >;
      }
  >;
  shopetypes: Array<
    { __typename?: "Shopetype" } & Pick<Types.Shopetype, "id" | "name">
  >;
};

export const ShopsDocument: DocumentNode<ShopsQuery, ShopsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Shops" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "shops" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1000" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "openinghours" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "location" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "latitude" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "longitude" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "website" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isMain" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "shopTown" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "shopCategories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isMain" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "shopTowns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "location" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "latitude" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "longitude" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "shopetypes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
