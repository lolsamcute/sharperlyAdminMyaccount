import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { countryOptions } from "../utils/constants";
import TransactionSummaryChart from "./TransactionSummaryChart";

const TransactionSummary = () => {
  const [selectedToCountry, setSelectedToCountry] = useState("NGN");
  const [selectedFromCountry, setSelectedFromCountry] = useState("AUD");

  return (
    <section className="w-full flex-1 bg-off-white pt-5 pb-9.5 px-3 xl:px-8.5 rounded-x shadow-[0px_1.25px_1.88px_0px_#0000000D]">
      <section className="">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg text-charcoal">
            Transaction Summary
          </h2>
          <p className="text-cool-grey text-base -tracking-[2%] font-bold">
            $2,600,000.00
          </p>
        </div>

        <Tabs defaultValue="month" className="w-full">
          <section className="flex items-center justify-between mt-6">
            <TabsList className="w-full max-w-45.5 space-x-2.5 rounded-x h-6 px-0 border-[0.63px] border-cloud-gray bg-white overflow-clip">
              <TabsTrigger
                value="day"
                className="text-smoky-black text-viii h-6 font-bold data-[state=active]:shadow-none flex justify-center items-center data-[state=active]:bg-leafy-green data-[state=active]:rounded-x data-[state=active]:text-white"
              >
                Day
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className="text-smoky-black text-viii h-6 font-bold data-[state=active]:shadow-none w-16 flex justify-center items-center data-[state=active]:bg-leafy-green data-[state=active]:rounded-x data-[state=active]:text-white"
              >
                Week
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className="text-smoky-black text-viii h-6 font-bold data-[state=active]:shadow-none w-16 flex justify-center items-center data-[state=active]:bg-leafy-green data-[state=active]:rounded-x data-[state=active]:text-white"
              >
                Month
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-1.5">
              <Select
                value={selectedFromCountry}
                onValueChange={setSelectedFromCountry}
              >
                <SelectTrigger
                  iconClassName="size-2"
                  className="rounded-x p-1.5 bg-white border-[0.63px] border-cloud-gray focus-visible:ring-0 focus:ring-transparent shadow-none"
                >
                  <span className="text-viii font-medium text-smoky-black block">
                    From
                  </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="min-w-16">
                  {countryOptions.map((country) => (
                    <SelectItem
                      key={country.name}
                      value={country.name}
                      className=""
                    >
                      <img
                        width={16}
                        height={16}
                        src={country.src}
                        alt={country.name}
                      />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedToCountry}
                onValueChange={setSelectedToCountry}
              >
                <SelectTrigger
                  iconClassName="size-2"
                  className="rounded-x p-1.5 bg-white border-[0.63px] border-cloud-gray focus-visible:ring-0 focus:ring-transparent shadow-none"
                >
                  <span className="text-viii font-medium text-smoky-black block">
                    To
                  </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="min-w-16">
                  {countryOptions.map((country) => (
                    <SelectItem
                      key={country.name}
                      value={country.name}
                      className=""
                    >
                      <img
                        width={16}
                        height={16}
                        src={country.src}
                        alt={country.name}
                      />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          <div className="border-[0.63px] border-cool-blue-50 rounded-x mt-6.5 mb-11" />

          <TabsContent value="day">
            <TransactionSummaryChart />
          </TabsContent>
          <TabsContent value="week">
            <TransactionSummaryChart />
          </TabsContent>
          <TabsContent value="month">
            <TransactionSummaryChart />
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
};

export default TransactionSummary;
