import * as React from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
// import type PanelHeader from "./PanelHeader";
// import type PanelFooter from "./PanelFooter";
import PanelContent from "./PanelContent";
import type { SpaceProps } from "@chakra-ui/styled-system";

type AllowedChildren =
  // | React.ReactElement<typeof PanelHeader>
  // | React.ReactElement<typeof PanelFooter>
  React.ReactElement<typeof PanelContent> | boolean | null | undefined;

export interface PanelProps extends BoxProps {
  children: AllowedChildren | Array<AllowedChildren>;
  padding?: SpaceProps["padding"];
  className?: string;
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>((props, ref) => {
  const { children, padding, className, ...rest } = props;

  return (
    <Box
      bg="gray.300"
      className={`tt-component-Panel ${className || ""}`}
      padding={padding}
      ref={ref}
      {...rest}
    >
      {children}
    </Box>
  );
});

Panel.displayName = "Panel";
export default Panel;
