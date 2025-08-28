import { PaymentMethodChart } from "./PaymentMethodChart";
import PaymentMethodChartStat from "./PaymentMethodChartStat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentMethod = () => {
  return (
    <section className="w-full h-full bg-off-white pt-5 pb-9.5 px-3 rounded-x shadow-[0px_1.25px_1.88px_0px_#0000000D]">
      <Tabs defaultValue="today" className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-charcoal">
            {" "}
            Payment Method{" "}
          </h2>
          <TabsList className="space-x-2.5 rounded-md h-7.5 overflow-clip bg-faint-lavender">
            <TabsTrigger
              value="monthly"
              className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal"
            >
              Today
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-7.5"></div>
        <TabsContent value="monthly">Monthly</TabsContent>
        <TabsContent value="weekly">Weekly</TabsContent>
        <TabsContent value="today">
          <section className="grid grid-cols-3 gap-2">
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                15
              </span>
              <span className="text-default-text text-xs font-bold">
                Bank Transfer
              </span>
            </div>
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                10
              </span>
              <span className="text-default-text text-xs font-bold">
                PAY ID
              </span>
            </div>
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                2
              </span>
              <span className="text-default-text text-xs font-bold">
                Wallet
              </span>
            </div>
          </section>

          <section className="flex items-center gap-5 mt-10">
            <div className="w-30 flex-shrink-0">
              <PaymentMethodChart />
            </div>

            <PaymentMethodChartStat />
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PaymentMethod;
