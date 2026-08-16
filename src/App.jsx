import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={
          <>
            <Home />
            <AboutUs />
          </>
        }
      />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />

      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;