import { PaymentMethodChart } from "./PaymentMethodChart";
import PaymentMethodChartStat from "./PaymentMethodChartStat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentMethod = () => {
  return (
    <section className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
      <Tabs defaultValue="today" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg text-gray-900">Payment Method</h2>
          <TabsList className="bg-gray-50 border border-gray-200 rounded-lg h-8 p-1">
            <TabsTrigger
              value="monthly"
              className="text-gray-600 text-xs h-6 px-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="text-gray-600 text-xs h-6 px-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="text-gray-600 text-xs h-6 px-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md font-medium"
            >
              Today
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">Monthly</TabsContent>
        <TabsContent value="weekly">Weekly</TabsContent>
        <TabsContent value="today">
          {/* Payment Method Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-gray-600 text-sm font-medium">Bank Transfer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
              <div className="text-gray-600 text-sm font-medium">PAY ID</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
              <div className="text-gray-600 text-sm font-medium">Wallet</div>
            </div>
          </div>

          {/* Chart and Stats */}
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 flex-shrink-0">
              <PaymentMethodChart />
            </div>
            <div className="flex-1">
              <PaymentMethodChartStat />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PaymentMethod;