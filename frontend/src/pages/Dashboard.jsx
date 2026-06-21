import { useEffect, useState } from "react";
import api from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";
import BudgetForm from "../components/BudgetForm";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {

  const [dashboardData, setDashboardData] = useState({});
  const [expenses, setExpenses] = useState([]);

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await api.get(
        "/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setDashboardData(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

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

    fetchDashboard();
    fetchExpenses();

  }, []);

  return (

    <>
      <Navbar />

      <div className="container">

        <div className="container mt-4">

          <DashboardCards dashboardData={dashboardData} />

        </div>

        <BudgetForm fetchDashboard={fetchDashboard} />

        <hr />

        <ExpenseForm
            fetchDashboard={fetchDashboard}
            />
        

        <hr />

        <ExpenseList
          expenses={expenses}
          fetchExpenses={fetchExpenses}
          fetchDashboard={fetchDashboard}
        />

      </div>

    </>

  );

}

export default Dashboard;