import styled from "styled-components";
import MypageHeader from "../../component/MypageHeader";
import userSrc from "../../images/user.svg";

const CommentHistory = () => {
  const dummyData = [
    { userId: "user1", comment: "comment1", date: "3일전" },
    { userId: "user2", comment: "comment2", date: "3일전" },
    { userId: "user3", comment: "comment3", date: "3일전" },
    { userId: "user4", comment: "comment4", date: "3일전" },
    { userId: "user5", comment: "comment5", date: "3일전" },
  ];


  return (
    <>
      <MypageHeader title="댓글 내역" />
      <Layout>
        {
          dummyData.map((item) => (
            <Box>
              <User alt="user" src={userSrc} />

              <CommentBox>
                <UserBox>
                  {item.userId}
                  <DateBox>
                    {item.date}
                  </DateBox>
                </UserBox>

                <ContentBox>{item.comment}</ContentBox>
              </CommentBox>
            </Box>
          ))
        }

      </Layout>
    </>
  )
}

export default CommentHistory;

const Layout = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`


const Box = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.PURPLE10};
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  flex: 1 0 0;
`;

const UserBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 14px;
  font-weight: 400;
  @media(max-width: 529px){
    font-size: 10px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;

  @media(max-width: 529px){
    font-size: 12px;
  }
`;

const DateBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 12px;
  @media(max-width: 529px){
    font-size: 10px;
  }
`

const User = styled.img`
  width: 35px;
  height: 35px;

  @media(max-width: 529px){
    width: 25px;
    height: 25px;
  }
`