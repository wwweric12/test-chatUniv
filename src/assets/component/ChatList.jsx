import styled from "styled-components";
import Send from "../images/send.svg";

const ChatList = ({
  title,
  content,
  isMypage,
  handleChatDelete,
  handleSend,
}) => {
  return (
    <ChatListContainer>
      <ChatListTitleBox>
        <ChatListTitle>{title}</ChatListTitle>
        {isMypage && (
          <ChatDeleteBtn onClick={handleChatDelete}>삭제</ChatDeleteBtn>
        )}
      </ChatListTitleBox>
      <ChatListContent $isMypage={isMypage}>
        {isMypage ? (
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

const ChatListTitleBox = styled.div`
  display: flex;
  height: 68px;
  padding: 10px 20px 10px 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 20px 20px 0 0;
`;
const ChatListTitle = styled.div`
  padding: 0 10px;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 400;
  font-size: 20px;
`;
const ChatListContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PURPLE10};
  border-radius: 0 0 20px 20px;
  font-size: 16px;
  padding: ${(props) => (props.$isMypage ? "10px" : "15px 20px")};
`;

const ChatDeleteBtn = styled.button`
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
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
