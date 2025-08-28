const TransactionAnalyticsCardInfo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Money Transfer Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <img
              width={24}
              height={24}
              src="https://res.cloudinary.com/sharperly/image/upload/v1754926029/Sharperly%20Landing%20Page/sendIcon_n1vf73.svg"
              alt="send"
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
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <img
                  width={20}
                  height={20}
                  src="https://res.cloudinary.com/sharperly/image/upload/v1754377188/Sharperly%20Admin/smallBidHammer_c3xyeg.svg"
                  alt="hammer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-sm font-medium">
                    Money Transfer Today
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded border border-green-300">
                    Bid
                  </span>
                </div>
                <div className="text-gray-500 text-sm">Total Amount</div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-900">$1,000.79</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <img
                  width={20}
                  height={20}
                  src="https://res.cloudinary.com/sharperly/image/upload/v1754926029/Sharperly%20Landing%20Page/sendIcon_n1vf73.svg"
                  alt="send"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-sm font-medium">
                    Money Transfer Today
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded border border-green-300">
                    Without Bid
                  </span>
                </div>
                <div className="text-gray-500 text-sm">Total Amount</div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-900">$3,292.79</div>
          </div>
        </div>
      </div>

      {/* Data Transaction Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <img
              width={24}
              height={24}
              alt="billPayment"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377332/Sharperly%20Admin/billPayment_gmrl6u.svg"
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
            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/mtn_gnw0xl.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.79</div>
                <div className="text-gray-600 text-xs">MTN</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="AIRTEL"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/airtel_ggzuzr.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">AIRTEL</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="GLO"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/glo_stasmg.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">GLO</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="9MOBILE"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/9mobile_ygxtm1.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">9MOBILE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airtime Transaction Today */}
      <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <img
              width={24}
              height={24}
              alt="billPayment"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377332/Sharperly%20Admin/billPayment_gmrl6u.svg"
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
            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/mtn_gnw0xl.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.79</div>
                <div className="text-gray-600 text-xs">MTN</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="AIRTEL"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/airtel_ggzuzr.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">AIRTEL</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="GLO"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/glo_stasmg.svg"
              />
              <div>
                <div className="text-gray-900 font-semibold text-sm">$1,000.00</div>
                <div className="text-gray-600 text-xs">GLO</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 flex items-center gap-3">
              <img
                alt="9MOBILE"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/9mobile_ygxtm1.svg"
              />
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