import { chakra, Box } from "@chakra-ui/react";
import Container from "./components/Container";
import SubuButton from "./components/SubuButton";
import TravelDateSelect from "./components/TravelDateSelect";

export default function Example() {
  return (
    <chakra.form
      method="post"
      name="skiAreaFilterForm"
      // action={searchAction}
      id="tt-ski-area-finder-form"
      onSubmit={(e) => {
        e.preventDefault();
        // searchProvider.controller.submit(searchUrl);
      }}
      position="relative"
      className="tt-component-SkiAreaFinderSubu"
    >
      <Container>
        <Box gridColumn={{ md: "1 / 2", lg: "1 / 7", xl: "2 / 6" }}>
          {/* <SubuDropdown
            {...countryDropdown}
            heading={countryHeading}
            onChange={(value) => {
              let destination = "";

              countryDropdown.subuDropdownItems.map((item) => {
                if (item.value === value) {
                  destination = item.label;
                }
              });

              searchProvider.controller.updateSubuParams({
                destinationId: Number(value),
                destination: destination,
              });
            }}
            value={destinationId ? String(destinationId) : "0"}
          />*/}
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
