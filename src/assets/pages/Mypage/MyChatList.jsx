import styled from "styled-components";
import ChatList from "../../component/ChatList";
import MypageHeader from "../../component/MypageHeader";

const MyChatList = () => {
  const data = [
    { title: "title", page: "mypage" },
    { title: "title1", page: "mypage" },
    { title: "title2", page: "mypage" },
    { title: "title3", page: "mypage" },
    { title: "title4", page: "mypage" },
    { title: "title4", page: "mypage" },
  ];
  const onDelete = () => {};
  const onSend = () => {};

  return (
    <ChatListContainer>
      <MypageHeader title="채팅 내역" />
      {data.map((item, index) => (
        <ChatListBox key={index}>
          <ChatList
            title={item.title}
            page={item.page}
            handelChatDelete={onDelete}
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
