import styled from "styled-components";

const EditProfile=()=>{
  return(
    <Layout>
    </Layout>
  )
}

export default EditProfile;

const Layout = styled.div`
display: flex;
width: 550px;
padding: 0px 20px;
flex-direction: column;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
align-self: stretch;
background-color: ${({ theme }) => theme.colors.WHITE};
`