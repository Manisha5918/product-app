function Cart(props) {

  const total =
    props.cart.reduce(
      (sum, item) =>
        sum + (item.price * 83),
      0
    );

  return (

    <div className="cart-container">

      <h1 className="products-title">
        Your Shopping Cart
      </h1>

      {
        props.cart.length === 0 ?

        <div className="empty-cart">

          <h2>
            Cart Is Empty
          </h2>

        </div>

        :

        props.cart.map((item) => {

          return (

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt="product"
              />

              <div className="cart-info">

                <h2>
                  {item.title}
                </h2>

                <h3 className="cart-price">

                  ₹ {(item.price * 83).toFixed(0)}

                </h3>

                <button
                  className="remove-btn"

                  onClick={() =>
                    props.removeCart(item.id)
                  }
                >

                  Remove

                </button>

              </div>

            </div>

          );

        })

      }

     {
  props.cart.length > 0 &&

  <div className="cart-footer">

    <h1 className="total">

      Total :
      ₹ {total.toFixed(0)}

    </h1>

    <button
      className="pay-btn"

      onClick={()=>
        alert(
          "✅ Payment Successful!"
        )
      }
    >
      Pay Now
    </button>

  </div>
}
    </div>

  );
}

export default Cart;