import { useState } from "react";
import api from "../services/api";

function BudgetForm({ fetchDashboard })  {

  const [monthlyLimit, setMonthlyLimit] = useState("");

  const handleSetBudget = async () => {

    try {

      const token = localStorage.getItem("token");

      await api.post(
        "/budget",
        {
          monthly_limit: parseFloat(monthlyLimit)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Budget saved successfully!");
      fetchDashboard();

      setMonthlyLimit("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to save budget");

    }

  };

  return (

  <div
    className="card shadow-lg p-4 mt-4"
    style={{
      background: "#1E293B",
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.08)"
    }}
  >

    <h3
      className="text-center mb-4"
      style={{
        color: "#F8FAFC",
        fontWeight: "700"
      }}
    >
      Set Monthly Budget
    </h3>

    <input
      type="number"
      className="form-control"
      placeholder="Enter budget amount"
      value={monthlyLimit}
      onChange={(e) => setMonthlyLimit(e.target.value)}
      style={{
        background: "#0F172A",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "15px",
        padding: "12px"
      }}
    />

    <button
      className="btn mt-4"
      style={{
        background: "linear-gradient(135deg,#06B6D4,#3B82F6)",
        color: "white",
        border: "none",
        borderRadius: "15px",
        padding: "12px",
        fontWeight: "600"
      }}
      onClick={handleSetBudget}
    >
      Save Budget
    </button>

  </div>

);

}

export default BudgetForm;