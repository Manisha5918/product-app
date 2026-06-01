import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import About from "./About";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Profile from "./Profile";

function Header(props) {

  return (

    <BrowserRouter>

      {/* NAVBAR */}

      {
        props.isLoggedIn &&

        <Navbar
          cart={props.cart}
          wishlist={props.wishlist}
          isLoggedIn={props.isLoggedIn}
        />
      }

      <Routes>

        {/* LOGIN */}

        <Route

          path="/login"

          element={

            props.isLoggedIn ?

            <Navigate to="/" />

            :

            <Login
              loginUser={props.loginUser}
            />

          }

        />

        {/* HOME */}

        <Route

          path="/"

          element={

            props.isLoggedIn ?

            <Home />

            :

            <Navigate to="/login" />

          }

        />

        {/* PRODUCTS */}

        <Route

          path="/products"

          element={

            props.isLoggedIn ?

            <Products
              addToCart={props.addToCart}
              addToWishlist={props.addToWishlist}
            />

            :

            <Navigate to="/login" />

          }

        />

        {/* PRODUCT DETAILS */}

        <Route

          path="/products/:id"

          element={

            props.isLoggedIn ?

            <ProductDetails />

            :

            <Navigate to="/login" />

          }

        />

        {/* ABOUT */}

        <Route

          path="/about"

          element={

            props.isLoggedIn ?

            <About />

            :

            <Navigate to="/login" />

          }

        />

        {/* CART */}

        <Route

          path="/cart"

          element={

            props.isLoggedIn ?

            <Cart
              cart={props.cart}
              removeCart={props.removeCart}
            />

            :

            <Navigate to="/login" />

          }

        />

        {/* WISHLIST */}

        <Route

          path="/wishlist"

          element={

            props.isLoggedIn ?

            <Wishlist
              wishlist={props.wishlist}
              removeWishlist={props.removeWishlist}
            />

            :

            <Navigate to="/login" />

          }

        />

        {/* PROFILE */}

        <Route

          path="/profile"

          element={

            props.isLoggedIn ?

            <Profile />

            :

            <Navigate to="/login" />

          }

        />

        {/* INVALID ROUTES */}

        <Route

          path="*"

          element={

            props.isLoggedIn ?

            <Navigate to="/" />

            :

            <Navigate to="/login" />

          }

        />

      </Routes>

    </BrowserRouter>

  );

}

export default Header;