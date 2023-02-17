import { gqlRequest } from "@/hooks/useReactQuery";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export const graphCmsRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) =>
  gqlRequest(
    document,
    variables,
    `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`
  );
