import styled from "styled-components";

export const Container = styled.section`
  background-color: paleturquoise;
  height: 100vh;
`;
export const GameEndWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  height: 100%;
  width: 100%;
  /* display: none; */
  z-index: 20;
  transition: all 0.5s ease-in;
`;

export const View = styled.div`
  display: block;
`;
export const Box = styled.div`
  color: lime;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 3rem;
    width: 50vw;
    height: 25vh;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px lime groove;
    background-color: black;
    position: relative;
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    &:hover {
      box-shadow: 0 0 15px 3px lime;
    }
    @media(max-width: 768px){
        font-weight: 400;
        font-size: 2rem;
        padding: .2rem;
    }
  }
`;
export const Btn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.05rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: lime;
  transition: all 0.2s ease-in;
  position: absolute;

  &:hover {
    background-color: black;
    color: lime;
    cursor: pointer;
  }
`;
export const PlayBtn = styled.button`
  width: 5rem;
  height: 2.5rem;
  padding: 0.05rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: lime;
  margin-top: 1rem;
  font-weight: bolder;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: black;
    color: lime;
    cursor: pointer;
  }
`;

export const OpenBtn = styled(Btn)`
  left: 2px;
  top: 2px;
`;
export const CloseBtn = styled(Btn)`
  right: 2px;
  top: 2px;
`;
