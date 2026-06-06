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
      <div className="hero-slider">

  <div className="slide-track">

    {/* First set */}

    <img loading="eager" src="https://images.unsplash.com/photo-1445205170230-053b83016050"/>
    <img  loading="eager" src="https://images.unsplash.com/photo-1483985988355-763728e1935b"/>
    <img  loading="eager" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"/>
    <img  loading="eager" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"/>
    <img  loading="eager" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"/>
    <img  loading="eager" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"/>


    {/* duplicate set for smooth loop */}

    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050"/>
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b"/>
    <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"/>
    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"/>
    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"/>
    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"/>


  </div>

</div>
    </div>

  );

}

export default Home;