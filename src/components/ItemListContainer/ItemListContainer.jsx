import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Grid,
  GridItem,
  Input,
  Select,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useItems } from '../../hooks';
import { Loader } from '../Loader/Loader';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ItemListContainer = ({ productsData, loading }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const boxShadowColor = useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return uniqueCategories.sort();
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  }, [productsData, searchTerm, selectedCategory]);

  const handleViewMore = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Flex mb={4} gap={4}>
        <Input 
          placeholder="Buscar productos..." 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select 
          placeholder="Filtrar por categoría" 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {capitalizeFirstLetter(category)}
            </option>
          ))}
        </Select>
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        {filteredProducts.map((item) => {
          const fullStars = Math.floor(item.rating);
          const hasHalfStar = item.rating % 1 !== 0; 
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
          return (
            <GridItem key={item.id}>
              <Center py={6}>
                <Box
                  w="xs"
                  rounded={"sm"}
                  my={5}
                  mx={[0, 5]}
                  overflow={"hidden"}
                  bg="white"
                  border={"1px"}
                  borderColor="black"
                  boxShadow={boxShadowColor}
                >
                  <Box h={"full"}>
                    <Img
                      src={item.thumbnail}
                      roundedTop={"sm"}
                      objectFit="cover"
                      h="full"
                      w="full"
                      alt={"Product Image"}
                    />
                  </Box>
                  <Box p={4}>
                    <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                      {item.title}
                    </Heading>
                    <Text color={"gray.500"} noOfLines={2}>
                      {item.description}
                    </Text>
                    <Box
                      bg="black"
                      display={"inline-block"}
                      px={2}
                      py={1}
                      color="white"
                      mb={2}
                    >
                      <Text fontSize={"xs"} fontWeight="medium">
                        ${item.price}
                      </Text>
                    </Box>
                    <HStack>
                      <Text fontSize={"sl"} fontWeight="medium" color="gold">
                        {item.rating}
                      </Text>
                      {[...Array(fullStars)].map((_, i) => (
                        <BsStarFill key={i} color="gold" />
                      ))}
                      {hasHalfStar && <BsStarHalf color="gold" />}
                      {[...Array(emptyStars)].map((_, i) => (
                        <BsStar key={i} color="gold" />
                      ))}
                    </HStack>
                  </Box>
                  <HStack borderTop={"1px"} color="black">
                    <Flex
                      p={4}
                      alignItems="center"
                      justifyContent={"space-between"}
                      roundedBottom={"sm"}
                      cursor={"pointer"}
                      w="full"
                      onClick={() => handleViewMore(item.id)}
                    >
                      <Text fontSize={"md"} fontWeight={"semibold"}>
                        View more
                      </Text>
                      <BsArrowUpRight />
                    </Flex>
                  </HStack>
                </Box>
              </Center>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};