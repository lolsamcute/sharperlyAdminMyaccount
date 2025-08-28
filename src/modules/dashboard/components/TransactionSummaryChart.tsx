import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";

import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type ChartData = {
  name: string;
  total: number;
  budget: number;
};

const data: ChartData[] = [
  { name: "Jan", total: 5000, budget: 3000 },
  { name: "Feb", total: 22000, budget: 15000 },
  { name: "Mar", total: 26000, budget: 18000 },
  { name: "Apr", total: 52000, budget: 32000 },
  { name: "May", total: 58000, budget: 40000 },
  { name: "Jun", total: 21000, budget: 15000 },
  { name: "Jul", total: 34000, budget: 28000 },
  { name: "Aug", total: 68000, budget: 25000 },
  { name: "Sep", total: 25000, budget: 30000 },
  { name: "Oct", total: 72000, budget: 28000 },
];

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-1 gap-1.5">
          <p className="text-sm text-smoky-black">{label}</p>

          {payload.map((p, index) => (
            <div key={index} className="grid grid-cols-2 items-center gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <p className="text-sm capitalize text-smoky-black">
                  {p.dataKey}
                </p>
              </div>
              <p className="font-medium text-right text-smoky-black">
                {`$${
                  typeof p.value === "number" ? p.value.toLocaleString() : ""
                }`}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const TransactionSummaryChart: React.FC = () => {
  return (
    <section className="">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBudget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: number) => `$${value / 1000}K`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#10b981",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="budget"
              stroke="#f43f5e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBudget)"
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTotal)"
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default TransactionSummaryChart;
