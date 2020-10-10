import React from "react";
import Button from "components/Button/Button";
import GlobalStyle from "theme/GlobalStyle";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello Bolek</h1>
      <Button>CLOSE / SAVE</Button>
      <Button secondary>Remove</Button>
    </>
  );
};

export default Root;

// TODO kontynuujemy jutro w auchowni :)
