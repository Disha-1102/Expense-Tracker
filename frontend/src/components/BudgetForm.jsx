import { useState } from "react";
import api from "../services/api";

function BudgetForm() {

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
      window.location.reload();

      setMonthlyLimit("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to save budget");

    }

  };

  return (

    <div className="card p-4 mt-4 shadow-sm">

      <h3>Set Monthly Budget</h3>

      <input
        type="number"
        className="form-control mt-3"
        placeholder="Enter budget"
        value={monthlyLimit}
        onChange={(e) => setMonthlyLimit(e.target.value)}
      />

      <button
        className="btn btn-primary mt-3"
        onClick={handleSetBudget}
      >
        Save Budget
      </button>

    </div>

  );

}

export default BudgetForm;