import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {

        if(email === "" || password === "")
        {
            alert("Please fill all fields");
            return;
        }

        props.loginUser({

            email: email

        });

        alert("Login Successful");

        navigate("/");

    }

    return(

        <div className="login-page">

            <div className="login-container">

                <h1>Login</h1>

                <div className="login-form">

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e)=>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e)=>
                            setPassword(e.target.value)
                        }
                    />

                    <button onClick={handleLogin}>

                        Login

                    </button>

                </div>

            </div>

        </div>

    )

}

export default Login;