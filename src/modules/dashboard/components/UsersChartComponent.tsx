import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type LegendProps,
} from "recharts";

type UserData = {
  month: string;
  totalSignups: number;
  kycApproved: number;
};

const data: UserData[] = [
  { month: "Jan", totalSignups: 36, kycApproved: 24 },
  { month: "Feb", totalSignups: 24, kycApproved: 20 },
  { month: "Mar", totalSignups: 110, kycApproved: 30 },
  { month: "Apr", totalSignups: 46, kycApproved: 30 },
  { month: "May", totalSignups: 62, kycApproved: 59 },
  { month: "Jun", totalSignups: 58, kycApproved: 45 },
  { month: "Jul", totalSignups: 63, kycApproved: 25 },
  { month: "Aug", totalSignups: 27, kycApproved: 48 },
  { month: "Sep", totalSignups: 73, kycApproved: 20 },
  { month: "Oct", totalSignups: 56, kycApproved: 30 },
];

const CustomLegend: React.FC<LegendProps> = (props) => {
  const { payload } = props;
  return (
    <div className="flex justify-end gap-3 mt-6">
      {payload?.map((entry, index) => (
        <div
          key={`item-${index}`}
          className="flex items-center gap-1 bg-secondarybg py-1 px-2 rounded"
        >
          <span
            className="size-3 rounded-xs"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-primary2">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function UsersChartComponent() {
  return (
    <div className="h-75 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
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
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              border: "1px solid #ccc",
            }}
          />
          <Legend content={<CustomLegend />} />
          <Bar
            dataKey="totalSignups"
            name="Users (Total Signups)"
            fill="#357AF6"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="kycApproved"
            name="KYC Approved (Successful verification)"
            fill="#5CC8BE"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
