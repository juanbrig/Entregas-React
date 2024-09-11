import { useEffect, useState, useRef } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

const Counter = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const addToCart = () => {
        onAdd(count);
        setDisabled(true);
    };
    return (
        <Flex gap="10px">
            <Button
                onClick={decrement}
                disabled={disabled}
                colorScheme="teal"
                variant="outline"
            >
                -
            </Button>
            <input
                ref={inputRef}
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                disabled={disabled}
            />
            <Button
                onClick={increment}
                disabled={disabled}
                colorScheme="teal"
                variant="outline"
            >
                +
            </Button>
            <Button
                onClick={addToCart}
                disabled={disabled}
                colorScheme="teal"
                variant="outline"
            >
                Agregar al carrito
            </Button>
        </Flex>
    );
};
// export default Counter;