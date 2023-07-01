import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import IntroductionSrc from "./assets/images/introduction.svg";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Layout>
          <InLayout>
            <ImgBox alt="back_Introduction" src={IntroductionSrc} />
            <Frame>
              {/* page */}
            </Frame>
          </InLayout>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

const Layout = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
background: linear-gradient(180deg, rgba(191, 48, 226, 0.30) 0%, rgba(191, 48, 226, 0.00) 100%);
`

const InLayout = styled.div`
display: flex;
width: 1100px;
align-items: flex-start;
flex-shrink: 0;
align-self: stretch;
`

const ImgBox = styled.img`
width:50%;`

const Frame = styled.div`
width:50%;`