import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const actionWithPromise = () => {
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};
const router = {
  pathname: "/",
  route: "/users/$user",
  query: { q: "query_param1" },
  asPath: "/test_pathname?q=query_param1#hash_param1",
  prefetch: actionWithPromise,
  push: actionWithPromise,
  replace: actionWithPromise,
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => {
    // const global = useGlobal();
    return (
      <QueryClientProvider client={queryClient}>
        <RouterContext.Provider value={router}>
          {/* <GlobalStyle /> */}
          {/* <ThemeProvider theme={theme(global)}> */}
          <Story />
          {/* </ThemeProvider> */}
        </RouterContext.Provider>
      </QueryClientProvider>
    );
  },
];
