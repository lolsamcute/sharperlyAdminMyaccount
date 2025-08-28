import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { countryOptions } from "../utils/constants";
import HeadingOne from "@/components/typography/HeadingOne";

const DashboardHeader = () => {
  const [selectedToCountry, setSelectedToCountry] = useState("NGN");
  const [selectedFromCountry, setSelectedFromCountry] = useState("AUD");

  return (
    <section className="font-poppins flex justify-between items-center mt-7.5">
      <div className="space-y-1.5">
        <HeadingOne text="Dashboard" />
        <p className="text-sm text-default-text"> Good Morning, Super Admin!</p>
      </div>

      <section className="flex gap-12 items-end">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm leading-4.5 block">From</span>
          <Select
            value={selectedFromCountry}
            onValueChange={setSelectedFromCountry}
          >
            <SelectTrigger className="w-30 rounded p-2 bg-white focus-visible:ring-0 focus:ring-transparent focus:border-0 shadow-none">
              <SelectValue placeholder="Select a country" className="" />
            </SelectTrigger>
            <SelectContent>
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
                  <span className="text-black-80 text-sm font-medium">
                    {" "}
                    {country.name}{" "}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm leading-4.5 block"> To </span>
          <Select
            value={selectedToCountry}
            onValueChange={setSelectedToCountry}
          >
            <SelectTrigger className="w-30 rounded p-2 bg-white focus-visible:ring-0 focus:ring-transparent focus:border-0 shadow-none">
              <SelectValue defaultValue={"NGN"} />
            </SelectTrigger>
            <SelectContent>
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
                  <span className="text-black-80 text-sm font-medium">
                    {" "}
                    {country.name}{" "}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full max-w-41.5 rounded-x border-[1.5px] border-primary bg-white h-10 py-2 px-4 flex justify-center items-center gap-1">
          <Icon
            width="24"
            height="24"
            icon="ri:file-pdf-2-line"
            color="var(--color-primary)"
          />
          <span className="text-primary text-x font-medium">
            Generate Report
          </span>
        </div>
      </section>
    </section>
  );
};

export default DashboardHeader;
