import * as Types from '../../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type CityPartnersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CityPartnersQuery = (
  { __typename?: 'Query' }
  & { cityPartners: Array<(
    { __typename?: 'CityPartner' }
    & Pick<Types.CityPartner, 'link' | 'name'>
    & { logo?: Types.Maybe<(
      { __typename?: 'Asset' }
      & Pick<Types.Asset, 'url'>
    )> }
  )> }
);


export const CityPartnersDocument: DocumentNode<CityPartnersQuery, CityPartnersQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CityPartners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cityPartners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};