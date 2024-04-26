import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import { Box } from "@mui/material";
import SingleProduct from "../SingleProduct/SingleProduct";
import { HomeStyles } from "./HomeStyles";
import Filter from "../Filters/Filter";
import { FilterStyles } from "../Filters/FilterStyles";

function Home() {
  const { data } = useContext(CartContext); // export useContext like this or...

  console.log("data", data);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Filter sx={FilterStyles} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "30px",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {/* Diplay products */}
          {data &&
            data.map((prod) => <SingleProduct prod={prod} key={prod.id} />)}
        </Box>
      </Box>
    </>
  );
}

export default Home;
