import { useEffect, useState, useRef } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

const Counter = () => {
    const [state, setState] = useState(0);
    const [stateTwo, setStateTwo] = useState(0);
    // const divRef = useRef(null);

    const handleAdd = () => {
        setState(state + 1);
    };

    const handleRemove = () => {
        setState(state - 1);
        setStateTwo(stateTwo - 1);
    };

    //useEffect es un hook que nos permite controlar efectos secundarios de actualizaciones o de renderizado
    //useEffect se compone de una funcion callback, un array de dependencias (puede estar vacio o no)

    //1ra forma de useEffect (NO RECOMENDABLE) - useEffect sin control / no controlado

    useEffect (() => {
        console.log("useEffect descontrolado");
    });

    //2da forma de useEffect (controlado) - dependencias vacias // Solo se ejecuta la primera vez que el componente se renderiza
    useEffect (() => {
        console.log("useEffect con dependencias vacias");
    }, []);

    //3ra forma de useEffect (controlado) - dependencias no vacias
    useEffect (() => {
        console.log("useEffect con dependencias");
    }, [stateTwo]);

return (
    <Flex>
        <Button onClick={handleRemove}>-</Button>
        <Text>{state}</Text>
        //
        <Text>{stateTwo}</Text>
        <Button onClick={handleAdd}>+</Button>

    </Flex>
);
};

export default Counter;