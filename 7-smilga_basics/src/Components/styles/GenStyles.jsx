import styled from "styled-components";

const GenStyles = styled.section`
  background-color: darkred;
  display: grid;
  place-items: center;
  height: 20vh;
  width: 20vw;
  color: palegreen;
  font-size: 3.5rem;
  border: .5px ridge white;
  border-radius: 2rem;
  box-shadow: 0px 2px 5px 1px black; 
  transition:all .2s ease-out;    
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 8px 3px black;     
  }
`;

export default GenStyles;
