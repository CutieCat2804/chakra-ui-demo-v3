import * as React from "react";
import Panel from "./Panel/Panel";
import PanelContent from "./Panel/PanelContent";

const Container: React.FC<React.PropsWithChildren<unknown>> = (props) => {
  const { children } = props;

  return (
    <Panel
      padding={{ base: "2.5", md: "5", xl: "6" }}
      display="flex"
      justifyContent="center"
    >
      <PanelContent
        maxWidth="974px"
        width="100%"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(12, 1fr)",
          xl: "repeat(12, 1fr)",
        }}
        columnGap="5"
        rowGap="2"
      >
        {children}
      </PanelContent>
    </Panel>
  );
};

export default Container;
