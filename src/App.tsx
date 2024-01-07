import styled from "styled-components";
import Container from "./Container";

const StyledBar1 = styled.div`
  min-height: 80px;
`;
const StyledBar2 = styled.div`
  min-height: 50px;
`;

function App() {
  return (
    <div className="App">
      <StyledBar1>a</StyledBar1>
      <StyledBar2>b</StyledBar2>
      <Container />
    </div>
  );
}

export default App;
