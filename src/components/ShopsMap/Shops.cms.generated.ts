import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ShopsQueryVariables = Types.Exact<{
  endCursor?: Types.Maybe<Types.Scalars['String']>;
}>;


export type ShopsQuery = (
  { __typename?: 'Query' }
  & { shopsConnection: (
    { __typename?: 'ShopConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<Types.PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ), shops: Array<(
    { __typename?: 'Shop' }
    & Pick<Types.Shop, 'id' | 'name' | 'openinghours' | 'website'>
    & { location?: Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'latitude' | 'longitude'>
    )>, shopcategories: Array<(
      { __typename?: 'ShopCategory' }
      & Pick<Types.ShopCategory, 'id' | 'name' | 'isMain'>
    )>, shopTown?: Types.Maybe<(
      { __typename?: 'ShopTown' }
      & Pick<Types.ShopTown, 'name'>
    )>, shopType: Array<(
      { __typename?: 'ShopType' }
      & Pick<Types.ShopType, 'name'>
    )> }
  )>, shopCategories: Array<(
    { __typename?: 'ShopCategory' }
    & Pick<Types.ShopCategory, 'id' | 'name' | 'isMain'>
  )>, shopTowns: Array<(
    { __typename?: 'ShopTown' }
    & Pick<Types.ShopTown, 'id' | 'name'>
    & { location?: Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'latitude' | 'longitude'>
    )> }
  )>, shopTypes: Array<(
    { __typename?: 'ShopType' }
    & Pick<Types.ShopType, 'id' | 'name'>
  )> }
);


export const ShopsDocument: DocumentNode<ShopsQuery, ShopsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shops"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openinghours"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"shopcategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopTown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopTowns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};