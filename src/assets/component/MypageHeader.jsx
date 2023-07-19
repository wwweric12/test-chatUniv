import styled from "styled-components";
import goBackSrc from "../images/goBack.svg";
import { Link } from "react-router-dom";

const MypageHeader = ({ title }) => {

  return (
    <Box>
      <Layout>
        <Link to="/mypage">
          <img alt="back" src={goBackSrc} />
        </Link>
        <TitleBox>
          <Title>
            {title}
          </Title>
        </TitleBox>
      </Layout>
    </Box>
  )
}

export default MypageHeader;

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

const TitleBox = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`

const Title = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 20px;

  @media(max-width: 529px){
    font-size: 16px;
  }
`
