const TransactionAnalyticsCardInfo = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Total Money Transfer Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Icon
              width={24}
              height={24}
              color="#6366F1"
              icon="material-symbols:send"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Total Money Transfer Today
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $4,292.79
            </div>
            <div className="text-gray-500 text-sm">Total Amount</div>
          </div>
        </div>

        {/* Money Transfer Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon
                width={20}
                height={20}
                color="#6366F1"
                icon="material-symbols:gavel"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-sm font-medium">
                  Money Transfer Today
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded border border-green-300 font-medium">
                  Bid
                </span>
              </div>
              <div className="text-gray-500 text-sm">Total Amount</div>
            </div>
            <div className="text-lg font-semibold text-gray-900">$1,000.79</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon
                width={20}
                height={20}
                color="#6366F1"
                icon="material-symbols:send"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-sm font-medium">
                  Money Transfer Today
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded border border-green-300 font-medium">
                  Without Bid
                </span>
              </div>
              <div className="text-gray-500 text-sm">Total Amount</div>
            </div>
            <div className="text-lg font-semibold text-gray-900">$3,292.79</div>
          </div>
        </div>
      </div>

      {/* Data Transaction Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Icon
              width={24}
              height={24}
              color="#6366F1"
              icon="material-symbols:data-usage"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Data Transaction Today
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $4,292.79
            </div>
            <div className="text-gray-500 text-sm">Total Amount</div>
          </div>
        </div>

        {/* Data Transaction Breakdown */}
        <div>
          <h4 className="text-gray-700 text-sm font-medium mb-4">
            Data Transaction Breakdown Today
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.79</div>
                <div className="text-gray-600 text-xs">MTN</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">AIRTEL</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">GLO</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">9MOBILE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airtime Transaction Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Icon
              width={24}
              height={24}
              color="#6366F1"
              icon="material-symbols:phone-android"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Airtime Transaction Today
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $4,292.79
            </div>
            <div className="text-gray-500 text-sm">Total Amount</div>
          </div>
        </div>

        {/* Airtime Transaction Breakdown */}
        <div>
          <h4 className="text-gray-700 text-sm font-medium mb-4">
            Airtime Transaction Breakdown Today
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.79</div>
                <div className="text-gray-600 text-xs">MTN</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">AIRTEL</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">GLO</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">9MOBILE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionAnalyticsCardInfo;