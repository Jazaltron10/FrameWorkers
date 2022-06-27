import React from "react";
import { GameEndWrapper, Box, PlayBtn } from "./styles/GameEnding.styles";

const GameEnding = ({handleclick}) => {
  return (
    <GameEndWrapper>
      <Box>
        <div>
          YOU WON
          {/* <CloseBtn>X</CloseBtn> */}
          <PlayBtn onClick = {handleclick} >Play Again</PlayBtn>
        </div>
      </Box>
    </GameEndWrapper>
  );
};

export default GameEnding;
