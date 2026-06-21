import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PieChartComponent({ expenses }) {

  const COLORS = [
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#06B6D4"
  ];

  const categoryData = [];

  expenses.forEach((expense) => {

    const existing = categoryData.find(
      item => item.name === expense.category
    );

    if (existing) {

      existing.value += expense.amount;

    }

    else {

      categoryData.push({
        name: expense.category,
        value: expense.amount
      });

    }

  });

  return (

    <div
      className="card shadow-lg mt-4 p-4"
      style={{
        background: "#1E293B",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <h3
        className="mb-4"
        style={{
          color: "white"
        }}
      >
        Expense Distribution
      </h3>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >

            {categoryData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default PieChartComponent;