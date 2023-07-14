import styled from "styled-components";
import BoardPost from "../../component/BoardPost";
import MypageHeader from "../../component/MypageHeader";

const BoardList = () => {
  const dataContents = [
    {
      id: "0",
      title: "title1",
      content: "text1",
      date: "2023.07.06 17:05",
    },
    {
      id: "0",
      title: "title2",
      content: "text2",
      date: "2023.07.06 20:22",
    },
    {
      id: "0",
      title: "title3",
      content: "text3",
      date: "2023.07.06 23:11",
    },
  ];

  return (
    <>
      <MypageHeader title="게시물 내역" />
      <MypageBoardBox>
        {dataContents.map((item, idx) => (
          <BoardPost
            key={item.title}
            /* myPage의 id는 동일하기에 key값은 오류로 인해 임의로 title로 넘겼습니다. */
            id={idx}
            dataContents={item}
            mypage={true}
          />
        ))}
      </MypageBoardBox>
    </>
  );
};

export default BoardList;

const MypageBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 510px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 10px;
`;
