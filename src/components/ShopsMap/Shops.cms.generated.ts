import * as Types from '../../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ShopsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ShopsQuery = (
  { __typename?: 'Query' }
  & { shops: Array<(
    { __typename?: 'Shop' }
    & Pick<Types.Shop, 'id' | 'name' | 'openinghours' | 'website'>
    & { location?: Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'latitude' | 'longitude'>
    )>, categories: Array<(
      { __typename?: 'ShopCategory' }
      & Pick<Types.ShopCategory, 'id' | 'name' | 'isMain'>
    )> }
  )>, shopCategories: Array<(
    { __typename?: 'ShopCategory' }
    & Pick<Types.ShopCategory, 'id' | 'name' | 'isMain'>
  )> }
);


export const ShopsDocument: DocumentNode<ShopsQuery, ShopsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openinghours"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}}]}}]}}]};