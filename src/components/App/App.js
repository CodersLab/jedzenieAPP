import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import AddProduct from "../AddProduct/AddProduct"; // can be lazy loaded...

function App() {
  return (<Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Products/>}/>>
          <Route path="products/:id" element={<SingleProduct/>}/>
          <Route path="products/add" element={<AddProduct/>}/>
          <Route path="recipes" element={<>All recipes</>}/>>
          <Route path="recipes/:id" element={<>recipe </>}/>
          <Route path="recipes/add" element={<>add recipe</>}/>
        </Route>
      </Routes>
    </Router>);
}

export default App;
