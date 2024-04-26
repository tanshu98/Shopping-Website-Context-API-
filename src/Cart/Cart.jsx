import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { cartStyles } from "./CartStyles";
import EmptyCartImg from "../assets/Empty Cart Image.jpg";
import { useNavigate } from "react-router-dom";
import CartTotal from "../Components/Cart Total/CartTotal";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  console.log("cartItems", cartItems);

  const cartButtonHandler = () => {
    navigate("/");
  };
  return (
    <>
      {cartItems.length <= 0 ? (
        <Box sx={cartStyles.mainContainer}>
          <Box>
            <img src={EmptyCartImg} width={500} height={500} alt="Empty Cart" />
          </Box>
          <Box>
            <Typography variant="h3">
              Your Cart is <span style={{ color: "#1976d2" }}>Empty 😕 </span>{" "}
            </Typography>
            <Typography variant="h6">
              Must Add Items in the Cart before you checkout
            </Typography>
            <Button
              onClick={cartButtonHandler}
              sx={cartStyles.cartButton}
              variant="contained"
              width={20}
            >
              Return to Shop
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{display: 'flex', alignItems: 'center', ml: 35, mt: 5, gap: 5}}>
          <Card >
            {cartItems.map((cartItem) => {
              const {
                image,
                name,
                price,
                quantity,
                ratings,
              } = cartItem;
              console.log(cartItem);
              return (
                <>
                  <Box sx={{display: 'flex', mb:8,p:2}}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap:5
                      }}
                    >
                      <CardMedia
                        key={cartItem.id}
                        sx={{ height: 180, width: 100, p: 8 }}
                        image={image}
                      />
                      <CardContent sx={{display:'flex', flexDirection: 'column', gap:2}} >
                        <Typography variant="h5" key={cartItem.id}>{name}</Typography>
                        <Typography variant="h5" key={cartItem.id}>
                          ₹{price.split(".")[0]}
                        </Typography>
                        <Rating value={ratings} readOnly />
                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            // mt: 2,
                          }}
                        >
                          <Button onClick={()=> removeFromCart(cartItem)} variant="contained">-</Button>
                          <Typography>{quantity}</Typography>
                          <Button onClick={()=> addToCart(cartItem)} variant="contained">+</Button>
                        </Box>
                        <Button variant="contained">Remove From Cart</Button>
                      </CardContent>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Card>
          <CartTotal />
        </Box>
      )}
    </>
  );
}

export default Cart;
