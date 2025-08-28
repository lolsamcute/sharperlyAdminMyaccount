import {
  Line,
  YAxis,
  XAxis,
  Tooltip,
  LineChart,
  ResponsiveContainer,
} from "recharts";

type RateData = {
  day: number;
  rate: number;
};

// sample data
const data: RateData[] = Array.from({ length: 30 }, (_, i) => ({
  day: i,
  rate: 1100 + Math.sin(i / 4) * 50 + Math.random() * 20,
}));

export default function RateChartComponent() {
  return (
    <div className="h-[200px] w-full mt-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <YAxis
            orientation="right"
            domain={["dataMin - 0.01", "dataMax + 0.01"]}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => value.toFixed(2)}
          />
          <XAxis hide />
          <Tooltip
            cursor={{
              stroke: "#60a5fa",
              strokeWidth: 2,
              strokeDasharray: "3 3",
            }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
            }}
            labelFormatter={() => ""}
            formatter={(value: number) => [value.toFixed(2), "Rate"]}
          />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#4700D6"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 8,
              stroke: "#4700D6",
              fill: "white",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
