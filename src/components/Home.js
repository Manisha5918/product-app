import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="hero-section">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <h1>
          Discover Amazing
          <br />

          Products at
          <span> Best Prices</span>
        </h1>

        <p>
          Explore thousands of premium products
          using FakeStore API.
          Fast, modern and beautifully designed
          shopping experience.
        </p>

        <div className="hero-buttons">

          <button
            className="explore-btn"

            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">

        <img
           src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop"

          alt="watch"
        />

      </div>

    </div>

  );

}

export default Home;