import { Leaf, Heart, Sun, Sprout } from "lucide-react";

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <Leaf size={50} />

        <h1>About Paradise Nursery</h1>

        <p>
          Growing happiness, one plant at a time.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Welcome to Paradise Nursery</h2>

          <p>
            Paradise Nursery is an online plant shop created for
            people who love bringing the beauty of nature into
            their homes.
          </p>

          <p>
            We offer a carefully selected collection of indoor
            plants, flowering plants, and succulents. Our goal is
            to make it easy for everyone to find beautiful plants
            and create a greener living space.
          </p>

          <p>
            Whether you are an experienced plant lover or buying
            your first houseplant, Paradise Nursery is here to
            help you find the perfect plant.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <Heart size={35} />
            <h3>Plants With Care</h3>
            <p>
              We choose plants with quality and care in mind.
            </p>
          </div>

          <div className="feature-card">
            <Sun size={35} />
            <h3>Beautiful Spaces</h3>
            <p>
              Our plants help make homes brighter and more relaxing.
            </p>
          </div>

          <div className="feature-card">
            <Sprout size={35} />
            <h3>Grow With Us</h3>
            <p>
              We make plant shopping simple and enjoyable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;