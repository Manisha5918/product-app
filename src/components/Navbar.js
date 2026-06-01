import { Link } from "react-router-dom";

function Navbar(props) {

  return (

    <div className="navbar">

      <div className="logo">
        Product App
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          Cart {props.cart.length}
        </Link>

        <Link to="/wishlist">
          Wishlist {props.wishlist.length}
        </Link>


         

{
  !props.isLoggedIn &&

  <Link to="/login">
    Login
  </Link>
}

        <Link to="/profile">
          Profile
        </Link>

                <Link to="/about">
          About
        </Link>

      </div>

    </div>

  );
}

export default Navbar;