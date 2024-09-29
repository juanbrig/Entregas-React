import { Box } from "@chakra-ui/react";
import { NavBar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Box>Footer</Box>
    </Box>
  );
};