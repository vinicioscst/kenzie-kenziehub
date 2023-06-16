import RoutesMain from "./routes/RoutesMain";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const App = () => {

  const [userData, setUserData] = useState(null);

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <RoutesMain userData={userData} setUserData={setUserData}/>
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
