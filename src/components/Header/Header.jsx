import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
  IconButton
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} py={4}>
      <Flex maxW="container.xl" mx="auto" align="center">
        <Box fontWeight="bold" fontSize="2xl">YourLogo</Box>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
        <IconButton
          ml={4}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        />
      </Flex>
    </Box>
  );
};
