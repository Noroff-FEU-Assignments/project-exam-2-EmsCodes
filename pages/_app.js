import "../styles/globals.css";
import "../styles/typography.css";
import AuthProvider from "../components/context/AuthContext";
import NextNProgress from "nextjs-progressbar";
import ReactScrollProgress from "@bogachenkov/react-scrolling-progress";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextNProgress color="#d96c00" height={4} />
      <div className="scroll-progress">
        <ReactScrollProgress
          styles={{
            height: "4px",
          }}
        />
      </div>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
