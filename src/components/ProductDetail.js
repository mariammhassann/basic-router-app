 import React from 'react';
 import productsData from '../data/products';
 import { useParams } from 'react-router-dom';
 const ProductDetail = () => {
  const { productId } = useParams(); // Hook to access URL parameters
  // In a real app, you'd fetch this from an API
  const product = productsData.find(p => p.id === productId);
  if (!product) {
    return <h3>Product not found!</h3>;
  }
  return (
    <div>
      <h3>{product.name} Details</h3>
      <p>ID: {product.id}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
 };
 export default ProductDetail;