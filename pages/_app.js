import "../styles/globals.css";
import "@fontsource/aladin";
import Navbar from "./Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
