function DashboardCards({ dashboardData }) {

  const cards = [
    {
      title: "Total Expense",
      value: `₹${dashboardData.total_expense || 0}`,
      color: "#8B5CF6"
    },
    {
      title: "Monthly Budget",
      value: `₹${dashboardData.monthly_budget || 0}`,
      color: "#06B6D4"
    },
    {
      title: "Remaining Budget",
      value: `₹${dashboardData.remaining_budget || 0}`,
      color: "#10B981"
    },
    {
      title: "Expense Count",
      value: dashboardData.expense_count || 0,
      color: "#EC4899"
    }
  ];

  return (
  <div className="row">

    {cards.map((card, index) => (

      <div className="col-md-3 mb-4" key={index}>

        <div
          className="card shadow-lg h-100"
          style={{
            background: "#1E293B",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            color: "white",
            transition: "0.3s"
          }}
        >

          <div className="card-body p-4">

            <h6
              style={{
                color: "#94A3B8",
                fontSize: "14px"
              }}
            >
              {card.title}
            </h6>

            <h1
              className="mt-3"
              style={{
                color: card.color,
                fontWeight: "700"
              }}
            >
              {card.value}
            </h1>

          </div>

        </div>

      </div>

    ))}

  </div>
);
}

export default DashboardCards;