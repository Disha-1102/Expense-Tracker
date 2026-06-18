import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      const response = await api.post(
  "/login",
  formData,
  {
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded"
    }
  }
);

console.log(response.data);

localStorage.setItem(
  "token",
  response.data.access_token
);
      alert("Login successful!");

      navigate("/dashboard");

    }

    catch (error) {

      alert("Invalid credentials");

    }

  };

  return (
<div className="auth-container">

<div className="auth-card">

<h2 className="auth-title">
Welcome Back 
</h2>

<input
className="form-control mb-3"
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="form-control mb-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn custom-btn"
onClick={handleLogin}
>
Login
</button>

<div className="link mt-3 text-center">
  Don't have an account?{" "}
  <Link
    to="/signup"
    style={{
      textDecoration: "none",
      color: "#72bef5",
      fontWeight: "bold"
    }}
  >
    Sign Up
  </Link>
</div>

</div>

</div>
);
}

export default Login;