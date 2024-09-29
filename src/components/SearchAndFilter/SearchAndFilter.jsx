import React from 'react';
import { Box, Input, Select, Flex } from '@chakra-ui/react';

export const SearchAndFilter = ({ onSearch, onFilter, categories }) => {
  return (
    <Flex mb={4} gap={4}>
      <Input 
        placeholder="Buscar productos..." 
        onChange={(e) => onSearch(e.target.value)}
      />
      <Select placeholder="Filtrar por categoría" onChange={(e) => onFilter(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </Select>
    </Flex>
  );
};