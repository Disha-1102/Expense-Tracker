import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav
      className="navbar navbar-expand-lg shadow-sm p-3"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0px",
        marginBottom: "20px"
      }}
    >

      <div className="container">

        <h2
  className="fw-bold m-0"
  style={{
    background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
    fontFamily: "'Poppins', sans-serif"
  }}
>
  SMART EXPENSE TRACKER
</h2>

        <button
          className="btn"
          style={{
  backgroundColor: "#f19ce0",
  borderRadius: "5px",
  padding: "5px 15px",
  border: "none",
  fontWeight: "600"
}}
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;