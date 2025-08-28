import HeadingOne from "@/components/typography/HeadingOne";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import TransactionAnalyticsCardInfo from "../components/TransactionAnalyticsCardInfo";
import { TransactionTrendsChart } from "../components/TransactionTrends";
import PaymentMethod from "../components/PaymentMethod";

const TransactionAnalytics = () => {
  return (
    <Tabs defaultValue="today" className="w-full">
      <section className="space-y-4">
        <section className="flex items-center justify-between w-full max-w-238.5">
          <HeadingOne text="Transaction Analytics" />

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

            <Button className="w-full max-w-41.5 rounded-x border-[1.5px] border-primary bg-white hover:bg-white h-10 py-2 px-4 flex justify-center items-center gap-1">
              <Icon
                width="24"
                height="24"
                icon="ri:file-pdf-2-line"
                color="var(--color-primary)"
              />
              <span className="text-primary text-x font-medium">
                Generate Report
              </span>
            </Button>
          </div>
        </section>

        <section className="space-y-8 w-full max-w-250">
          <div>
            <TabsContent value="monthly">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="weekly">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="today">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
          </div>

          <section className="flex gap-4">
            <section className="bg-white rounded-x pt-9 pb-4 px-4 space-y-9 w-[49.65%]">
              <TransactionTrendsChart />
            </section>

            <section className="flex-1">
              <PaymentMethod />
            </section>
          </section>
        </section>
      </section>
    </Tabs>
  );
};

export default TransactionAnalytics;
