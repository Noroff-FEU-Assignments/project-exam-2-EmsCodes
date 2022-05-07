import "../styles/globals.css";
import "../styles/typography.css";
import AuthProvider from "../components/context/AuthContext";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextNProgress color="#d96c00" height={10} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
