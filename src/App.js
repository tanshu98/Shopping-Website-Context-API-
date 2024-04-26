import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
    <Router>  
    <Header/>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
