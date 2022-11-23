import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/navbar.css'
import '../styles/mainContent.css'
import "react-toastify/dist/ReactToastify.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ToastContainer } from "react-toastify";
import { Fragment, useEffect } from 'react'
import { store } from "../config/redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Navbar from '../components/navbar/navbar'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    document.title = "Peworld | Hire pewpeople"
  }, []);

  return (
    <SSRProvider>
      <Fragment>
        {router.pathname !== "/profile" &&
          router.pathname !== "/home" &&
          router.pathname !== "/auth/signup" &&
          router.pathname !== "/auth/login" ? (
          <Navbar />
        ) : null}

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Fragment>
    </SSRProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async ({ ctx }) => {
  const token = ctx.req?.cookies?.token || null;
  const id = ctx.req?.cookies?.user_id || null;
  const role = ctx.req?.cookies?.role || null;

  return {
    token: token,
    user_id: id,
    role: role,
  };
};