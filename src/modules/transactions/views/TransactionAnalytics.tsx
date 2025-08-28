import HeadingOne from "@/components/typography/HeadingOne";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import TransactionAnalyticsCardInfo from "../components/TransactionAnalyticsCardInfo";
import { TransactionTrendsChart } from "../components/TransactionTrends";
import PaymentMethod from "../components/PaymentMethod";

const TransactionAnalytics = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <HeadingOne text="Transaction Analytics" />
        
        <div className="flex items-center gap-4">
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="bg-gray-50 border border-gray-200 rounded-lg h-10 p-1">
              <TabsTrigger
                value="monthly"
                className="text-gray-600 text-sm h-8 px-4 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="weekly"
                className="text-gray-600 text-sm h-8 px-4 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="today"
                className="text-gray-600 text-sm h-8 px-4 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
              >
                Today
              </TabsTrigger>
            </TabsList>

            <TabsContent value="monthly">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="weekly">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="today">
              <TransactionAnalyticsCardInfo />
            </TabsContent>
          </Tabs>

          <Button className="border border-purple-600 text-purple-600 bg-white hover:bg-purple-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
            <Icon
              width="20"
              height="20"
              icon="ri:file-pdf-2-line"
              color="currentColor"
            />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex gap-6">
        <div className="flex-1">
          <TransactionTrendsChart />
        </div>
        <div className="w-96">
          <PaymentMethod />
        </div>
      </div>
    </section>
  );
};

export default TransactionAnalytics;