import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { FC } from "react";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)``;

const LeftPane: FC<{
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDrawerToggle: () => void;
}> = ({ drawerOpen, setDrawerOpen, handleDrawerToggle }) => {
  return (
    <StyledDrawer variant="permanent" open={drawerOpen}>
      <List>
        <Button onClick={handleDrawerToggle}>Toggle Drawer</Button>
      </List>
    </StyledDrawer>
  );
};

export default LeftPane;
