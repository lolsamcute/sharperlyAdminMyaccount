const PaymentMethodChartStat = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-gray-700 text-sm font-medium">Bank Transfer (15%)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-2 rounded-full w-24">
            <div className="h-full w-4/5 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-900 text-sm font-bold">15</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 text-sm font-medium">PAY ID (10%)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-2 rounded-full w-24">
            <div className="h-full w-3/5 bg-orange-500 rounded-full"></div>
          </div>
          <span className="text-gray-900 text-sm font-bold">10</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          <span className="text-gray-700 text-sm font-medium">Wallet (8%)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-2 rounded-full w-24">
            <div className="h-full w-1/4 bg-gray-600 rounded-full"></div>
          </div>
          <span className="text-gray-900 text-sm font-bold">2</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodChartStat;