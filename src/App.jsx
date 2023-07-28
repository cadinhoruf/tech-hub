import { ToastContainer } from "react-toastify";
import GlobalStyles from "../styles/GlobalStyles";
import { RoutesMain } from "./routes/RoutesMain";
import "react-toastify/dist/ReactToastify.css";
import { AppStyled, LoaderWrapper } from "../styles/App";
import { useContext, useState } from "react";
import { UserContext } from "./providers/UserContext";
import CircleLoader from "react-spinners/CircleLoader";

export const App = () => {
  const { loading } = useContext(UserContext);
  const [color, setColor] = useState("#ff577f");

  return (
    <AppStyled>
      {loading ? (
        <LoaderWrapper>
          <CircleLoader color={color} size={75} />
        </LoaderWrapper>
      ) : (
        <RoutesMain />
      )}
      <GlobalStyles />
      <ToastContainer />
    </AppStyled>
  );
};


export default App;
