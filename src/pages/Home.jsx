import { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { getAllProducts } from '../services/products.service';

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ItemListContainer products={productsData} />;
};

export default Home;