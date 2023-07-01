import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}></ThemeProvider>
    </>
  );
};

export default App;
