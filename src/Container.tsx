import { useState } from "react";
import ComponentWrapper from "./utils/ComponentWrapper";
import styled from "styled-components";
import { Grid } from "@mui/material";
import LeftPane from "./LeftPane";

const StyledGrid = styled(Grid)`
  margin: 0 !important;
`;

const GridItem = styled(Grid)`
  padding: 0;
`;

const LeftGridItem = styled(GridItem)`
  background-color: red;

  min-height: 100%;
`;

const RightGridItem = styled(GridItem)`
  background-color: blue;

  min-height: 100%;
`;

const Container = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <ComponentWrapper>
      <StyledGrid container spacing={1}>
        <LeftGridItem>
          <LeftPane />
        </LeftGridItem>
        <RightGridItem>R</RightGridItem>
      </StyledGrid>
    </ComponentWrapper>
  );
};

export default Container;
