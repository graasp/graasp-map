import { createContext, useContext, useMemo } from 'react';

interface QueryClientContextInterface {
  hooks: any;
  mutations: any;
  axios: any;
}

export const QueryClientContext = createContext<QueryClientContextInterface>({
  hooks: {},
  mutations: {},
  axios: {},
});

export const QueryClientContextProvider = ({
  hooks,
  mutations,
  children,
  axios,
}: {
  hooks: any;
  mutations: any;
  children: JSX.Element;
  axios: any;
}): JSX.Element => {
  const value = useMemo(
    () => ({ hooks, mutations, axios }),
    [hooks, axios, mutations],
  );

  return (
    <QueryClientContext.Provider value={value}>
      {children}
    </QueryClientContext.Provider>
  );
};

export const useQueryClientContext = (): QueryClientContextInterface =>
  useContext<QueryClientContextInterface>(QueryClientContext);
