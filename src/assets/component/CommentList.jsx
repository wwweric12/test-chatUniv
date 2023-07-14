import { useState } from "react";
import styled from "styled-components";
import userSrc from "../images/user.svg";

const CommentList = () => {
  // 자신의 댓글인지 여부
  const [own, setOwn] = useState(false);
  const [editContent, setEditContent] = useState("");

  return (
    <Layout>
      {/* map함수로 구현  */}
      {/* 임시로 내 댓글일때 아닐때 확인용으로 만듬 */}

      <Box>
        <img alt="user" src={userSrc} />

        <CommentBox>
          <UserBox>user</UserBox>
          <ContentBox>content</ContentBox>
        </CommentBox>
      </Box>

      {/* 내 댓글 */}
      <Box background={own ? null : (props) => props.theme.colors.PURPLE10}>
        <img alt="user" src={userSrc} />

        <CommentBox>
          <UserBox>
            user
            {!own && (
              <ButtonLayout>
                <ButtonBox>수정</ButtonBox>
                <ButtonBox>삭제</ButtonBox>
              </ButtonLayout>
            )}
          </UserBox>

          {!own ? (
            <ContentBox>content</ContentBox>
          ) : (
            <CommentInput
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          )}
        </CommentBox>
      </Box>
    </Layout>
  );
};

export default CommentList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const Box = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  background: ${(props) => props.background || props.theme.colors.WHITE};
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
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  justify-content: space-between;
  align-self: stretch;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const ButtonBox = styled.button`
  display: flex;
  padding: 3px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CommentInput = styled.input`
  display: flex;
  height: 30px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  width: 90%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  color: ${({ theme }) => theme.colors.BLACK};
  background: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PURPLE50};
  }
`;
