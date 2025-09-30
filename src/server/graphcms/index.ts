import { gqlRequest } from "@/hooks/useReactQuery";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { limit } from "@/server/graphcms/rateLimit";

const endpoint = `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`;

export const graphCmsRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => {
    const run = () => gqlRequest(document, variables, endpoint);

    // Throttle only on the server (SSG/SSR/build). Client calls stay snappy.
    return typeof window === "undefined" ? limit(run) : run();
};
