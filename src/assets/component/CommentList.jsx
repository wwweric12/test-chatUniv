import React from "react";
import styled from "styled-components";
import userSrc from "../images/user.svg";

const CommentList = () => {
  return (
    <Layout>
      <Box>
        <img alt="user" src={userSrc} />
        <CommentBox>
          <UserBox>
            user
          </UserBox>
          <ContentBox>
            content
          </ContentBox>
        </CommentBox>
      </Box>
    </Layout>
  );
}

export default CommentList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`

const Box = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  flex: 1 0 0;
`

const UserBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

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
`