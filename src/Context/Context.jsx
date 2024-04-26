import React, { createContext, useEffect, useState } from "react";
import faker from "faker";
// import { cartReducer } from "./Reducers";

export const CartContext = createContext(); // Create a context
// U can export context like this also..or..like 38 to 40 line also

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, SetTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const randomImageGenerator = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    const randomImages = jsonData && jsonData.map((d, i) => d.image);

    const products = [...Array(20)].map((_, index) => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: randomImages[index],
      instock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    setData(products);
  };

  useEffect(() => {
    randomImageGenerator();
  }, []);

  // Todo - Cart Functionality ->

  // !Add item to Cart
  const addToCart = (item) => {
    // Check if item is already in the cart or not
    const isItemIncart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemIncart) {
      setCartItems(
        cartItems.map(
          (
            cartItem // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
      // The setCartItems function is used to update the state of the cartItems array in React. When updating state in React, it's important to maintain immutability, meaning that we should not directly mutate the existing state, but instead create a new state object.
      //   The spread operator (...) is used to create a new array ([...]) containing all the elements of the existing cartItems array, and then a new object representing the item with an additional property quantity: 1 is added to the end of this new array.
    }
  };

  //! Remove item from Cart -

  const removeFromCart = (item) => {
    const isItemIncart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemIncart.quantity === 1) {
      // Remove the item -
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
      // So if the id of the item deosnt match..keep that item..jyachi id match zhali remove that item...
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ) // if the quantity of the item is greater than 1, decrease the quantity of the item
      );
    }
  };

  //! Clear Cart -

  const clearCart = () => {
    setCartItems([]); //clears the cartItems Array!
  };

  //! Cart TotalItems -

  const getCartTotalItems = () => {
    const totalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setTotalQuantity(totalItems)
    // return totalItems;
  };

  useEffect(() => {
    getCartTotalItems(); // Call getCartTotalItems function whenever cartItems changes
  });
  

  //! Total Price of Items in the Cart - 

  const getTotalPrice = ()=> {
    const cartTotalPrice = cartItems.reduce((total,cartItem) => total + (totalQuantity * cartItem.price),0);
    SetTotalPrice(cartTotalPrice); // 
  }

  useEffect(() => {
    getTotalPrice(); // Call getTotalPrice function whenever cartItems changes
  });
  //   Add data to cartItems based on Local Storage -

  // setItem to local Storage -

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // get item form localStorage
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  // Use Reducer -
  //   const [state, dispatch] = useReducer(cartReducer, {
  //     data,
  //     cart: [],
  //   });
  return (
    <CartContext.Provider
      value={{
        data,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
        setTotalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;

// IN normal case, we can direclty assign the products array as a prop to contextAPI..
// But since the data is little complicated..we gonna use another React HOOk called as UseReducer

// We gonna export this Cart Context..

// export const CartState = () => {
//   return useContext(Cart);
// };
