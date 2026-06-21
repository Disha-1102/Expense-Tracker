import { useState } from "react";
import api from "../services/api";

function ExpenseForm({ fetchDashboard })  {

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExpense = async () => {

    try {

      const token = localStorage.getItem("token");

      await api.post(
        "/expense",
        {
          category,
          amount: parseFloat(amount),
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Expense added successfully!");
      
      fetchDashboard();
      setCategory("");
      setAmount("");
      setDescription("");

    } catch (error) {

      console.log(error);

      alert("Failed to add expense");
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
      className="mb-4 text-center"
      style={{
        color: "#F8FAFC",
        fontWeight: "700"
      }}
    >
      Add Expense
    </h3>

    <div className="mb-3">

      <label
        className="form-label"
        style={{ color: "#94A3B8" }}
      >
        Category
      </label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          background: "#0F172A",
          color: "white",
          border: "1px solid #334155",
          borderRadius: "15px"
        }}
      />

    </div>

    <div className="mb-3">

      <label
        className="form-label"
        style={{ color: "#94A3B8" }}
      >
        Amount
      </label>

      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          background: "#0F172A",
          color: "white",
          border: "1px solid #334155",
          borderRadius: "15px"
        }}
      />

    </div>

    <div className="mb-3">

      <label
        className="form-label"
        style={{ color: "#94A3B8" }}
      >
        Description
      </label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          background: "#0F172A",
          color: "white",
          border: "1px solid #334155",
          borderRadius: "15px"
        }}
      />

    </div>

    <button
      className="btn mt-3"
      style={{
        background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
        color: "white",
        border: "none",
        borderRadius: "15px",
        padding: "12px",
        fontWeight: "600"
      }}
      onClick={handleAddExpense}
    >
      Add Expense
    </button>

  </div>
);
}

export default ExpenseForm;