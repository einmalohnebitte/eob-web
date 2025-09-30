import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TranslationsQueryVariables = Types.Exact<{
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type TranslationsQuery = { __typename?: 'Query', translations: Array<{ __typename?: 'Translation', locale: Types.Locale, key: string, value?: string | null }> };

export type TranslationsFragment = { __typename?: 'Translation', locale: Types.Locale, key: string, value?: string | null };

export const TranslationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Translations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Translation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<TranslationsFragment, unknown>;
export const TranslationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Translations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Translations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Translation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<TranslationsQuery, TranslationsQueryVariables>;