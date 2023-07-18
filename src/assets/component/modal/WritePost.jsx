import styled from "styled-components";
import close from "../../images/modal_close.svg";

const WritePost = ({ closeBtn, completeBtn }) => {
  return (
    <Container>
      <Header>
        <CancelButton onClick={closeBtn}>
          <img src={close} alt="close_button" />
        </CancelButton>
        <Letter>게시글 작성하기</Letter>
      </Header>
      <ContentContainer>
        <ContentBox>
          <ContentHeader placeholder="제목"></ContentHeader>
          <ContentDetail placeholder="내용을 입력하세요."></ContentDetail>
        </ContentBox>
      </ContentContainer>
      <Footer>
        <Button onClick={completeBtn}>완료</Button>
      </Footer>
    </Container>
  );
};

export default WritePost;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 370px;
  border-radius: 20px;
  padding: 0px 0px 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE70}; // border가 없으면 구분이 안가서 임의로 색상을 넣었습니다.
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
  border-bottom: 1px solid #d3d3d3;
`;

const CancelButton = styled.button`
  width: 25px;
  height: 25px;
`;

const Letter = styled.div`
  display: flex;
  justify-content: center;
  width: 405px;
  height: 21px;
  font-size: 16px;
  padding-right: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 278px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 238px;
`;

const ContentHeader = styled.input`
  width: 410px;
  height: 41px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 10px 10px 0px 0px;
  border-bottom: none;
  resize: none;
  outline: none;
  line-height: 41px;
  padding-left: 10px;
  &::placeholder {
    line-height: 41px;
    color: ${({ theme }) => theme.colors.PURPLE50};
  }
`;

const ContentDetail = styled.textarea`
  width: 410px;
  height: 197px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 150px;
  resize: none;
  outline: none;
  padding: 10px 0px 0px 10px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.PURPLE50};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 38px;
  border-radius: 0px 0px 20px 20px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  color: ${({ theme }) => theme.colors.WHITE};
  width: 46px;
  height: 28px;
  border-radius: 20px;
`;
