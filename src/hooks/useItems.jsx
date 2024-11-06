import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Reemplaza con la ruta correcta de tu archivo de configuración de Firebase

export const useItems = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemCollection = collection(db, 'products');

    getDocs(itemCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductsData(products);
      })
      .catch((error) => console.log('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, []);

  return { productsData, loading };
};
