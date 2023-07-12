import styled from "styled-components";
import SmallButton from "../../component/SmallButton";
import Search from "../../component/Search";
import { useState, useEffect } from "react";

const Main = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setLayoutHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

  return (
    <Layout height={layoutHeight - 136}>
      <InLayout>

        <Search />

        <ListBox>
          {
            dataContents.map((item) => (
              <ChatBox key={item.id}>
                <TopBox>
                  <TitleBox>
                    {item.title}
                  </TitleBox>
                </TopBox>
                <BtmBox>
                  <ContentBox>
                    {item.content}
                  </ContentBox>
                </BtmBox>
              </ChatBox>
            ))
          }
        </ListBox>
      </InLayout>
      <BLayout>
        <SmallButton text="채팅방 만들기" type="chatting" />
      </BLayout>
    </Layout>
  )
}

export default Main;

const Layout = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  height: ${props => props.height}px;
`;

const InLayout = styled.div`
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  height: 90%;
`

const BLayout = styled.div`
  height: 10%;
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 100;
`

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


const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  background: ${({ theme }) => theme.colors.WHITE};
`

const TopBox = styled.div`
  display: flex;
  padding: 20px 20px 15px 10px;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px 20px 0px 0px;
  background: ${({ theme }) => theme.colors.PURPLE100};
`

const BtmBox = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 0px 0px 20px 20px;
  background: ${({ theme }) => theme.colors.PURPLE10};
`

const TitleBox = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`