import React from "react";
import styled from "styled-components";
import mypageSrc from "../images/mypage.svg";

const Header = () => {
  return (
    <Box>
      <Layout>
        <LogoBox>
          <Logo>
            ChatUniv
          </Logo>
        </LogoBox>
        <UserBox>
          로그인
          {/* 로그아웃 */}
          <img alt="mypage" src={mypageSrc}/>
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

const Logo = styled.div`
color: ${({ theme }) => theme.colors.BLACK};
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const UserBox = styled.div`
display: flex;
padding: 5px;
align-items: center;
gap: 20px;
color: ${({ theme }) => theme.colors.PURPLE100};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;`
