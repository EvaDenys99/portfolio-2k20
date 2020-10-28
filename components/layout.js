import Head from "next/head";
import Nav from "./nav";
import moment from "moment";

const Layout = ({ children, pageTitle, description }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <Nav />
    {children}
    <footer className="small copywright-text">
      © {moment().format("YYYY")} Eva Denys
    </footer>
  </>
);

export default Layout;
