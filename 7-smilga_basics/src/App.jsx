import { useState } from "react";
import GenStyles from "./Components/styles/GenStyles";
import { Container } from "./Components/styles/Container.Styles";
import GlobalStyles from "./Components/styles/Global";
function App() {
  return (
    <Container>
      <GlobalStyles/>
      <GenStyles>H</GenStyles>
    </Container>
  );
}

export default App;
