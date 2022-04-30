import Router from "./routers/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/Theme";
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/Atoms";
import { ThemeProvider } from "styled-components";
import "./styles/Global.css";

function App() {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={theme !== "2" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
