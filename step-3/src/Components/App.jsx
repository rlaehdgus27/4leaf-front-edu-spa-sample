import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.isBlack ? props.theme.bgcolor : `#fff`};
  color: ${(props) => (props.isBlack ? props.theme.fontcolor : `#0b0b0b`)};
`;

const ChangeButton = styled.button`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${(props) => props.theme.fontcolor};
  background-color: ${(props) =>
    props.isDelete ? `red` : props.theme.btncolor};
  cursor: pointer;
`;

const App = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper isBlack={toggle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae nihil
      recusandae minus delectus temporibus tenetur ratione. Magni officiis vero
      error. Facilis sint magni, autem fuga eius maxime ullam expedita!
      <ChangeButton w={`220px`} h={`30px`} onClick={toggleHandler}>
        Click here!
      </ChangeButton>
      <ChangeButton w={`100px`} h={`20px`}>
        TT
      </ChangeButton>
      <ChangeButton w={`200px`} h={`30px`} isDelete={true}>
        DELETE BTN!
      </ChangeButton>
    </Wrapper>
  );
};
export default App;
