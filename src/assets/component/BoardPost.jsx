import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardPost = ({ mypage, dataContents }) => {
  const { title, content, id, date } = dataContents;
  const goDetail = useNavigate();

  const handleDelete = () => {
    console.log(
      "delete"
    ); /* 삭제 버튼 onClick 활성화를 위해 console.log 추가해놨습니다. */
  };

  return (
    <PostArea onClick={() => goDetail(id)}>
      <PostContainer>
        <PostTitleBox onClick={() => goDetail(id)}>
          <PostTitle>{title}</PostTitle>
          <PostContent>{content}</PostContent>
        </PostTitleBox>
        <PostButton $mypage={mypage} onClick={handleDelete}>
          삭제
        </PostButton>
        {/* mypage면 삭제 버튼이 띄워져야 합니다. */}
      </PostContainer>
      <PostUserBox>
        <PostUserId>{id}</PostUserId>|<PostDate>{date}</PostDate>
      </PostUserBox>
    </PostArea>
  );
};

export default BoardPost;

const PostArea = styled.div`
  width: 480px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const PostContainer = styled.div`
  display: flex;
  width: 480px;
  height: 52px;
  margin-bottom: 10px;
`;

const PostTitleBox = styled.div`
  width: 444px;
  height: 52px;
`;

const PostTitle = styled.div`
  height: 26px;
  font-size: 20px;
`;

const PostContent = styled.div`
  height: 21px;
  font-size: 16px;
  margin-top: 10px;
`;

const PostButton = styled.button`
  width: 36px;
  height: 22px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 5px;
  display: ${({ $mypage }) => ($mypage ? "block" : "none")};
`;

const PostUserBox = styled.div`
  display: flex;
  height: 18px;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 14px;
`;

const PostUserId = styled.div`
  margin-right: 5px;
`;

const PostDate = styled.div`
  margin-left: 5px;
`;
