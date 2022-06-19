// import Head from "next/head";
import ThemeContextProvider from "../context/ThemeContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <NextSeo
          title="Aung Myat Thu"
          description=" I am CS student | MERN stack developer | Freelancer "
          canonical="%REACT_APP_DOMAIN%"
          openGraph={{
            url: "%REACT_APP_DOMAIN%",
            title: "Aung Myat Thu",
            description: "I am CS student | MERN stack developer | Freelancer",
            images: [
              {
                url: "",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
                type: "image/png",
              },
              {
                url: "%REACT_APP_DOMAIN%/images/programmer.png",
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
                type: "image/png",
              },
              { url: "%REACT_APP_DOMAIN%/images/programmer.png" },
              { url: "%REACT_APP_DOMAIN%/images/programmer.png" },
            ],
            site_name: "Aung Myat Thu",
          }}
          
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
