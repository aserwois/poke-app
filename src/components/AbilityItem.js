import styled from "styled-components";

const S = {
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

export const AbilityItem = ({ description, title }) => {
  return (
    <S.AbilityItem>
      <S.Description>{description}</S.Description>
      <S.Title>{title}</S.Title>
    </S.AbilityItem>
  );
};
