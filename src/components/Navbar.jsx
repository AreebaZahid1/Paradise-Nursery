import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Leaf } from "lucide-react";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Leaf size={28} />
        <span>Paradise Nursery</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>

        <Link to="/cart" className="cart-link">
          <ShoppingCart size={24} />
          <span>Cart</span>

          <span className="cart-count">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;