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
    color: "#1E293B",
    letterSpacing: "1px",
    fontFamily: 'Montserrat',
    WebkitTextFillColor: "#010003",
    opacity: "1"
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