import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Comment from "../../component/Comment";
import out from "../../images/out.svg";
import Send from "../../images/send.svg";
import user from "../../images/user.svg";

const Chatting = () => {
  const [inputText, setInputText] = useState("");
  const [chatList, setChatList] = useState([]);
  const scrollRef = useRef();
  // const data = ["안녕하세요", "반갑습니다"];

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);
  const handleSend = (e) => {
    e.preventDefault();
    if (inputText) {
      setChatList([...chatList, inputText]);
      setInputText("");
    }
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <ChatContainer>
        <ChatRoom>
          <ChatHeader>
            <ChatTitle>title</ChatTitle>
            <img src={out} alt="out" />
          </ChatHeader>
          <ContentContainer onSubmit={handleSend}>
            {/* {data.map((item) => {
              return (
                <MessageContainer isGpt={true}>
                  <MessageText isGpt={true}>{item}</MessageText>
                </MessageContainer>
              );
            })} 이부분은 보여주기식입니다 나중에 통신할때는 밑에있는 곳에서 함께 작석해야합니다 */}

            <ContentBox ref={scrollRef}>
              {chatList.map((item) => {
                return (
                  <MessageContainer isGpt={false}>
                    <MessageBox>
                      <MessageId>userId</MessageId>
                      <MessageText isGpt={false}>{item}</MessageText>
                    </MessageBox>
                    <img src={user} alt="user" />
                  </MessageContainer>
                );
              })}
            </ContentBox>
            <InputContainer>
              <ChatInputBox>
                <ChatInput onChange={handleChange} value={inputText} />
                <button type="submit">
                  <img src={Send} alt="send-img" />
                </button>
              </ChatInputBox>
            </InputContainer>
          </ContentContainer>
        </ChatRoom>
      </ChatContainer>
      <CommentContainer>
        <Comment />
      </CommentContainer>
    </>
  );
};
export default Chatting;

const ChatContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 10px;
`;

const ChatRoom = styled.div`
  width: 100%;
`;

const ChatHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 35px 10px 10px 10px;
  background-color: ${({ theme }) => theme.colors.PURPLE100};
`;

const ChatTitle = styled.div`
  font-size: 20px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const ContentContainer = styled.form`
  width: 100%;
  height: 494px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.PURPLE10};
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const ContentBox = styled.div`
  width: 100%;
  flex: 1;
  margin-bottom: 10px;
  overflow-y: scroll;
`;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isGpt ? "left" : "right")};
  align-items: center;
  padding: 10px;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`;

const MessageId = styled.div`
  margin-bottom: 3px;
  font-size: 14px;
  align-self: flex-end;
`;

const MessageText = styled.div`
  display: inline-block;
  width: fit-content;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  color: ${(props) =>
    props.isGpt ? props.theme.colors.PURPLE100 : props.theme.colors.WHITE};
  background-color: ${(props) =>
    props.isGpt ? props.theme.colors.WHITE : props.theme.colors.PURPLE100};
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

const CommentContainer = styled.div`
  width: 100%;
  padding: 30px 10px 48px 10px;
`;
