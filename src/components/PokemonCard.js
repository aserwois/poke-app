import { useState, useEffect } from "react";
import styled from "styled-components";
import { AbilityList } from "./index";

const S = {
  Image: styled.img`
    width: 100%;
    height: 50%;
    padding-top: 10px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 290px;
    height: 400px;
    background-color: lightgray;
    margin: 20px;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    :hover {
      transform: scale(1.03);
    }
  `,
  Name: styled.div`
    font-family: system-ui;
    text-transform: capitalize;
    padding: 20px;
    font-weight: 600;
    font-size: 20px;
  `,
  Title: styled.div`
    font-family: system-ui;
    font-weight: 600;
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
    width: 50%;
    flex-wrap: wrap;
  `,
};

export const PokemonCard = ({ data, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonDetails = async () => {
    const result = await fetch(data.url);
    const currentPokemon = await result.json();
    setPokemon(currentPokemon);
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <S.Wrapper onClick={onClick}>
      <S.Image
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt={pokemon?.name}
      />
      <S.Name>{pokemon?.name}</S.Name>
      <AbilityList pokemon={pokemon} />
    </S.Wrapper>
  );
};
