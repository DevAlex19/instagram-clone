import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { store } from "../store/store/store";
import { Provider } from "react-redux";
import Head from "next/head";
import PrivateRoute from "../components/PrivateRoute";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Instagram Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Navbar />
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
