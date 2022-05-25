import "../styles/globals.css";
import "../styles/main.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Navbar from "../components/common/Navbar";
import { SessionProvider } from "next-auth/react";
import UserState from "../context/userState";
const progress = new ProgressBar({
  size: 4,
  color: "#6D4AB5",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserState>
        <Navbar />

        <Component {...pageProps} />
      </UserState>
    </SessionProvider>
  );
}

export default MyApp;
