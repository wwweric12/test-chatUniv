import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import IntroductionSrc from "./assets/images/introduction.svg";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Post from "./assets/pages/Board/Post";
import Detail from "./assets/pages/Board/Detail";
import Login from "./assets/pages/Login/Login";
import Join from "./assets/pages/Join/Join";
import Main from "./assets/pages/Main/Main";
import Lanking from "./assets/pages/Statistics/Lanking";
import EditProfile from "./assets/pages/Mypage/EditProfile";
import Mypage from "./assets/pages/Mypage/Mypage";
import CommentHistory from "./assets/pages/Mypage/CommentHistory";
import MyChatList from "./assets/pages/Mypage/MyChatList";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Layout>
            <InLayout>
              <ImgBox alt="back_Introduction" src={IntroductionSrc} />
              <Frame>
                <Routes>
                  <Route element={<HeaderLayout />}>
                    <Route path="/board/:id" element={<Detail />} />
                    <Route path="/board" element={<Post />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/lanking" element={<Lanking />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/mypage" element={<Mypage />} />
                  </Route>

                  <Route path="/mypage/editprofile" element={<EditProfile />} />
                  <Route path="/mypage/comment" element={<CommentHistory />} />
                  <Route path="/mypage/mychatlist" element={<MyChatList />} />
                </Routes>
                <Footer />
              </Frame>
            </InLayout>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

const HeaderLayout = () => {
  return (
    <>
      <Header />
      {<Outlet />}
    </>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(191, 48, 226, 0.3) 0%,
    rgba(191, 48, 226, 0) 100%
  );
  height: 100vh;
`;

const InLayout = styled.div`
  display: flex;
  width: 1100px;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  height: 100vh;
`;

const ImgBox = styled.img`
  width: 50%;
  height: 100vh;
`;

const Frame = styled.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 100vh;
`;
