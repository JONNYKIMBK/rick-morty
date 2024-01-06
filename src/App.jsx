import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/homePage";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
);

export default App;
