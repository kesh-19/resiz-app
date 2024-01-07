import { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: grey;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RightPane: FC = () => {
  return (
    <StyledDiv>
      <div>L</div>
      <div>R</div>
    </StyledDiv>
  );
};

export default RightPane;
