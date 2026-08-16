import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  CreditCard,
} from "lucide-react";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />

        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>Your Cart Is Empty</h1>

          <p>
            You haven't added any plants to your shopping cart yet.
          </p>

          <Link to="/plants" className="continue-shopping-btn">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <div className="cart-heading">
          <h1>Shopping Cart</h1>

          <p>
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="cart-layout">
          <div className="cart-products">
            {cartItems.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  className="cart-product"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product-image"
                  />

                  <div className="cart-product-info">
                    <span className="cart-category">
                      {item.category}
                    </span>

                    <h2>{item.name}</h2>

                    <p className="unit-price">
                      Unit Price: $
                      {item.price.toFixed(2)}
                    </p>

                    <div className="quantity-section">
                      <span>Quantity:</span>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                          disabled={item.quantity === 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-product-actions">
                    <strong>
                      ${itemTotal.toFixed(2)}
                    </strong>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      <Trash2 size={20} />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ${totalAmount.toFixed(2)}
              </strong>
            </div>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              <CreditCard size={20} />
              Checkout
            </button>

            <Link
              to="/plants"
              className="continue-shopping-link"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CartItem;