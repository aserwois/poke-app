import styled from "styled-components";
import { AbilityItem } from "./AbilityItem";

const S = {
  AbilitesWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 40%;
  `,
};

export const AbilityList = ({ pokemon }) => {
  return (
    <S.AbilitesWrapper>
      <AbilityItem title="Height" description={pokemon?.height} />
      <AbilityItem
        title="Base experience"
        description={pokemon?.base_experience}
      />
      <AbilityItem title="Weight" description={pokemon?.weight} />
      <AbilityItem
        title="Ability"
        description={pokemon?.abilities[0].ability.name}
      />
    </S.AbilitesWrapper>
  );
};
