import React from 'react';
import { ItemListContainer, Loader } from '../components';
import { useItems } from '../hooks/index';
import { Box } from '@chakra-ui/react';

export const Home = () => {
  const { productsData, loading } = useItems();

  return (
    <Box minH="100vh" p={4}>
      <ItemListContainer productsData={productsData} loading={loading} />
    </Box>
  );
};