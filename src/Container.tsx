import { useState } from "react";
import ComponentWrapper from "./utils/ComponentWrapper";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Container = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <ComponentWrapper>
      <LeftPane
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <RightPane />
    </ComponentWrapper>
  );
};

export default Container;
