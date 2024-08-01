import "./App.css";
import GlobalStyles from "./style/style.jsx";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>Hello World</Title>
    </>
  );
}

export default App;
