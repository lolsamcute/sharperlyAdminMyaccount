import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { day: "Mon", signups: 52 },
  { day: "Tues", signups: 42 },
  { day: "Wed", signups: 89 },
  { day: "Thu", signups: 60 },
  { day: "Fri", signups: 49 },
  { day: "Sat", signups: 69 },
  { day: "Sun", signups: 36 },
];

export function SignupTrendsChart() {
  return (
    <Card className="shadow-none border-none rounded-x p-6">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2.5">
        <CardTitle className="text-xl text-primary-black font-medium">
          Signup Trends
        </CardTitle>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-29 h-8.5 border border-light-stone focus-visible:ring-0 focus:ring-transparent focus:!border-light-stone shadow-none font-bold text-gray-deep text-[11px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This week</SelectItem>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="var(--color-secondarybg)"
            />

            <XAxis
              dataKey="day"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: "#888888" }} // UPDATE: Axis line is now visible
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
                backgroundColor: "#fff",
                borderColor: "#fff",
              }}
              labelStyle={{
                color: "#8E8E93",
              }}
            />

            <Bar
              dataKey="signups"
              fill="var(--color-chart-blue)" // UPDATE: Bar color changed to the specific hex code
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
