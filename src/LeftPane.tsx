import { Button, IconButton, ListItem } from "@mui/material";
import List from "@mui/material/List";
import { FC, useState } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nobis facilis rem laudantium explicabo et tempora repudiandae impedit voluptates blanditiis dicta adipisci odio corporis suscipit quo, porro nemo aspernatur nisi".split(
    " "
  );

const StyledDrawer = styled.div<{ $drawerOpen: boolean }>`
  background: yellow;
  width: ${(props) => (props.$drawerOpen ? "300px" : "50px")};
  transition: all 200ms ease-in-out 0ms;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledContentContainer = styled.div`
  background-color: aqua;
  height: 100%;
  overflow-y: scroll;
  transition: all 200ms ease-in-out 0ms;
`;
const StyledToggleContainer = styled.div`
  background-color: red;
`;

const LeftPane: FC<{
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}> = ({ drawerOpen, handleDrawerToggle }) => {
  const [listItems, setListItems] = useState(lorem);
  const toggleListLength = () => {
    if (listItems.length === lorem.length) setListItems(lorem.slice(0, 4));
    else setListItems(lorem);
  };

  return (
    <StyledDrawer $drawerOpen={drawerOpen}>
      <StyledToggleContainer>
        <IconButton onClick={handleDrawerToggle}>
          {drawerOpen ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </IconButton>
      </StyledToggleContainer>
      {drawerOpen && (
        <StyledContentContainer>
          <ListItem>
            <Button onClick={toggleListLength}>Toggle List Length</Button>
          </ListItem>
          <List>
            {listItems.map((item: string) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </StyledContentContainer>
      )}
    </StyledDrawer>
  );
};

export default LeftPane;
