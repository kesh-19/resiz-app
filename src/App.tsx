import styled from "styled-components";
import Container from "./Container";
import { CssBaseline } from "@mui/material";

const StyledBar1 = styled.div`
  min-height: 80px;
`;
const StyledBar2 = styled.div`
  min-height: 50px;
`;

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <StyledBar1>a</StyledBar1>
      <StyledBar2>b</StyledBar2>
      <Container />
    </div>
  );
}

export default App;
