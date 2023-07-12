import styled from "styled-components";

const Lanking = () => {
  return(
    <Layout>
      <TitleLayout>
        <TitleBox>
          명지대 실시간 랭킹
        </TitleBox>
      </TitleLayout>
      <LankingLayout>
        <LankingBox>
          1. 검색어
        </LankingBox>
        <LankingBox>
          2. 검색어
        </LankingBox>
        <LankingBox>
          3. 검색어
        </LankingBox>
        <LankingBox>
          4. 검색어
        </LankingBox>
        <LankingBox>
          5. 검색어
        </LankingBox>
      </LankingLayout>
    </Layout>
  )
}

export default Lanking;

const Layout = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.PURPLE10};
`

const TitleLayout = styled.div`
  display: flex;
  width: 300px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

const TitleBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const LankingLayout = styled.div`
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
`

const LankingBox = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: ${({ theme }) => theme.colors.PURPLE100};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`
