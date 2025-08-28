import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { BillPaymentChart } from "./BillPaymentChart";
import BillPaymentChartStat from "./BillPaymentChartStat";

const BillPayment = () => {
  return (
    <section className="w-[48%] bg-white pt-6 pb-8 px-6 rounded-lg border border-gray-100 shadow-sm">
      <Tabs defaultValue="today" className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-gray-900">Bill Payment</h2>
          <TabsList className="space-x-2.5 rounded-md h-7.5 overflow-clip bg-faint-lavender">
            <TabsTrigger
              value="monthly"
              className="text-gray-600 text-xs data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-gray-300 data-[state=active]:rounded-md data-[state=active]:text-gray-900 font-medium"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="text-gray-600 text-xs data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-gray-300 data-[state=active]:rounded-md data-[state=active]:text-gray-900 font-medium"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="text-gray-600 text-xs data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-gray-300 data-[state=active]:rounded-md data-[state=active]:text-gray-900 font-medium"
            >
              Today
            </TabsTrigger>
          </TabsList>
        </div>

        <section className="h-12 w-full p-3 flex items-center justify-between bg-green-50 rounded-lg mt-6 mb-4">
          <div className="flex gap-3">
            <div className="bg-green-500 flex items-center justify-center h-8 w-12 rounded-md">
              <span className="text-white font-semibold text-sm"> 25 </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="block text-green-700 text-sm font-medium">
                New Initiated
              </span>
              <div className="size-2 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="block text-gray-700 font-medium text-sm">
              Manage Payment
            </span>
            <ChevronRight
              width={16}
              height={16}
              strokeWidth={2}
              color="#6B7280"
            />
          </div>
        </section>

        <TabsContent value="monthly">Monthly</TabsContent>
        <TabsContent value="weekly">Weekly</TabsContent>
        <TabsContent value="today">
          <section className="grid grid-cols-3 gap-2">
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                15
              </span>
              <span className="text-default-text text-xs font-bold">
                Completed
              </span>
            </div>
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                10
              </span>
              <span className="text-default-text text-xs font-bold">
                Pending
              </span>
            </div>
            <div className="flex flex-col pl-2.5 h-18.5 justify-center gap-1.5 rounded bg-off-white border border-gray-surface">
              <span className="block text-xl text-slate-muted font-bold">
                2
              </span>
              <span className="text-default-text text-xs font-bold">
                Failed
              </span>
            </div>
          </section>

          <section className="flex items-center gap-5 mt-10">
            <div className="w-30 flex-shrink-0">
              <BillPaymentChart />
            </div>

            <BillPaymentChartStat />
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BillPayment;
