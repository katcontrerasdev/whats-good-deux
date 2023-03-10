import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`} alt={`${product.name} details`}>
        <Card.Img
          src={product.image}
          alt={`${product.name} photo`}
          variant='top'
        />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h4'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
