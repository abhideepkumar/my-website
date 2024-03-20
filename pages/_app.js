import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import "@fontsource/quicksand";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
