import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const S = {
  Form: styled.form`
    display: flex;
    justify-content: center;
  `,
};

export const Search = ({ handleClick }) => {
  return (
    <S.Form noValidate autoComplete="off">
      <TextField
        placeholder="Search..."
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => handleClick(e.target.value)}
      />
    </S.Form>
  );
};
