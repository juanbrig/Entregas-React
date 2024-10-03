import React from 'react';
import { Box, Image, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const ItemDetailContainer = ({ item }) => {
  if (!item) return <Box>Item not found</Box>;

  const fullStars = Math.floor(item.rating);
  const hasHalfStar = item.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Heading>{item.title}</Heading>
        <Image src={item.thumbnail} alt={item.title} maxH="400px" objectFit="contain" />
        <Text fontSize="xl" fontWeight="bold">Price: ${item.price}</Text>
        <Text>{item.description}</Text>
        <HStack>
          <Text fontSize="lg" fontWeight="medium" color="gold">
            Rating: {item.rating}
          </Text>
          {[...Array(fullStars)].map((_, i) => (
            <BsStarFill key={i} color="gold" />
          ))}
          {hasHalfStar && <BsStarHalf color="gold" />}
          {[...Array(emptyStars)].map((_, i) => (
            <BsStar key={i} color="gold" />
          ))}
        </HStack>
        <Text>Category: {item.category}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Stock: {item.stock}</Text>
      </VStack>
    </Box>
  );
};
