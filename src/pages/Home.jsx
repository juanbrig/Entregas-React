import React, { useState, useEffect } from 'react';
import { ItemListContainer, Loader, SearchAndFilter } from '../components';
import { getAllProducts } from '../services/products.service';
import { Box } from '@chakra-ui/react';

export const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
        setFilteredProducts(res.data.products);
        const uniqueCategories = [...new Set(res.data.products.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = productsData.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category) => {
    if (category) {
      const filtered = productsData.filter(product => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsData);
    }
  };

  return (
    <Box minH="100vh" p={4}>
      <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} categories={categories} />
      {loading ? (
        <Loader />
      ) : (
        <ItemListContainer products={filteredProducts} />
      )}
    </Box>
  );
};