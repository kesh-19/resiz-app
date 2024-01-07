import { useState } from "react";
import ComponentWrapper from "./utils/ComponentWrapper";
import LeftPane from "./LeftPane";

const Container = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <ComponentWrapper>
      <LeftPane />
      <div>R</div>
    </ComponentWrapper>
  );
};

export default Container;
