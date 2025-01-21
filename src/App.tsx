import { chakra, Box } from "@chakra-ui/react";
import Container from "./components/Container";
import SubuButton from "./components/SubuButton";
import TravelDateSelect from "./components/TravelDateSelect";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

export default function Example() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <chakra.form
      method="post"
      name="skiAreaFilterForm"
      id="tt-ski-area-finder-form"
      onSubmit={() => undefined}
      position="relative"
      className="tt-component-SkiAreaFinderSubu"
    >
      <Container>
        <Box gridColumn={{ md: "1 / 2", lg: "1 / 7", xl: "2 / 6" }}>
          <Dropdown value="value" setIsActive={setIsActive} isActive={isActive}>
            <Box
              border="1px solid #d3d3d3"
              borderRadius="5px"
              padding="2"
              position="absolute"
              background="#fff"
            >
              {["item1", "item2", "item3"].map((subuDropdownItem, index) => (
                <Box key={index}>{subuDropdownItem}</Box>
              ))}
            </Box>
          </Dropdown>
        </Box>
        <Box gridColumn={{ md: "2 / -1", lg: "7 / -1", xl: "6 / 10" }}>
          <chakra.input type="hidden" name="earliestDateStart" />
          <chakra.input type="hidden" name="latestDateEnd" />
          <TravelDateSelect />
        </Box>
        <Box
          alignSelf="end"
          gridColumn={{ md: "1 / -1", lg: "1 / -1", xl: "10 / 12" }}
        >
          <SubuButton />
        </Box>
      </Container>
    </chakra.form>
  );
}
