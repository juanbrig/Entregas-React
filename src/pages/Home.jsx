import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
const Home = () => {
    
    const productsData = [
        {
            id: 1,
            name: 'Zapatillas Adidas',
            description: 'Zapatillas para correr',
            Talle: 39,
            price: 120,
            stock: 10,
        },
        {
            id: 2,
            name: 'Zapatillas Puma',
            description: 'Zapatillas para tenis',
            Talle: 41,
            price: 80,
            stock: 10,
        },
        {
            id: 3,
            name: 'Zapatillas Nike',
            description: 'Zapatillas de basquet',
            Talle: 40,
            price: 200,
            stock: 10,
        },
    ];
    
    return <ItemListContainer products={productsData}/>
};

export default Home