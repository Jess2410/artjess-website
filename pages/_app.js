import "../styles/globals.css";
import "../styles/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "../redux/storeConfig";

const Root = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return <Root Component={Component} pageProps={pageProps} />;
}

export default MyApp;
