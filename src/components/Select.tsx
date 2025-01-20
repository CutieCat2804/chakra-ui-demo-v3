import * as React from "react";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";
import { Icon } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

export interface SelectProps extends React.PropsWithChildren {
  isInvalid?: boolean;
  value?: string;
  showInAllBreakpoints?: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
  const { value, showInAllBreakpoints } = props;

  return (
    <NativeSelectRoot
      display={
        showInAllBreakpoints ? undefined : { base: undefined, md: "none" }
      }
      icon={
        <Icon fontSize="12px">
          <MdArrowDropDown />
        </Icon>
      }
      width="auto"
    >
      <NativeSelectField value={value}>
        <option>item1</option>
        <option>item2</option>
        <option>item3</option>
      </NativeSelectField>
    </NativeSelectRoot>
  );
};

export default Select;
