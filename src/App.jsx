import RoutesMain from "./routes/RoutesMain";

import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";

function App() {

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <RoutesMain />
    </>
  )
}

export default App
