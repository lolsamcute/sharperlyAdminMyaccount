import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Group C", value: 100, color: "#414B54" },
  { name: "Group B", value: 300, color: "#2BC155" },
  { name: "Group A", value: 400, color: "#FE6D4D" },
];

export function PaymentMethodChart() {
  return (
    <ResponsiveContainer height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={60}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
