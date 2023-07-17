import styled from "styled-components";
import mypageSrc from "../images/mypage.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <Layout>
        <LogoBox>
          <Logo to="/">
            ChatUniv
          </Logo>
        </LogoBox>
        <UserBox>
          로그인
          {/* 로그아웃 */}
          <Link to="/mypage">
            <img alt="mypage" src={mypageSrc} />
          </Link>
        </UserBox>
      </Layout>
    </Box>
  )
}

export default Header;

const Box = styled.div`
  width: 100%;
`

const Layout = styled.div`
  display: flex;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
`

const LogoBox = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: flex-start;
  gap: 10px;
`

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 24px;
  font-weight: 600;
`

const UserBox = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-size: 16px;
`
