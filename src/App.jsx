import { ToastContainer } from "react-toastify";
import GlobalStyles from "../styles/GlobalStyles";
import { RoutesMain } from "./routes/RoutesMain";
import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from "../styles/App";

export const App = () => {
  return (
    <AppStyled>
      <RoutesMain />
      <GlobalStyles />
      <ToastContainer />
    </AppStyled>
  );
};

export default App