import { useEffect, useState } from "react";
import api from "../services/api";

function ExpenseList({ fetchDashboard }) {

  const [expenses, setExpenses] = useState([]);

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

    }

    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

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

      await fetchExpenses();
      fetchDashboard();

    }

    catch (error) {

      console.log(error);

    }

  };

  return (
    // keep your existing JSX
    

    <div
      className="card shadow-lg mt-4"
      style={{
        background: "#1E293B",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <div className="card-body">

        <h3
          className="mb-4"
          style={{
            color: "#F8FAFC",
            fontWeight: "700"
          }}
        >
          Recent Expenses
        </h3>

        <div className="table-responsive">

          <table
            className="table align-middle"
            style={{
              color: "#F8FAFC"
            }}
          >

            <thead
              style={{
                background: "#0F172A",
                color: "#94A3B8"
              }}
            >
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {expenses.map((expense) => (

                <tr
                  key={expense.id}
                  style={{
                    background: "#1E293B",
                    color: "#F8FAFC"
                  }}
                >

                  <td>{expense.category}</td>

                  <td
                    style={{
                      color: "#10B981",
                      fontWeight: "600"
                    }}
                  >
                    ₹{expense.amount}
                  </td>

                  <td>{expense.description}</td>

                  <td>

                    <button
                      className="btn btn-sm"
                      style={{
                        background: "#EF4444",
                        color: "white",
                        borderRadius: "12px"
                      }}
                      onClick={() => handleDelete(expense.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
  
}

export default ExpenseList;



