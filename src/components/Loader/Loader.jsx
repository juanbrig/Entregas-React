import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center>
      <Spinner color="teal.500" size="xl" />
    </Center>
  );
};