const TransactionAnalyticsCardInfo = () => {
  return (
    <section className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <div className="bg-white px-4 pb-4 pt-5 rounded-x w-full space-y-9">
        {/* Total Money Transfer Today */}
        <div className="flex gap-4 items-center">
          <div className="size-12 flex justify-center items-center bg-primary-5 rounded-full">
            <img
              width={24}
              height={24}
              src="https://res.cloudinary.com/sharperly/image/upload/v1754926029/Sharperly%20Landing%20Page/sendIcon_n1vf73.svg"
              alt="send"
            />
          </div>
          <div className="w-full flex-1 space-y-1">
            <span className="block font-semibold text-xs text-cool-slate">
              Total Money Transfer Today
            </span>
            <span className="block font-medium text-xl text-black">
              $4,292.79
            </span>
            <span className="block font-medium text-xs text-cool-slate">
              Total Amount
            </span>
          </div>
        </div>

        {/* Money Transfer Today */}
        <div className="flex gap-4 items-center">
          <div className="size-12 flex justify-center items-center bg-primary-5 rounded-full">
            <img
              width="20"
              height="20"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377188/Sharperly%20Admin/smallBidHammer_c3xyeg.svg"
              alt="hammer"
            />
          </div>
          <div className="w-full flex-1 space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="block font-semibold text-xs text-cool-slate flex-1">
                Money Transfer Today
              </span>

              <span className="w-fit h-4.5 py-2 px-4 border-[0.5px] border-green2 rounded font-medium text-x text-green2 flex items-center justify-center">
                Bid
              </span>
            </div>
            <span className="block font-medium text-xl text-black">
              $4,292.79
            </span>
            <span className="block font-medium text-xs text-cool-slate">
              Total Amount
            </span>
          </div>
        </div>

        {/* Money Transfer Today - Without Bid */}
        <div className="flex gap-4 items-center">
          <div className="size-12 flex justify-center items-center bg-primary-5 rounded-full">
            <img
              width={24}
              height={24}
              src="https://res.cloudinary.com/sharperly/image/upload/v1754926029/Sharperly%20Landing%20Page/sendIcon_n1vf73.svg"
              alt="send"
            />
          </div>
          <div className="w-full flex-1 space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="block font-semibold text-xs text-cool-slate flex-1">
                Money Transfer Today
              </span>

              <span className="flex items-center justify-center h-4.5 py-2 px-4 border-[0.5px] border-green2 rounded font-medium text-x text-green2">
                Without Bid
              </span>
            </div>
            <span className="block font-medium text-xl text-black">
              $3,292.79
            </span>
            <span className="block font-medium text-xs text-cool-slate">
              Total Amount
            </span>
          </div>
        </div>
      </div>

      <section className="bg-white px-4 pb-4 pt-5 rounded-x w-full space-y-9">
        {/* Data Transaction Today */}
        <div className="flex gap-4 items-center">
          <div className="size-12 flex justify-center items-center bg-primary-5 rounded-full">
            <img
              width={20}
              height={20}
              alt="billPayment"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377332/Sharperly%20Admin/billPayment_gmrl6u.svg"
            />
          </div>
          <div className="w-full flex-1 space-y-1">
            <span className="block font-semibold text-xs text-cool-slate">
              Data Transaction Today
            </span>
            <span className="block font-medium text-xl text-black">
              $4,292.79
            </span>
            <span className="block font-medium text-xs text-cool-slate">
              Total Amount
            </span>
          </div>
        </div>

        {/* Data Transaction Breakdown Today  */}
        <section className="space-y-3">
          <span className="block text-primary-black font-medium text-xs">
            Data Transaction Breakdown Today
          </span>

          <section className="grid grid-cols-2 gap-x-2 gap-y-4">
            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/mtn_gnw0xl.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  MTN
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/airtel_ggzuzr.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  AIRTEL
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/glo_stasmg.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  GLO
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/9mobile_ygxtm1.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  9MOBILE
                </span>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="bg-white px-4 pb-4 pt-5 rounded-x w-full space-y-9">
        {/* Airtime Transaction Today */}
        <div className="flex gap-4 items-center">
          <div className="size-12 flex justify-center items-center bg-primary-5 rounded-full">
            <img
              width={20}
              height={20}
              alt="billPayment"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377332/Sharperly%20Admin/billPayment_gmrl6u.svg"
            />
          </div>
          <div className="w-full flex-1 space-y-1">
            <span className="block font-semibold text-xs text-cool-slate">
              Airtime Transaction Today
            </span>
            <span className="block font-medium text-xl text-black">
              $4,292.79
            </span>
            <span className="block font-medium text-xs text-cool-slate">
              Total Amount
            </span>
          </div>
        </div>

        {/* Airtime Transaction Breakdown Today   */}
        <section className="space-y-3">
          <span className="block text-primary-black font-medium text-xs">
            Airtime Transaction Breakdown Today
          </span>

          <section className="grid grid-cols-2 gap-x-2 gap-y-4">
            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/mtn_gnw0xl.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  MTN
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/airtel_ggzuzr.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  AIRTEL
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/glo_stasmg.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  GLO
                </span>
              </div>
            </div>

            <div className="py-2.5 px-3 flex gap-4 min-h-9.5 bg-primary3/66">
              <img
                alt="MTN"
                width={32}
                height={32}
                src="https://res.cloudinary.com/sharperly/image/upload/v1755001715/Sharperly%20Admin/9mobile_ygxtm1.svg"
              />

              <div className="space-y-1">
                <span className="text-black font-medium text-xs block">
                  $1,000.79
                </span>
                <span className="text-cool-slate font-medium text-x block">
                  9MOBILE
                </span>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TransactionAnalyticsCardInfo;
