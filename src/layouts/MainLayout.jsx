import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box>
        {children}
      </Box>
      <Box>Footer</Box>
    </Box>
  );
};