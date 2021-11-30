import { useState, useEffect } from "react";
import styled from "styled-components";
import { PokemonDetails, PokemonList, Search } from "./components";
import { Switch, Route, useHistory } from "react-router-dom";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const S = {
  Title: styled.div`
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: system-ui;
    font-weight: 600;
    margin: 20px 0px;
  `,
};

const App = () => {
  console.log("test");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const fetchPokemons = async () => {
    const result = await fetch(BASE_URL);
    const data = await result.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleClick = (pokemonName) => {
    history.push(`/${pokemonName}`);
  };

  if (data.length <= 0) return null;

  return (
    <>
      <S.Title>Pokedex</S.Title>
      <Switch>
        <Route path={"/"} exact>
          <Search handleClick={(value) => setSearch(value)} />
          <PokemonList data={data} search={search} handleClick={handleClick} />
        </Route>
        {data.map((item, index) => (
          <Route key={index} path={`/${item.name}`}>
            <PokemonDetails setSearch={setSearch} data={item} />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default App;
