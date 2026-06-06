import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login(props){

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



function handleLogin(){


if(email==="" || password===""){

alert("Please fill all fields");
return;

}


props.loginUser({

email:email

});


navigate("/");


}




return(


<div className="login-page">


<div className="login-box">



{/* LEFT */}


<div className="login-left">


<h1 className="brand">

PRODUCT APP

</h1>



<h2>
Shop Smarter
</h2>



<p>

Explore premium collections,
exclusive products and enjoy
a faster secure shopping
experience.

</p>




<div className="feature-list">


<div>
Premium Products
</div>


<div>
Secure Payments
</div>


<div>
Fast Delivery
</div>



</div>


</div>







{/* RIGHT */}


<div className="login-right">


<span className="tag">

Member Login

</span>



<h1>

Welcome Back

</h1>


<p>

Login and continue your shopping journey

</p>




<input

type="email"

placeholder="Email Address"

value={email}

onChange={(e)=>setEmail(e.target.value)}


/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}


/>




<button

className="login-button"

onClick={handleLogin}

>

Login

</button>




<h4>

New customer ? Create account

</h4>



</div>



</div>



</div>


)

}



export default Login;