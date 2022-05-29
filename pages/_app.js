import "../styles/globals.css";
import "../styles/typography.css";
import AuthProvider from "../components/context/AuthContext";
import NextNProgress from "nextjs-progressbar";
import ReactScrollProgress from "@bogachenkov/react-scrolling-progress";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div aria-hidden="true">
        <NextNProgress color="#d96c00" height={6} />
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <ReactScrollProgress
          styles={{
            height: "6px",
            colors: ["#b85c00", "#1a317e"],
          }}
        />
      </div>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
