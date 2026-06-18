import { useState } from "react";
import api from "../services/api";

function ExpenseForm() {

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
      window.location.reload();

      setCategory("");
      setAmount("");
      setDescription("");

    } catch (error) {

      console.log(error);

      alert("Failed to add expense");
    }

  };

 return (
  <div className="card shadow-sm p-4 mt-4"
       style={{
         backgroundColor: "#F8F9FA",
         borderRadius: "20px",
         border: "none"
       }}
  >

    <h3 className="mb-4 text-center">
      Add Expense
    </h3>

    <div className="mb-3">

      <label className="form-label">
        Category
      </label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

    </div>

    <div className="mb-3">

      <label className="form-label">
        Amount
      </label>

      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

    </div>

    <div className="mb-3">

      <label className="form-label">
        Description
      </label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

    </div>

    <button
      className="btn"
      style={{
        backgroundColor: "#e1aafe",
        borderRadius: "10px"
      }}
      onClick={handleAddExpense}
    >
      Add Expense
    </button>

  </div>
);
}

export default ExpenseForm;