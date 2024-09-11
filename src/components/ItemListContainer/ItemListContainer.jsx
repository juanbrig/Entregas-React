import React from "react";
import Counter from "../ItemCount1/ItemCount1";
const ItemListContainer = ({ greeting }) => {
return (
    <div
    style={{
        fontSize: "2rem",
        fontWeight: "bold",
        height: "90vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
    }}
    >
    {greeting}
    <Counter />
    </div>
);
};

export default ItemListContainer;