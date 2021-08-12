import styled from "styled-components";
import { PokemonCard } from "./index";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};

export const PokemonList = ({ data, search, handleClick }) => {
  return (
    <S.Wrapper>
      {data.map((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return (
            <PokemonCard onClick={() => handleClick(item.name)} data={item} />
          );
        }
        return null;
      })}
    </S.Wrapper>
  );
};
