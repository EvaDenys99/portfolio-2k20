import React from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Head from "next/head";
import Nav from "../components/nav";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Eva Denys</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Nav />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default withData(MyApp);
