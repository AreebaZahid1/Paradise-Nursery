import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { Check, ShoppingCart } from "lucide-react";
import plants from "../data/plants";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <Navbar />

      <section className="products-header">
        <h1>Our Plants</h1>

        <p>
          Discover beautiful plants for every corner of your home.
        </p>

        <Link to="/cart" className="view-cart-btn">
          <ShoppingCart size={20} />
          View Cart
        </Link>
      </section>

      <main className="products-container">
        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >
              <h2>{category}</h2>

              <div className="products-grid">
                {categoryPlants.map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <span className="product-category">
                        {plant.category}
                      </span>

                      <h3>{plant.name}</h3>

                      <p className="product-description">
                        {plant.description}
                      </p>

                      <div className="product-bottom">
                        <span className="product-price">
                          ${plant.price.toFixed(2)}
                        </span>

                        <button
                          className={`add-cart-btn ${
                            isInCart(plant.id)
                              ? "added"
                              : ""
                          }`}
                          onClick={() =>
                            handleAddToCart(plant)
                          }
                          disabled={isInCart(plant.id)}
                        >
                          {isInCart(plant.id) ? (
                            <>
                              <Check size={18} />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={18} />
                              Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;