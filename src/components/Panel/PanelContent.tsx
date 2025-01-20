import * as React from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { SpaceProps } from "@chakra-ui/styled-system";

export interface PanelContentProps extends BoxProps {
  children: React.ReactNode | string;
  padding?: SpaceProps["padding"];
}

const PanelContent: React.FC<PanelContentProps> = (props) => {
  const { children, padding, ...rest } = props;

  return (
    <Box className="tt-component-PanelContent" padding={padding} {...rest}>
      {children}
    </Box>
  );
};

export default PanelContent;
