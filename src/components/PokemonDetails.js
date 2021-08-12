import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { AbilityList } from "./index";

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Wrapper: styled.div`
    display: flex;
    align-content: center;
  `,
  Image: styled.img`
    width: 200px;
    padding: 10px 20px;
  `,
  Content: styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: column;
    flex: 2;
  `,
  Title: styled.div`
    text-align: center;
    font-family: system-ui;
    font-weight: 600;
    font-size: 30px;
    text-transform: capitalize;
  `,
  StyledButton: styled(Button)`
    && {
      margin: 20px;
      font-family: system-ui;
      text-transform: capitalize;
    }
  `,
  Description: styled.div`
    font-family: system-ui;
    font-size: 14px;
    color: gray;
  `,
  AbilityItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
  `,
  AbilitesWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 40%;
  `,
};

export const PokemonDetails = ({ data, setSearch }) => {
  const [pokemon, setPokemon] = useState(null);
  const history = useHistory();

  const fetchPokemonDetails = async () => {
    const result = await fetch(data.url);
    const currentPokemon = await result.json();
    setPokemon(currentPokemon);
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const handleClick = () => {
    history.push("/");
    setSearch("");
  };

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.Image
          src={pokemon?.sprites?.other.dream_world.front_default}
          alt={pokemon?.name}
        />
        <S.Content>
          <S.Title>{pokemon?.name}</S.Title>
          <AbilityList pokemon={pokemon} />
          {/* <S.AbilitesWrapper>
            <S.AbilityItem>
              <S.Description>Height</S.Description>
              <S.Title>{pokemon?.height}</S.Title>
            </S.AbilityItem>
            <S.AbilityItem>
              <S.Description>Base experience</S.Description>
              <S.Title>{pokemon?.base_experience}</S.Title>
            </S.AbilityItem>
            <S.AbilityItem>
              <S.Description>Weight</S.Description>
              <S.Title>{pokemon?.weight}</S.Title>
            </S.AbilityItem>
            <S.AbilityItem>
              <S.Description>Ability</S.Description>
              <S.Title>{pokemon?.abilities[0].ability.name}</S.Title>
            </S.AbilityItem>
          </S.AbilitesWrapper> */}
        </S.Content>
      </S.Wrapper>
      <S.StyledButton
        onClick={handleClick}
        variant="outlined"
        color="secondary"
      >
        Strona główna
      </S.StyledButton>
    </S.MainWrapper>
  );
};
