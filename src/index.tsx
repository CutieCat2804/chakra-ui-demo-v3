import { render } from "react-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider value={defaultSystem}>
    <App />
  </ChakraProvider>,
  rootElement
);
