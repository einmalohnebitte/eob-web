import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TranslationsFragmentDoc } from '../../hooks/useTranslations/Translations.cms.generated';
export type PressArticleQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type PressArticleQuery = { __typename?: 'Query', pressArticles: Array<{ __typename?: 'PressArticle', title?: string | null | undefined, content?: { __typename?: 'PressArticleContentRichText', html: string } | null | undefined }>, translations: Array<{ __typename?: 'Translation', locale: Types.Locale, key: string, value?: string | null | undefined }> };


export const PressArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PressArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pressArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]} as unknown as DocumentNode<PressArticleQuery, PressArticleQueryVariables>;