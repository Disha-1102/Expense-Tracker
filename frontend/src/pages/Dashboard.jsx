import { useEffect, useState } from "react";
import api from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";
import BudgetForm from "../components/BudgetForm";

function Dashboard() {

    const [dashboardData, setDashboardData] = useState({});

    useEffect(() => {

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

        fetchDashboard();

    }, []);

    return (
        <>
            <Navbar />

            <div className="container">

               
                <div className="container mt-4">

                    

                    <div className="row">

                        <div className="col-md-3">
                            <div
                                className="card mb-3"
                                style={{
                                    backgroundColor: "#46cbff",
                                    border: "none"
                                }}
                            >
                                <div className="card-body">
                                    <h5>Total Expense</h5>
                                    <h3>₹{dashboardData.total_expense}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div
                                className="card mb-3"
                                style={{
                                    backgroundColor: "#46cbff",
                                    border: "none"
                                }}
                            >
                                <div className="card-body">
                                    <h5>Monthly Budget</h5>
                                    <h3>₹{dashboardData.monthly_budget}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div
                                className="card mb-3"
                                style={{
                                    backgroundColor: "#46cbff",
                                    border: "none"
                                }}
                            >
                                <div className="card-body">
                                    <h5>Remaining Budget</h5>
                                    <h3>₹{dashboardData.remaining_budget}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div
                                className="card mb-3"
                                style={{
                                    backgroundColor: "#46cbff",
                                    border: "none"
                                }}
                            >
                                <div className="card-body">
                                    <h5>Expense Count</h5>
                                    <h3>{dashboardData.expense_count}</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <BudgetForm />

<hr />

<ExpenseForm />

<hr />

<ExpenseList />
            </div>



        </>
    );
}

export default Dashboard;