import { useEffect, useState } from "react";
import api from "../services/api";

function ExpenseList() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {

    const fetchExpenses = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await api.get(
          "/expenses",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setExpenses(response.data);
        

      } catch (error) {

        console.log(error);

      }

    };

    fetchExpenses();

  }, []);
  const handleDelete = async (id) => {

  try {

    const token = localStorage.getItem("token");

    await api.delete(
      `/expense/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );

  }

  catch (error) {

    console.log(error);

  }

};

return (
  <>
    <h2 className="mt-4">Expenses</h2>

    <table className="table table-hover shadow-sm">
      <thead className="table-light">
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (

          <tr key={expense.id}>

            <td>{expense.category}</td>

            <td>₹{expense.amount}</td>

            <td>{expense.description}</td>

            <td>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(expense.id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}
      </tbody>

    </table>

  </>
);
}

export default ExpenseList;