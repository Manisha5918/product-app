import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [toast, setToast] = useState(null);

const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LOGIN FUNCTION

  function loginUser(userData){

    localStorage.setItem(

      "isLoggedIn",

      "true"

    );

    localStorage.setItem(

      "user",

      JSON.stringify(userData)

    );

    setIsLoggedIn(true);

  }

  // LOGOUT FUNCTION

  function logoutUser(){

    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

  }

  // TOAST

  function showToast(msg, type = 'success') {

    setToast({ msg, type });

    setTimeout(() => setToast(null), 2800);

  }

  // CART

  function addToCart(product) {

    if (cart.find(i => i.id === product.id)) {

      showToast('Already in cart', 'warn');

    }

    else {

      setCart([...cart, product]);

      showToast('Added to cart ✓');

    }

  }

  // WISHLIST

  function addToWishlist(product) {

    if (wishlist.find(i => i.id === product.id)) {

      showToast('Already in wishlist', 'warn');

    }

    else {

      setWishlist([...wishlist, product]);

      showToast('Saved to wishlist ♥');

    }

  }

  // REMOVE CART

  function removeCart(id) {

    setCart(

      cart.filter(i => i.id !== id)

    );

  }

  // REMOVE WISHLIST

  function removeWishlist(id) {

    setWishlist(

      wishlist.filter(i => i.id !== id)

    );

  }

  return (

    <div>

      {

        toast &&

        <div className={`toast-bar toast-${toast.type}`}>

          {toast.msg}

        </div>

      }

      <Header

        isLoggedIn={isLoggedIn}

        loginUser={loginUser}

        logoutUser={logoutUser}

        cart={cart}

        wishlist={wishlist}

        addToCart={addToCart}

        addToWishlist={addToWishlist}

        removeCart={removeCart}

        removeWishlist={removeWishlist}

      />

      {

        isLoggedIn &&

        <Footer />

      }

    </div>

  );

}

export default App;