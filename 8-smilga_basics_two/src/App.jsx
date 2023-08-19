import { Container } from "./Components/GenStyles/Co
ntainer_Styles";
import GlobalStyles from "./Components/GenStyles/Global";
import {ThemeProvider} from 'styled-components'






function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <div>26</div>
        <div>92</div>
        <div>83</div>
        Welcome
      </Container>
    </>
  );
}

export default App;
