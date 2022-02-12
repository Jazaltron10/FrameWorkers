import styled from 'styled-components';
// import {Box} from "./components/styles/app.styles"

function App() {
  const Container = styled.article`
    margin: auto;
    max-width: 768px;
    min-height: 100vh;
    background-color: palegreen;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const Box =  styled.div`
    height: 200px;
    width: 200px;
    color: yellow;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
      text-align: center;
    }
  `
  
  return (
        <Container>
          <Box>
            <h1>
              Hello World
            </h1>
          </Box>
        </Container>
  )
}

export default App
