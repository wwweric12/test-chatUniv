import styled from "styled-components";
import user from "../../images/user.svg";

const Detail = () => {
  return (
    <DetailContainer>
      <DetailUserBox>
        <DetailUserImg src={user} alt="userImg"></DetailUserImg>
        <DetailUserIdBox>
          <DetailUserId>UserId</DetailUserId>
          <DetailDate>02.02 21:09</DetailDate>
        </DetailUserIdBox>
      </DetailUserBox>
      <DetailContentBox>
        <DetailTitle>Title</DetailTitle>
        <DetailContent>Content...</DetailContent>
      </DetailContentBox>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 490px;
  height: 584px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 10px;
`;

const DetailUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  height: 64px;
`;

const DetailUserImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 5px;
`;

const DetailUserIdBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 417px;
  height: 44px;
`;

const DetailUserId = styled.div`
  height: 18px;
  font-size: 14px;
`;

const DetailDate = styled.div`
  height: 18px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const DetailContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 520px;
  padding: 15px;
`;

const DetailTitle = styled.div`
  width: 460px;
  height: 26px;
  font-size: 20px;
  font-weight: 600;
`;

const DetailContent = styled.div`
  width: 460px;
  height: 464px;
  font-size: 16px;
`;
