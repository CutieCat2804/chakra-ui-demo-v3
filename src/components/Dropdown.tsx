import { Box, Icon, Spacer, Text } from "@chakra-ui/react";
import * as React from "react";
import Select from "./Select";
import { MdArrowDropDown } from "react-icons/md";
import { Button } from "../ui/button";

export interface DropdownProps extends React.PropsWithChildren {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  isInvalid?: boolean;
  value: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { isActive, setIsActive, children, isInvalid, value } = props;

  //   const { width: menuWidth, ref } = useWidth<HTMLDivElement>([isActive]);

  //   useOnClickOutside(ref, () => setIsActive(false));
  //   const dropdownMenuContext = useDropdown({
  //     isActive,
  //     setIsActive,
  //     value,
  //     onChange,
  //   });

  return (
    <Box width="100%">
      <Text display="block" margin="1">
        Dropdown Heading
      </Text>

      <Box
        onClick={() => setIsActive(!isActive)}
        display={{ base: "none", md: "block" }}
      >
        <DropdownButton />
        <Box hidden={!isActive}>{children}</Box>
      </Box>
      <Select value={value} isInvalid={isInvalid}>
        {children}
      </Select>
    </Box>
  );
};

export default Dropdown;

const DropdownButton: React.FC = () => {
  return (
    <Button variant="outline" width="100%">
      <Box whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        Label
      </Box>
      <Spacer />
      <Icon fontSize="12px">
        <MdArrowDropDown />
      </Icon>
    </Button>
  );
};
