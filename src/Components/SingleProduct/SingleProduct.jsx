import React, { useContext, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { CartContext } from "../../Context/Context";

function SingleProduct({ prod }) {
  // const [addToCart, setAddToCart] = useState(false);
  const {cartItems, addToCart, clearCart, removeFromCart}= useContext(CartContext)
  const { fastDelivery, id, image, instock, name, price, ratings } = prod;
  // console.log(prod);
  // const addToCartHandler = (prod)=> {
  //   setAddToCart(true);
  // }
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 320, width: 204, p: 5 }} image={image} />
          <CardContent>
            <Typography>{name}</Typography>
            <Typography>₹ {price.split(".")[0]}</Typography>
            {fastDelivery ? (
              <Typography>Fast Delivery</Typography>
            ) : (
              <Typography>4 Days Delivery</Typography>
            )}
            <Rating value={ratings} readOnly />
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button onClick={()=> addToCart(prod)} disabled={!instock} variant="contained">
                {!instock ? "Out of Stock" : "Add to Cart"}
              </Button>

              {/* {addToCart && (
                <Button variant="contained" color="error">
                  Remove From Cart
                </Button>
              )} */}
              <Button onClick={()=> removeFromCart(prod)} variant="contained" color="error">
              Remove From Cart
            </Button>
            </Box>
          </CardContent>
        </Card>
        {/* {prod.name} */}
      </Box>
    </>
  );
}

export default SingleProduct;

// Explanation for line 18 - Here, the Price of the item is in string..and the value is something like this..45.00..So to make it only 45..what we do is..convert it into array and we are splitting the elemnets before and after "." So we take the first element before "." Hence we get ₹ 45 !
