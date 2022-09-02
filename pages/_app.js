import Head from "next/head";
import { Header, ThemeFirstLayer } from "../components/layout";
import "../styles/general/main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
        <ThemeFirstLayer />
      <div className="pages-parent mx-auto bg-transparent">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
