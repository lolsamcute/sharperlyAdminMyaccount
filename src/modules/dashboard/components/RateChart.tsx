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
    <section className="p-4 flex-1 bg-white rounded-2xl">
      <section className="flex items-center justify-between">
        <div className="">
          <h2 className="text-content-primary font-semibold text-lg leading-6">
            1 AUD = 1,130 NGN
          </h2>
          <span className="text-content-secondary text-sm leading-5.5">
            Today
          </span>
        </div>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger
            iconClassName="size-3"
            className="w-23 rounded-x px-2 py-2.5 border-[0.5px] border-primary focus-visible:ring-0 focus:ring-transparent focus:!border-primary bg-primary3 shadow-none"
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
                <span className="text-black-80 text-xs leading-4.5 font-medium">
                  {country.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <RateChartComponent />

      <div className="w-full h-0.5 mt-8 mb-4 border-b-[0.5px] border-[#768E9C80]" />
      <div className="flex items-center justify-between px-4">
        <span className="text-content-secondary text-sm leading-5.5">
          A month ago
        </span>
        <span className="text-content-secondary text-sm leading-5.5">
          Today
        </span>
      </div>
    </section>
  );
};

export default RateChart;
