import styled from "styled-components";
import Send from "../images/send.svg";

const ChatList = ({ title, content, page, handleChatDelete, handleSend }) => {
  return (
    <ChatListContainer>
      <ChatListTitle>
        {title}
        {page === "mypage" && (
          <ChatDeleteBtn onClick={handleChatDelete}>삭제</ChatDeleteBtn>
        )}
      </ChatListTitle>
      <ChatListContent page={page}>
        {page === "mypage" ? (
          <ChatInputBox>
            <ChatInput />
            <button onClick={handleSend}>
              <img src={Send} alt="send-img" />
            </button>
          </ChatInputBox>
        ) : (
          content
        )}
      </ChatListContent>
    </ChatListContainer>
  );
};
export default ChatList;

const ChatListContainer = styled.div`
  width: 100%;
`;
const ChatListTitle = styled.div`
  width: 100%;
  height: 61px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 20px 20px 0 0;
  padding: 20px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 400;
  font-size: 20px;
`;
const ChatListContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PURPLE10};
  border-radius: 0 0 20px 20px;
  font-size: 16px;
  padding: ${(props) => (props.page === "mypage" ? "10px" : "15px 20px")};
`;

const ChatDeleteBtn = styled.button`
  position: absolute;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-weight: 400;
  padding: 3px;
  border-radius: 5px;
  font-size: 20px;
`;

const ChatInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const ChatInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
`;
