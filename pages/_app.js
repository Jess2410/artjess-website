import '../styles/globals.css'
import '../styles/style.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = ({ Component, pageProps }) => {
return (
  <>
    <Component {...pageProps} />
    <ToastContainer/>
  </>
)
}

function MyApp({ Component, pageProps }) {
  return <Root Component={Component} pageProps={pageProps}/>
}

export default MyApp
