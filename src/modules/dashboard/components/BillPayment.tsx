import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { BillPaymentChart } from "./BillPaymentChart";
import BillPaymentChartStat from "./BillPaymentChartStat";

const BillPayment = () => {
  return (
    <section className="w-[50%] bg-off-white pt-5 pb-9.5 px-3 rounded-x shadow-[0px_1.25px_1.88px_0px_#0000000D]">
      <Tabs defaultValue="today" className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-charcoal">Bill Payment</h2>
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

        <section className="h-12.5 w-full max-w-108 p-2.5 flex items-center justify-between bg-minty-hint rounded mt-7.5 mb-3">
          <div className="flex gap-3">
            <div className="bg-leafy-green flex items-center justify-center h-7.5 w-14.5 rounded-md">
              <span className="text-mint-soft font-semibold text-sm"> 25 </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="block text-deep-olive text-xs font-semibold">
                New Initiated
              </span>
              <div className="size-2 rounded-full bg-leafy-green" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="block text-charcoal-gray font-semibold text-xs">
              Manage Payment
            </span>
            <ChevronRight
              width={14}
              height={14}
              strokeWidth={2}
              color="var(--color-charcoal-gray)"
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
