import { Flex, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { useRef } from "react";
import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";

const SubuButton: React.FC = () => {
  // const { buttonLabel, disabledTooltipContent } =
  //     useTranslations('searchGroupTranslations').subuButtonTranslations;

  //   const { width: popoverWidth, ref } = useWidth<HTMLButtonElement>();

  // const { isSearchDisabled, showErrorTooltip } = useShallowEqualAppSelector((state) => {
  //     return {
  //         isSearchDisabled: state.Subu.isSearchDisabled,
  //         showErrorTooltip: state.Subu.showErrorTooltip
  //     };
  // });

  const placement = useBreakpointValue({
    base: "bottom" as const,
    xl: "top" as const,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  //   const [zIndex] = useToken("zIndices", ["subu-error-tooltip"]);

  return (
    <Tooltip content="Error Tooltip Content" positioning={{ placement }}>
      <Flex
        css={{
          "& .chakra-button__icon": {
            flexGrow: "2",
            justifyContent: "flex-end",
          },
        }}
        width="100%"
      >
        <button type="submit" ref={buttonRef} hidden />
        <Button
          type="submit"
          fontSize="sm"
          justifyContent="space-between"
          onMouseUp={() => {
            buttonRef.current?.click();
          }}
          onClick={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              buttonRef.current?.click();
            }
          }}
        >
          <Flex flexWrap="wrap" justifyContent="center" whiteSpace="pre-wrap">
            Button Label
          </Flex>
        </Button>
      </Flex>
    </Tooltip>
  );
};

export default SubuButton;
