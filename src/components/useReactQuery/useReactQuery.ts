import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";

const clientLocal = new GraphQLClient(`/api/graphql`);

const clientCms = new GraphQLClient(
  `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`
);

const gqlRequest = (client: GraphQLClient) => <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);

export const useReactQuery = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: UseQueryOptions<TData, any, TData>
): UseQueryResult<TData> =>
  useQuery<TData>(
    `${(document.definitions[0] as any)?.name?.value}${JSON.stringify(
      variables
    )}`,
    () => {
      return gqlRequest(clientLocal)(document, variables);
    },
    options
  );

export const useReactMutation = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  options?: UseMutationOptions<TData, any, TVariables, any>
): UseMutationResult<TData, any, TVariables, any> => {
  return useMutation(
    (variables: TVariables) => gqlRequest(clientLocal)(document, variables),
    options
  );
};

export const useReactQueryCms = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: UseQueryOptions<TData, any, TData>
): UseQueryResult<TData> =>
  useQuery<TData>(
    `${(document.definitions[0] as any)?.name?.value}${JSON.stringify(
      variables
    )}`,
    () => {
      return gqlRequest(clientCms)(document, variables);
    },
    options
  );
