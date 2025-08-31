
 import React from 'react';
 import { Link, Outlet } from 'react-router-dom'; // Outlet is for nested routes
 
 const Products = () => {
    
  const productsData = [
{ id: '1', name: 'Laptop', price: 1200, description: 'Powerful computing on the go.' },
    { id: '2', name: 'Mouse', price: 25, description: 'Ergonomic design for comfort.' },
    { id: '3', name: 'Keyboard', price: 75, description: 'Mechanical keys for a satisfying feel.' },
  ];
  return (
    <div>
        {/* our main products page with a list of products */}
      <h2>Products List</h2>
      <p>Browse our amazing products:</p>
      <ul>
        {productsData.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
 ))}
      </ul>
      <hr />
      {/* Outlet renders the matched child route component (e.g., ProductDetail) 
*/}
      <Outlet />
    </div>
  );
};
export default Products;
