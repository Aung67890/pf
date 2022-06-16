// import Head from "next/head";
import ThemeContextProvider from "../context/ThemeContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        {/* <Head>
          <link rel="icon" href="../public/favicon.ico" />
        </Head> */}
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
