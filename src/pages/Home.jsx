import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";

function Home() {
  return (
    <main className="home-page">
      <div className="home-overlay">
        <div className="home-content">
          <div className="home-icon">
            <Leaf size={45} />
          </div>

          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful indoor plants, flowering plants,
            and succulents to make your home greener and happier.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;