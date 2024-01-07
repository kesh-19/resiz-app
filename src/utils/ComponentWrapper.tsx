import { Box } from "@mui/material";
import styled from "styled-components";

const ComponentWrapper = styled(Box)`
  background: yellow;
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  position: relative;
  display: flex;
`;

export default ComponentWrapper;
