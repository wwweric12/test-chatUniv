import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <Layout>
      <TxtBox>
        <TxtComment>
          댓글
        </TxtComment>
      </TxtBox>
    </Layout>
  );
}

export default Comment;

const Layout = styled.div`
  display: flex;
  padding: 30px 10px 10px 10px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`

const TxtBox = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`

const TxtComment = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 8px;`

