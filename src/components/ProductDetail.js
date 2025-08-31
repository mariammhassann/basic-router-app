 import React from 'react';
 import { useParams } from 'react-router-dom';
 const ProductDetail = () => {
  const { productId } = useParams(); // Hook to access URL parameters
  // In a real app, you'd fetch this from an API
  const productsData = [
    { id: '1', name: 'Laptop', price: 1200, description: 'Powerful computing on the go.' },
    { id: '2', name: 'Mouse', price: 25, description: 'Ergonomic design for comfort.' },
    { id: '3', name: 'Keyboard', price: 75, description: 'Mechanical keys for a satisfying feel.' },
  ];
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