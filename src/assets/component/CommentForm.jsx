import React, { useState } from "react";
import styled from "styled-components";
import userSrc from "../images/user.svg";
import sendSrc from "../images/send.svg";

const CommentForm = () => {
  const [content, setContent] = useState("");

  return (
    <Layout>
      <img alt="user" src={userSrc} />
      <CommentFormBox>
        <Commentinput
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SendBox type="submit">
          <img alt="send" src={sendSrc} />
        </SendBox>
      </CommentFormBox>
    </Layout>
  );
}

export default CommentForm;

const Layout = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  align-items: center;
  align-self: stretch;
  width: 100%;
`

const CommentFormBox = styled.form`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 5px;
  flex: 1 0 0;
  overflow: auto;
`

const Commentinput = styled.input`
  display: flex;
  height: 30px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  color: ${({ theme }) => theme.colors.BLACK};

  &:focus{
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PURPLE50};
  }
`

const SendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
`