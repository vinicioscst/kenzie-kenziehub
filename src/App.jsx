import RoutesMain from "./routes/RoutesMain";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <RoutesMain />
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  )
}

export default App
