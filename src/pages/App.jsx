import viteLogo from "/vite.svg";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Product from "../components/products"
import BasicExample from "./navbar"
import { useEffect, useState } from "react"
import axios from "axios"
function App() {


  const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response => setProducts(response.data))
    },[])

  

  return (
    <>
      <BasicExample />
      <div className="product-list">
        {products.map((produt) => {
          return (
            <Product
              image={produt.image}
              title={produt.title}
              price={produt.price}
              id={produt.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
