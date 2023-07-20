import styled from "styled-components";
import SmallButton from "../../component/SmallButton";
import Search from "../../component/Search";
import { useState, useEffect } from "react";
import CreateChat from "../../component/modal/CreateChat";
import ChatList from "../../component/ChatList";

const Main = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const [showCreateChatModal, setShowCreateChatModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLayoutHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dataContents = [
    {
      id: "0",
      title: "title1",
      content: "text1",
      date: "2023.07.06 17:05",
    },
    {
      id: "1",
      title: "title2",
      content: "text2",
      date: "2023.07.06 20:22",
    },
    {
      id: "2",
      title: "title3",
      content: "text3",
      date: "2023.07.06 23:11",
    },
    {
      id: "3",
      title: "title4",
      content: "text4",
      date: "2023.07.06 23:11",
    },
  ];

  const openCreateChatModal = () => {
    setShowCreateChatModal(true);
  };

  const closeCreateChatModal = () => {
    setShowCreateChatModal(false);
  };

  return (
    <Layout height={layoutHeight - 150}>
      <InLayout>
        <Search />

        <ListBox>
          {dataContents.map((item) => (
            <ChatListBox key={item.id}>
              <ChatList title={item.title} content={item.content} />
            </ChatListBox>
          ))}
        </ListBox>
      </InLayout>
      <BLayout>
        <SmallButton
          text="채팅방 만들기"
          type="chatting"
          onClick={openCreateChatModal}
        />
      </BLayout>
      {showCreateChatModal && (
        <>
          <ModalOverlay onClick={closeCreateChatModal} />
          <ModalLayout>{showCreateChatModal && <CreateChat />}</ModalLayout>
        </>
      )}
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  height: ${(props) => props.height}px;
`;

const InLayout = styled.div`
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  height: 90%;
`;

const BLayout = styled.div`
  height: 10%;
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 98;
`;

const ListBox = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const ModalLayout = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 67%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media(max-width: 529px) {
    left: 50%;
  }
`;

const ChatListBox = styled.div`
  width: 100%;
`;
