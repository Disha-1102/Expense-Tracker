import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    navigate("/login");

  };

  return (

    <nav
      className="navbar px-4 py-3 mb-4"
      style={{
        background: "#1E293B",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >

      <div className="container d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center gap-3">

          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "15px",
              background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "20px"
            }}
          >
            <FaWallet />
          </div>

          <div>

            <h3
              className="m-0 fw-bold"
              style={{
                color: "#F8FAFC",
                letterSpacing: "1px"
              }}
            >
              Smart Expense Tracker
            </h3>

            <small
              style={{
                color: "#94A3B8"
              }}
            >
              Manage your finances smarter
            </small>

          </div>

        </div>

        <button
          className="btn"
          onClick={handleLogout}
          style={{
            background: "linear-gradient(135deg,#EC4899,#8B5CF6)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "10px 20px",
            fontWeight: "600"
          }}
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;