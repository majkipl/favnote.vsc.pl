import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "components/atoms/Button/Button";
import GlobalStyle from "theme/GlobalStyle";

const theme = {
  primary: "orange",
};

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello Bolek</h1>
          <Button>CLOSE / SAVE</Button>
          <Button secondary>Remove</Button>
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;

// TODO kontynuujemy jutro w auchowni :)
