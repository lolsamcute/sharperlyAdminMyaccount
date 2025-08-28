import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryOptions } from "../utils/constants";
import { useState } from "react";
import RateChartComponent from "./RateChartComponent";

const RateChart = () => {
  const [selectedCountry, setSelectedCountry] = useState("NGN");

  return (
    <section className="p-6 flex-1 bg-white rounded-lg border border-gray-100 shadow-sm">
      <section className="flex items-center justify-between">
        <div className="">
          <h2 className="text-gray-900 font-semibold text-lg leading-6">
            1 AUD = 1,130 NGN
          </h2>
          <span className="text-gray-600 text-sm leading-5.5">
            Today
          </span>
        </div>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger
            iconClassName="size-3"
            className="w-24 rounded-lg px-3 py-2 border border-gray-300 focus-visible:ring-0 focus:ring-transparent focus:!border-primary bg-gray-50 shadow-none"
          >
            <SelectValue placeholder="Select a country" className="" />
          </SelectTrigger>
          <SelectContent className="min-w-16">
            {countryOptions.map((country) => (
              <SelectItem
                key={country.name}
                value={country.name}
                className="flex items-center gap-2"
              >
                <img
                  width={20}
                  height={20}
                  src={country.src}
                  alt={country.name}
                />
                <span className="text-gray-900 text-sm leading-4.5 font-medium">
                  {country.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <RateChartComponent />

      <div className="w-full h-px mt-8 mb-4 border-b border-gray-200" />
      <div className="flex items-center justify-between px-4">
        <span className="text-gray-600 text-sm leading-5.5">
          A month ago
        </span>
        <span className="text-gray-600 text-sm leading-5.5">
          Today
        </span>
      </div>
    </section>
  );
};

export default RateChart;
