function About() {

  const features = [

    "Search Products",

    "Category Filter",

    "Rating Filter",

    "Price Filter",

    "Add To Cart",

    "Wishlist",

    "Responsive UI",


  ];

  return (

    <div className="about-page">

      <div className="about-header">

        <h1>
          About Product App
        </h1>

        <p>
          Modern React E-Commerce
          Application Using FakeStore API
        </p>

      </div>

      <div className="features-container">

        {

          features.map((item,index)=>{

            return(

              <div
                className="feature-card"
                key={index}
              >

                {item}

              </div>

            );

          })

        }

      </div>

    </div>

  );
}

export default About;