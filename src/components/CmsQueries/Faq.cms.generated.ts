import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TranslationsFragmentDoc } from '../../hooks/useTranslations/Translations.cms.generated';
export type FaqsQueryVariables = Types.Exact<{
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type FaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'Faq', question: string, answer?: { __typename?: 'RichText', html: string } | null }>, translations: Array<{ __typename?: 'Translation', locale: Types.Locale, key: string, value?: string | null }> };


export const FaqsDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Faqs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faqs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]} as unknown as DocumentNode<FaqsQuery, FaqsQueryVariables>;