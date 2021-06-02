import React from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { SearchBarContainer, SearchName } from './styles';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchName>Buscar estabelecimento</SearchName>
      <GiMagnifyingGlass />
    </SearchBarContainer>
  );
};

export default SearchBar;
