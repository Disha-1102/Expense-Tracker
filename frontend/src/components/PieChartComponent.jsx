import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieChartComponent({ expenses }) {

  const COLORS = [
    "#D6EAF8",
    "#D5F5E3",
    "#E8DAEF",
    "#FADBD8",
    "#FCF3CF"
  ];

  return (

    <div
      className="card shadow-sm p-4 mt-4"
      style={{
        borderRadius: "20px",
        border: "none"
      }}
    >

      <h3 className="text-center mb-4">
        Expense Distribution
      </h3>

      <PieChart width={400} height={300}>

        <Pie
          data={expenses}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >

          {expenses.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />

          ))}

        </Pie>

        <Tooltip />

        <Legend />

      </PieChart>

    </div>

  );

}

export default PieChartComponent;