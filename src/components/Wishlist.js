function Wishlist(props) {

  return (

    <div className="container py-5">

      <h1 className="products-title">

        Your Wishlist

      </h1>

      {

        props.wishlist.length === 0 ?

        <div className="text-center">

          <h2>
            Wishlist Is Empty
          </h2>

        </div>

        :

        props.wishlist.map((item)=>{

          return(

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt="product"
              />

              <div className="flex-grow-1">

                <h2>
                  {item.title}
                </h2>

                <h3 className="text-success">

                  ₹ {(item.price * 83).toFixed(0)}

                </h3>

                <button
                  className="btn btn-danger mt-3"

                  onClick={()=>
                    props.removeWishlist(item.id)
                  }
                >

                  Remove

                </button>

              </div>

            </div>

          );

        })

      }

    </div>

  );
}

export default Wishlist;