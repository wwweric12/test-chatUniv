import styled from "styled-components";
import { useState, useEffect } from "react";

import BoardPost from "../../component/BoardPost";
import SmallButton from "../../component/SmallButton";
import WritePost from "../../component/modal/WritePost";

const Post = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const [showWriteModal, setShowWriteModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLayoutHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openWriteModal = () => {
    setShowWriteModal(true);
  };

  const closeWriteModal = () => {
    setShowWriteModal(false);
  };

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
    {
      id: "4",
      title: "title5",
      content: "text5",
      date: "2023.07.06 23:11",
    },
    {
      id: "5",
      title: "title6",
      content: "text6",
      date: "2023.07.06 23:11",
    },
    {
      id: "6",
      title: "title7",
      content: "text7",
      date: "2023.07.06 23:11",
    },
    {
      id: "7",
      title: "title8",
      content: "text8",
      date: "2023.07.06 23:21",
    },
    {
      id: "8",
      title: "title9",
      content: "text9",
      date: "2023.07.07 11:11",
    },
  ];

  return (
    <>
      <BoardArea height={layoutHeight - 150}>
        <InLayout>
          <BoardName>게시판</BoardName>
          <BoardBox>
            <BoardDetail>
              {dataContents.map((item, idx) => (
                <BoardPost key={item.id} id={idx} dataContents={item} />
              ))}
            </BoardDetail>
          </BoardBox>
        </InLayout>
        <ButtonArea>
          <SmallButton type="board" text="게시글 작성하기" onClick={openWriteModal} />
        </ButtonArea>
        {showWriteModal && (
          <>
            <BackGround />
            <ModalBox>{showWriteModal && <WritePost closeBtn={closeWriteModal} />}</ModalBox>
          </>
        )}
      </BoardArea>
    </>
  );
};

export default Post;

const BoardArea = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
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

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const ModalBox = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 529px) {
    left: 20%;
  }

  @media (max-width: 420px) {
    left: 14%;
  }

  @media (max-width: 387px) {
    left: 12%;
  }
  @media (max-width: 318px) {
    left: 6%;
  }
`;

const ButtonArea = styled.div`
  height: 10%;
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 98;
`;

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  overflow-y: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const BoardName = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  width: 76px;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
`;

const BoardDetail = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
`;
