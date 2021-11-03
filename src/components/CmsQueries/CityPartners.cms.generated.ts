import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type CityPartnersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CityPartnersQuery = { __typename?: 'Query', cityPartners: Array<{ __typename?: 'CityPartner', link?: string | null | undefined, name?: string | null | undefined, logo?: { __typename?: 'Asset', url: string } | null | undefined }> };


export const CityPartnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CityPartners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cityPartners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CityPartnersQuery, CityPartnersQueryVariables>;