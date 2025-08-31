import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* Defines where the routed components will render */}
       <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />


          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<ProductDetail />} />
          </Route>


          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
