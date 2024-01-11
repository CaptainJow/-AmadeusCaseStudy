import "@/styles/globals.css";
import { Provider } from "react-redux";
import configureStore from "../toolkit/store";

const store = configureStore();
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
