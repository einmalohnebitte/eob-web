import { PriceDocument } from "../__mock__/price.generated";
import * as GQL from "../gqlRequest";
import { useReactMutation, useReactQuery } from "..";
import { act, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const flushPromises = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 10));

jest.mock("../gqlRequest", () => ({
  gqlRequest: jest
    .fn()
    .mockImplementation(() => Promise.resolve({ price: 130.5 })),
}));
describe("useReactQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return query", async () => {
    const Mock = ({ children }: any) => (
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useReactQuery(PriceDocument), {
      wrapper: Mock,
    });
    await waitFor(() => expect(result.current.data).toEqual({ price: 130.5 }));
  });

  it("should return mutation", async () => {
    const Mock = ({ children }: any) => (
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    );
    const { result } = renderHook(() => useReactMutation(PriceDocument), {
      wrapper: Mock,
    });
    result.current.mutate({
      from: "111",
      to: "222",
      airBnb: "",
    });
    await waitFor(() => expect(result.current.data).toEqual({ price: 130.5 }));
  });
});
