import React from "react";
import styled from "styled-components";
import ChatList from "../../component/ChatList";

export default function Test() {
  return (
    <Container>
      <ChatList page="mypage" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
