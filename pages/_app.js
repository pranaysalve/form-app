import "@/styles/globals.css";
import { FormContextProvider } from "@/service/formControl.context";
export default function App({ Component, pageProps }) {
  return (
    <>
      <FormContextProvider>
        <Component {...pageProps} />
      </FormContextProvider>
    </>
  );
}
