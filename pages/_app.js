import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/navbar.css'
import '../styles/mainContent.css'
// import '../styles/search.css'
import { ToastContainer } from "react-toastify";
import { Fragment, useEffect } from 'react'
import { store } from "../config/redux/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Fragment>
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
  )
}

export default MyApp
