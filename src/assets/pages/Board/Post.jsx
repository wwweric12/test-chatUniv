import styled from "styled-components";
import BoardPost from "../../component/BoardPost";
import SmallButton from "../../component/SmallButton";
import WritePost from "../../component/modal/WritePost";
import { useState } from "react";

const Post = () => {
  const [showWriteModal, setShowWriteModal] = useState(false);

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
      <BoardArea>
        <BoardName>게시판</BoardName>
        <BoardBox>
          <BoardDetail>
            {dataContents.map((item, idx) => (
              <BoardPost key={item.id} id={idx} dataContents={item} />
            ))}
          </BoardDetail>
          {showWriteModal && (
            <>
              <BackGround />
              <ModalBox>
                {showWriteModal && <WritePost closeBtn={closeWriteModal} />}
              </ModalBox>
            </>
          )}
        </BoardBox>
      </BoardArea>
      <ButtonArea>
        <SmallButton
          type="board"
          text="게시글 작성하기"
          onClick={openWriteModal}
        />
      </ButtonArea>
    </>
  );
};

export default Post;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

// const ModalBox = styled.div`
//   display: flex;
//   position: absolute;
//   left: 53%;
//   transform: translate(-50%, -50%);
//   z-index: 100;
// `;

const ModalBox = styled.div`
  display: flex;
  position: absolute;
  left: 52%;
  top: 20%;
  transform: translate(-50%, -50%);
  z-index: 100;
  @media (max-width: 529px) {
    width: 90%; /* 원하는 크기로 조정하세요 */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ButtonArea = styled.div`
  height: 10%;
`;

const BoardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 529px) {
    width: 300px;
  }
`;

const BoardBox = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  overflow-y: scroll;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
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
