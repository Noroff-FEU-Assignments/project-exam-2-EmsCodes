import "../styles/globals.css";
import "../styles/typography.css";
import AuthProvider from "../components/context/AuthContext";
import NextNProgress from "nextjs-progressbar";
import ReactScrollProgress from "@bogachenkov/react-scrolling-progress";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextNProgress color="#d96c00" height={5} />
      <ReactScrollProgress />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
