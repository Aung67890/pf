// import Head from "next/head";
import ThemeContextProvider from "../context/ThemeContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <NextSeo
          title="Aung Myat Thu "
          description="A MERN stack developer"
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
