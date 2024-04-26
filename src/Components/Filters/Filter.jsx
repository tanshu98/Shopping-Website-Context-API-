import {
  Box,
  Button,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Rating,
  Checkbox
} from "@mui/material";
import React, { useState } from "react";
import { FilterStyles } from "./FilterStyles";

function Filter() {
  const [value, setValue] = useState("");
  const [ratingValue, setRatingValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Box sx={FilterStyles.radioButtonContainer}>
        <Typography variant="h4">Filter Products</Typography>
        <Box>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Ascending"
                control={<Radio />}
                label="Ascending"
              />
              <FormControlLabel
                value="Descending"
                control={<Radio />}
                label="Descending"
              />
               <FormControlLabel control={<Checkbox />} label="Include Out of Stock" />
               <FormControlLabel control={<Checkbox />} label="Fast Delivery Only" />
            </RadioGroup>
          </FormControl>
          <Box sx={FilterStyles.rating}>
            <Typography component="legend">Rating </Typography>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(e, newRating) => {
                setRatingValue(newRating);
              }}
            />
          </Box>
        </Box>
        <Button sx={{width:200, p:1,mt:2}} variant="contained">Clear Filters</Button>
      </Box>
    </>
  );
}

export default Filter;
