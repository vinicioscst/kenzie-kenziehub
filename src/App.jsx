import RoutesMain from "./routes/RoutesMain";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      {loading ? "" : <RoutesMain />}
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
