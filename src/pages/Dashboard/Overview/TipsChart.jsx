import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TipsChart = ({ values }) => {
  const pieData = [
    { name: "Total Tips", value: values[0] },
    { name: "My Tips", value: values[1] },
  ];
  const COLORS = ["#00a63e", "#f97316"];
  return (
    <div className="bg-green-100/50 dark:bg-gray-800 p-6 rounded-xl shadow-sm max-w-[740px] w-full ">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Tips Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TipsChart;
