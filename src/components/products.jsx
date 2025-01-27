import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Product(props) {
  return (
     
        <Card >
          <Card.Img variant="top" src={props.image} style={{height:"300px",width:"100%",objectFit:"contain"}} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
           <Link to ={"/product-details/"+props.id}>
           <Button variant="primary">View Details</Button>
           </Link> 
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
  )
}
export default Product