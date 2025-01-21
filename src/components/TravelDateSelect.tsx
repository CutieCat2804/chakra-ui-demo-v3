import * as React from "react";
import {
  Flex,
  Spacer,
  Stack,
  VStack,
  Text,
  Icon,
  List,
  Link,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  PopoverCloseTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
} from "../ui/popover";
// import { MdCalendarToday } from "react-icons/md";
import { Tooltip } from "../ui/tooltip";
import Datepicker from "./Datepicker";
import Dropdown from "./Dropdown";

const TravelDateSelect: React.FC = () => {
  const [isTravelDurationOpen, setIsTravelDurationOpen] =
    useState<boolean>(false);

  //   const [zIndex] = useToken("zIndices", ["subu-error-tooltip"]);

  //   const {
  //     buttonLabel,
  //     checkInHeading,
  //     checkOutHeading,
  //     topTravelDatesHeading,
  //     travelDateSelectHeading,
  //   } = useTranslations("searchGroupTranslations").travelDateSelectTranslations;
  //   const { heading: travelDurationHeading } = useTranslations(
  //     "searchGroupTranslations"
  //   ).travelDurationTranslations;

  //   const searchProvider = useSearch();
  //   const duration = useAppSelector((state) => state.Subu.duration);

  //   const popoverReference = React.createRef<HTMLDivElement>();
  //   const { width: popoverWidth, ref: triggerReference } =
  //     useWidth<HTMLButtonElement>();

  //   const {
  //     latestDateEnd,
  //     latestDateEndMin,
  //     earliestDateStart,
  //     earliestDateStartMin,
  //     onLatestDateEndChange,
  //     onEarliestDateStartChange,
  //     hasNoDateDurationMatch,
  //   } = useTravelDateSelect();

  //   const handleSubuDropdownChange = (value: string) => {
  //     searchProvider.controller.updateSubuParams({
  //       duration: value,
  //     });
  //   };

  const isError = false;

  return (
    <Flex flexWrap="wrap" flexDir="column">
      <Text as="label">Heading</Text>
      <PopoverRoot>
        <PopoverTrigger>
          <Tooltip content={"Error Tooltip Content"} open={isError}>
            <Flex
              alignItems="center"
              bg="#fff"
              padding="2"
              border="2px solid black"
              gap="2"
            >
              {/* <Icon fontSize="24px">
                <MdCalendarToday />
              </Icon> */}
              <Text>Trigger Text</Text>
            </Flex>
          </Tooltip>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <VStack gap={{ base: 6, md: 5 }} alignItems="start">
              <Stack
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 3, lg: 10 }}
                width="100%"
              >
                <Datepicker />
                <Datepicker />
              </Stack>
              <Dropdown
                value="value"
                setIsActive={setIsTravelDurationOpen}
                isActive={isTravelDurationOpen}
              >
                <Box
                  border="1px solid #d3d3d3"
                  borderRadius="5px"
                  padding="2"
                  position="absolute"
                  background="#fff"
                >
                  {["item1", "item2", "item3"].map(
                    (subuDropdownItem, index) => (
                      <Box key={index}>{subuDropdownItem}</Box>
                    )
                  )}
                </Box>
              </Dropdown>
              <TopTravelDates />
            </VStack>
            <Flex alignSelf="end">
              <Spacer />
              <PopoverCloseTrigger width={{ base: "100%", lg: "auto" }}>
                <Button
                  flexShrink={0}
                  alignSelf="flex-end"
                  width="inherit"
                  margin="4"
                >
                  Confirm
                </Button>
              </PopoverCloseTrigger>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </Flex>
  );
};

const MemoizedTravelDateSelect = React.memo(TravelDateSelect);

export default MemoizedTravelDateSelect;

const TopTravelDates: React.FC = () => {
  const topTravelDates = [
    "date1 link",
    "date2 link",
    "date3 link",
    "date4 link",
  ];

  return (
    <Flex flexDir="column">
      <Text>Heading</Text>
      <List.Root>
        {topTravelDates.map((topTravelDate) => (
          <List.Item key={topTravelDate}>
            <Link>{topTravelDate}</Link>
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  );
};
