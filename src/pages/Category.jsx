import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { ItemListContainer, Loader } from '../components';
import { useItems } from '../hooks';

export const Category = () => {
  const { id } = useParams();
  const { productsData, loading } = useItems();

  const filteredProducts = productsData.filter(product => product.category === id);

  return (
    <Box minH="100vh" p={4}>
      <Heading mb={4}>{id.charAt(0).toUpperCase() + id.slice(1)}</Heading>
      {loading ? (
        <Loader />
      ) : (
        <ItemListContainer productsData={filteredProducts} />
      )}
    </Box>
  );
};
