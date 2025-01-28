import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import "../public/assets/css/header.css";
import { AuthProvider } from "../src/AuthContext";

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <Fragment>
      <Head>
        <title>Fioxen - Directory & Listings React NextJs Template</title>
        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loader && <PreLoader />}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Fragment>
  );
};

export default MyApp;