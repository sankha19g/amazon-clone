import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product({ id, title, image, price, rating ,reviews  , brand, discount , price__original}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        brand: brand,
        image: image,
        price: price,
        rating: rating,
        reviews:reviews,
        discount:discount,
        price__original:price__original,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
      <p className="product__brand">{brand}</p>
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="StarIcon"><StarIcon  sx={{ fontSize: 20 }} /></p>
            ))}

          {Array(5-rating)
            .fill()
            .map((_, i) => (
              <p className="StarBorderIcon"><StarBorderIcon sx={{ fontSize: 20 }}/></p>
            ))}
            <p className="product__reviews">{"("+reviews+")"}</p>
        </div>

        <p className="product__price">
        <strong className="product__price__discount">{"-"+discount+"%"}</strong>
          <small className="product__price__symbol">₹</small>
          <strong className="product__price__price">{price}</strong>
          <strong className="product__price__original"><s>{"₹"+price__original}</s></strong>
        </p>
      
      </div>

      

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;