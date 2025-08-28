import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type LegendProps,
} from "recharts";

type TransactionData = {
  month: string;
  withdrawals: number;
  deposits: number;
};

// Sample data
const data: TransactionData[] = [
  { month: "Jan", withdrawals: 25, deposits: 63 },
  { month: "Feb", withdrawals: 42, deposits: 62 },
  { month: "Mar", withdrawals: 39, deposits: 30 },
  { month: "Apr", withdrawals: 74, deposits: 48 },
  { month: "May", withdrawals: 19, deposits: 88 },
  { month: "Jun", withdrawals: 30, deposits: 69 },
  { month: "Jul", withdrawals: 65, deposits: 75 },
  { month: "Aug", withdrawals: 58, deposits: 38 },
  { month: "Sep", withdrawals: 50, deposits: 30 },
  { month: "Oct", withdrawals: 98, deposits: 43 },
];

const CustomLegend: React.FC<LegendProps> = (props) => {
  const { payload } = props;

  const totals = {
    Withdrawals: "$10000.00",
    Deposits: "$20000.00",
  };

  return (
    <div className="flex justify-end gap-3 mt-6">
      {payload?.map((entry, index) => (
        <div
          key={`item-${index}`}
          className="flex items-start gap-2 bg-secondarybg py-1 px-2 rounded"
        >
          <div
            className="h-0.5 w-3 block mt-1.5 rounded-xs"
            style={{ backgroundColor: entry.color }}
          />
          <div className="flex flex-col text-sm">
            <span className="text-primary2 text-xs leading-4">
              {entry.value}
            </span>
            <span className="font-medium text-xs text-secondary leading-4">
              {totals[entry.value as keyof typeof totals]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function WalletTransactionTrendChart() {
  return (
    <div className="h-[350px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            // Removed axisLine={false} and added a stroke to make it visible
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            cursor={{
              stroke: "#d1d5db",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
            }}
          />
          <Legend content={<CustomLegend />} verticalAlign="bottom" />
          <Line
            type="monotone"
            dataKey="withdrawals"
            name="Withdrawals"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="deposits"
            name="Deposits"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
