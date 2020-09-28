import React from "react";
import "../styles/main.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Head from "next/head";
import Nav from "./components/nav";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, apollo }) {
  const router = useRouter();

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Eva Denys</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div className={router.pathname === "/blog" ? "newBgColor" : ""}>
        <Nav />
        {/* <div className="container animate__animated animate__fadeIn"> */}
        <Component {...pageProps} />
        {/* </div> */}
      </div>
    </ApolloProvider>
  );
}

export default withData(MyApp);
