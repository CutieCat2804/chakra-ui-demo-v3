import { VStack, Text, Input } from "@chakra-ui/react";
import * as React from "react";
import {
  PopoverArrow,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  PopoverBody,
} from "../ui/popover";
// import { MdStar } from "react-icons/md";
import { InputGroup } from "../ui/input-group";

const Datepicker: React.FC = () => {
  return (
    <VStack
      className="tt-component-DatePicker"
      width="100%"
      gap="1"
      alignItems="start"
    >
      Datepicker
      <PopoverRoot>
        <PopoverTrigger asChild>
          <InputGroup
            flex="1"
            // startElement={<MdStar fontSize="16px" />}
          >
            <Input placeholder="Date" />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <Text>Dayzed Datepicker</Text>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </VStack>
  );
};

export default Datepicker;
