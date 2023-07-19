import { styled } from "styled-components";

const DeleteModal = () => {
  return (
    <Container>
      <DeleteBox>삭제 하시겠습니까?</DeleteBox>
      <ButtonContainer>
        <YesButton>예</YesButton>
        <NoButton>아니오</NoButton>
      </ButtonContainer>
    </Container>
  );
};

export default DeleteModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 136px;
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;

  @media (max-width: 529px) {
    width: 250px;
  }
`;

const DeleteBox = styled.div`
  width: 356px;
  height: 41px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  background-color: ${({ theme }) => theme.colors.WHITE};

  @media (max-width: 529px) {
    width: 220px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 356px;
  height: 35px;
  padding: 0px 100px;
`;

const YesButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 30px;
  font-size: 14px;
`;

const NoButton = styled(YesButton)`
  width: 59px;
`;
