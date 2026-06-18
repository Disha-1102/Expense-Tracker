import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

  try {

    const response = await api.post(
      "/register",
      {
        name,
        email,
        password
      }
    );

    if (
      response.data.message ===
      "User registered successfully"
    ) {

      alert("User registered successfully!");

    }

    else {

      alert(response.data.message);

    }

  }

  catch (error) {

    alert("Signup failed");

  }

};

  return (
<div className="auth-container">

<div className="auth-card">

<h2 className="auth-title">
Create Account 
</h2>

<input
className="form-control mb-3"
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

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
onClick={handleSignup}
>
Signup
</button>

<div className="link mt-3 text-center">
  Already have an account?{" "}
  <Link
    to="/login"
    style={{
      textDecoration: "none",
      color: "#72bef5",
      fontWeight: "bold"
    }}
  >
    Login
  </Link>
</div>

</div>

</div>
);
}

export default Signup;