import React from "react";
import { useParams } from "react-router-dom";

import { useItemById } from "../hooks";

import { ItemDetailContainer, Loader } from "../components";

export const ItemDetail = () => {
  const { id } = useParams();
  const { product, loading } = useItemById(id);

  if (loading) return <Loader />;
  if (!product) return <div>Item not found</div>;

  return <ItemDetailContainer item={product} />;
};