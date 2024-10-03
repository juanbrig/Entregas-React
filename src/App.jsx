import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  );
};

export default App;