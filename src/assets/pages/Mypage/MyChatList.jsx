import { useState } from "react";
import styled from "styled-components";
import ChatList from "../../component/ChatList";
import MypageHeader from "../../component/MypageHeader";

const MyChatList = () => {
  const [myChat, setMyChat] = useState([
    { title: "title", myPage: true, id: 1 },
    { title: "title1", myPage: true, id: 2 },
    { title: "title2", myPage: true, id: 3 },
    { title: "title3", myPage: true, id: 4 },
    { title: "title4", myPage: true, id: 5 },
    { title: "title4", myPage: true, id: 6 },
  ]);
  const onDelete = () => {};
  const onSend = () => {};

  return (
    <ChatListContainer>
      <MypageHeader title="채팅 내역" />
      {myChat.map((item, id) => (
        <ChatListBox key={id}>
          <ChatList
            title={item.title}
            isMypage={item.myPage}
            handleChatDelete={onDelete}
            handleSend={onSend}
          />
        </ChatListBox>
      ))}
    </ChatListContainer>
  );
};
export default MyChatList;

const ChatListContainer = styled.div`
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatListBox = styled.div`
  margin-bottom: 10px;
`;
