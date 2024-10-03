import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box> {/* Añadimos padding-top para evitar que el contenido se oculte detrás del NavBar */}
        {children}
      </Box>
      <Box>Footer</Box>
    </Box>
  );
};