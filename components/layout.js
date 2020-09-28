import Head from "next/head";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Eva Denys</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <Nav />
    {children}
  </>
);

export default Layout;
