import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeadingOne from "@/components/typography/HeadingOne";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { countryOptions } from "@/modules/dashboard/utils/constants";
import WalletCardInfo from "../components/WalletCardInfo";
import WalletTables from "../components/WalletTables";

const Wallet = () => {
  const [selectedCountry, setSelectedCountry] = useState("AUD");

  return (
    <section>
      <Tabs defaultValue="today" className="w-full">
        <section className="space-y-4">
          <section className="flex items-center justify-between">
            <HeadingOne text="Wallets" />

            <div className="flex gap-8 items-center">
              <TabsList className="space-x-2.5 rounded-md h-10 overflow-clip bg-faint-lavender border-[0.5px] border-light-violet w-full max-w-45">
                <TabsTrigger
                  value="monthly"
                  className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="weekly"
                  className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
                >
                  Weekly
                </TabsTrigger>
                <TabsTrigger
                  value="today"
                  className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
                >
                  Today
                </TabsTrigger>
              </TabsList>

              <div className="">
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
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
                          {country.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section>
            <TabsContent value="monthly">
              <WalletCardInfo />
            </TabsContent>
            <TabsContent value="weekly">
              <WalletCardInfo />
            </TabsContent>
            <TabsContent value="today">
              <WalletCardInfo />
            </TabsContent>
          </section>
        </section>
      </Tabs>

      <WalletTables />
    </section>
  );
};

export default Wallet;
