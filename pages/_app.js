import "../styles/globals.css";
import "../styles/typography.css";
import AuthProvider from "../components/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
