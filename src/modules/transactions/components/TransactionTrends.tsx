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
import { useState, useCallback } from "react";

const airtimeChartData = [
  { day: "Mon", airtime: 52 },
  { day: "Tues", airtime: 42 },
  { day: "Wed", airtime: 89 },
  { day: "Thu", airtime: 60 },
  { day: "Fri", airtime: 49 },
  { day: "Sat", airtime: 69 },
  { day: "Sun", airtime: 36 },
];

const dataChartData = [
  { day: "Mon", data: 88 },
  { day: "Tues", data: 76 },
  { day: "Wed", data: 92 },
  { day: "Thu", data: 65 },
  { day: "Fri", data: 55 },
  { day: "Sat", data: 81 },
  { day: "Sun", data: 44 },
];

export function TransactionTrendsChart() {
  const [chartValue, setChartValue] = useState("Airtime");
  const [chartData, setChartData] = useState<Array<unknown>>(airtimeChartData);
  const [dataKey, setDataKey] = useState("airtime");

  const handleValueChange = useCallback((value: string) => {
    setChartValue(value);
    if (value === "Airtime") {
      setChartData(airtimeChartData);
      setDataKey("airtime");
    } else {
      setChartData(dataChartData);
      setDataKey("data");
    }
  }, []);

  return (
    <Card className="shadow-none border-none rounded-x p-6">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2.5">
        <CardTitle className="text-xl text-primary-black font-medium">
          Transaction Trends
        </CardTitle>
        <Select
          value={chartValue}
          onValueChange={handleValueChange}
          defaultValue="this-week"
        >
          <SelectTrigger className="w-29 h-8.5 border border-light-stone focus-visible:ring-0 focus:ring-transparent focus:!border-light-stone shadow-none font-bold text-gray-deep text-[11px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Airtime">Airtime</SelectItem>
            <SelectItem value="Data"> Data </SelectItem>
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
              axisLine={{ stroke: "#888888" }}
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
              dataKey={dataKey}
              fill="var(--color-chart-blue)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
