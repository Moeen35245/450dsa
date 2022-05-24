import "../styles/globals.css";
import "../styles/main.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Navbar from "../components/common/Navbar";
import { SessionProvider } from "next-auth/react";
import UserState from "../context/userState";
import Script from "next/script";
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
        {/* changes are here */}
        {/* <Script
          id="myScript1"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-GDRNR8KMR6"
        />
        <Script id="myScript2" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDRNR8KMR6');`}
        </Script> */}
        <Component {...pageProps} />
      </UserState>
    </SessionProvider>
  );
}

export default MyApp;

// <script async src="https://www.googletagmanager.com/gtag/js?id=G-GDRNR8KMR6"></script>
{
  /* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GDRNR8KMR6');
</script> */
}
