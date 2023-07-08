import styled from 'styled-components';
import SearchSrc from '../images/search.svg';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return(
    <Layout>
      <SearchInput
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchBtn type="submit">
        <img alt='search' src={SearchSrc}/>
      </SearchBtn>
    </Layout>
  )
}

export default Search;

const Layout = styled.form`
display: flex;
padding: 10px;
justify-content: flex-end;
align-items: flex-start;
gap: 10px;
align-self: stretch;
border-radius: 20px;
border: 1px solid ${({ theme }) => theme.colors.GRAY};
background: ${({ theme }) => theme.colors.WHITE};
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const SearchInput = styled.input`
  display: flex;
  height: 25px;
  padding: 5px;
  align-items: center;
  gap: 5px;
  flex: 1 0 0;
  border: none;
  outline: none;
`

const SearchBtn = styled.button`
  border: none;
  background-color: none;
  width: 25px;
  height: 25px;
`