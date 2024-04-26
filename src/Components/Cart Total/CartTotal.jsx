import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";

function CartTotal() {
  const { cartItems, totalQuantity,totalPrice } =
    useContext(CartContext);
    const packagingFee = 100;
  console.log("cartItems IN CART TOTAL", cartItems);
  console.log('TOTAL QUANTITY ----', totalQuantity);
  return (
    <>
      <Paper elevation={3} sx={{ width: "50%", height: "50%", m:8,p:3 }}>
        <Box>
          <Box sx={{ mb: 2, textTransform: "uppercase", color: "#929faa" }}>
            <Typography>Price Details</Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography>Price ({totalQuantity} items)</Typography>
              <Typography sx={{ fontWeight: 600 }}>₹{totalPrice}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography>Delivery Charges</Typography>
              <Typography sx={{ color: "#388e3c" }}>Free</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography>Secured Packaging Fee</Typography>
              <Typography>₹{packagingFee}</Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography sx={{ fontWeight: 600 }}>Total Amount</Typography>
              <Typography sx={{ fontWeight: 600 }}>₹{totalPrice - packagingFee}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default CartTotal;
