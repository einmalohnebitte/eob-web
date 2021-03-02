import * as Types from '../../generated/graphql';

import { TranslationsFragment } from '../../translate/Translations.generated';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TranslationsFragmentDoc } from '../../translate/Translations.generated';
export type PageSectionsQueryVariables = Types.Exact<{
  page?: Types.Scalars['String'];
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type PageSectionsQuery = (
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
  )>, translations: Array<(
    { __typename?: 'Translation' }
    & TranslationsFragment
  )> }
);


export const PageSectionsDocument: DocumentNode<PageSectionsQuery, PageSectionsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"Home","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]};