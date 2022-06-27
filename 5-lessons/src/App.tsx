import React from 'react'
import GameEnding from './components/GameEnding'
import { Container, OpenBtn } from './components/styles/GameEnding.styles'
import GlobalStyles from './components/styles/Global'


const handleclick = () =>{ 
  console.log("Hello World")
}

const App = () => {
  return (
    <Container>
      <GlobalStyles/>

      <OpenBtn onClick={handleclick}> O </OpenBtn>
      <GameEnding handleclick={handleclick()}/>

    </Container>
  )
}

export default App