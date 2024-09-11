import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <ChakraProvider>
      <MainLayout>
      <ItemListContainer greeting="Bienvenidos!!" />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;