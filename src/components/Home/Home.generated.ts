import * as Types from '../../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = (
  { __typename?: 'Query' }
  & { pageSections: Array<(
    { __typename?: 'PageSection' }
    & Pick<Types.PageSection, 'title' | 'locale' | 'code'>
    & { content: (
      { __typename?: 'RichText' }
      & Pick<Types.RichText, 'html'>
    ), picture: Array<(
      { __typename?: 'Asset' }
      & Pick<Types.Asset, 'url'>
    )> }
  )> }
);


export const HomePageDocument: DocumentNode<HomePageQuery, HomePageQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"StringValue","value":"Home","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};