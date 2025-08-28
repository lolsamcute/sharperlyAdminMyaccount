import BreadCrumb from "@/components/common/BreadCrumb";
import Detail from "@/components/common/Detail";
import HeadingOne from "@/components/typography/HeadingOne";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react/dist/iconify.js";

const TransactionDetail = () => {
  const statusOptions: {
    [key in "Initiated" | "Completed" | "Failed" | "Pending"]: {
      text: string;
      bg: string;
    };
  } = {
    Initiated: { text: "#FE8F76", bg: "#FEF0ED" },
    Pending: { text: "#F7CB45", bg: "#FFF2CF" },
    Completed: { text: "#29C153", bg: "#29C15329" },
    Failed: { text: "#D80027", bg: "#FFCECF" },
  };

  return (
    <section className="font-poppins">
      <div className="spacey-1.5">
        <HeadingOne text="Wallets" />
        <BreadCrumb
          route="wallets"
          linkName="Funds"
          subRoute="Transaction Detail"
        />
      </div>

      <section className="bg-off-white rounded-lg py-8 px-7 mt-7.5">
        <section className="space-y-8">
          <section className="flex w-full justify-between items-center max-w-135">
            <div className="w-full flex-1 flex items-center gap-4">
              <div className="rounded-full size-12 bg-primary-5 flex justify-center items-center">
                <img
                  width={24}
                  height={24}
                  src="https://res.cloudinary.com/sharperly/image/upload/v1754926029/Sharperly%20Landing%20Page/sendIcon_n1vf73.svg"
                  alt="send"
                />
              </div>

              <div className="space-y-2 w-full flex-1">
                <span className="block font-medium text-base text-charcoal2">
                  Fidelis Nwachukwu
                </span>
                <span className="block text-xs text-cool-slate">
                  fidelisnwachukwu@gmail.com
                </span>
              </div>
            </div>

            <span className="block text-xl text-charcoal2 font-medium">
              {" "}
              $1000 AUD{" "}
            </span>
          </section>

          <section className="flex items-center gap-4">
            <div className="border-[0.5px] border-black2 flex justify-center items-center gap-1 w-full rounded max-w-22.5 h-7 py-2 px-4">
              <Icon
                width="15"
                height="15"
                color="var(--color-green2)"
                icon="mdi:checkbox-marked-circle-outline"
              />
              <span className="text-green2 font-medium text-x"> Approve </span>
            </div>

            <div className="border-[0.5px] border-black2 flex justify-center items-center gap-1 w-full rounded max-w-22.5 h-7 py-2 px-4">
              <Icon
                width="15"
                height="15"
                color="var(--color-warning)"
                icon="simple-line-icons:close"
              />

              <span className="text-warning font-medium text-x"> Reject </span>
            </div>

            <div className="border-[0.5px] border-black2 flex justify-center items-center gap-1 w-full rounded max-w-22.5 h-7 py-2 px-4">
              <Icon
                width="15"
                height="15"
                icon="proicons:flag"
                color="var(--color-red2)"
              />

              <span className="text-red2 font-medium text-x"> Flag </span>
            </div>

            <div className="border-[0.5px] border-black2 flex justify-center items-center gap-1 w-full rounded max-w-22.5 h-7 py-2 px-4">
              <Icon
                width="16"
                height="16"
                color="var(--color-sky-blue)"
                icon="tabler:credit-card-refund"
              />

              <span className="text-sky-blue font-medium text-x"> Refund </span>
            </div>
          </section>

          <div className="h-0.5 w-full border-b border-b-grey-1" />

          <section className="">
            <h2 className="font-bold text-lg text-ink">Transactions Details</h2>
            <div className="space-y-4">
              <Detail
                title="Status"
                value={
                  <>
                    <Badge
                      className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
                      style={{
                        color: statusOptions["Initiated"].text,
                        backgroundColor: statusOptions["Initiated"].bg,
                      }}
                    >
                      Initiated
                    </Badge>
                  </>
                }
              />

              <Detail
                title="Transaction ID"
                value="23a94261-2231-4f0b-a1fb-aab3ae70"
              />
              <Detail title="Transaction Reference" value="1749848963" />
              <Detail title="Transaction Type" value="Fund Wallet" />
              <Detail title="Amount" value="$1,000" />
              <Detail title="Transaction Fee" value="$0.00" />
              <Detail title="Transaction Date" value="2025-06-14 07:09:am" />
              <Detail title="Payment Method" value="Bank Transfer" />
              <Detail
                title="Sender Currency"
                value={
                  <span className="flex gap-2.5 items-center">
                    <img
                      width={20}
                      height={20}
                      src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/australia_icon.svg"
                      alt="AUD"
                    />{" "}
                    Australian Dollar (AUD)
                  </span>
                }
              />

              <Detail
                title="Recipient Currency"
                value={
                  <span className="flex gap-2.5 items-center">
                    <img
                      width={20}
                      height={20}
                      src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/nigeria_icon.svg"
                      alt="AUD"
                    />{" "}
                    Nigerian Naira (NGN)
                  </span>
                }
              />

              <Detail title="Official Rate" value={"1 AUD - 1,250 NGN"} />

              <div className="h-0.5 w-full border-b border-b-grey-1" />
            </div>

            {/* Settlement Details */}
            <div className="mt-8 space-y-5">
              <h2 className="font-bold text-lg text-ink">Settlement Details</h2>
              <div className="space-y-4">
                <Detail
                  title="Settlement Status"
                  value={
                    <>
                      <Badge
                        className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
                        style={{
                          color: statusOptions["Pending"].text,
                          backgroundColor: statusOptions["Pending"].bg,
                        }}
                      >
                        Pending
                      </Badge>
                    </>
                  }
                />
                <Detail title="Settlement Provider" value="Payaza API" />
                <Detail title="Amount Settled" value="NGN 252,134.00" />
                <Detail title="Date Settled" value="2025-06-14 07:09:am" />

                <div className="h-0.5 w-full border-b border-b-grey-1" />
              </div>
            </div>

            {/* Recipient Details */}

            <div className="mt-8 space-y-5">
              <h2 className="font-bold text-lg text-ink">Recipient Details</h2>
              <div className="space-y-4">
                <Detail title="Account Name" value="Judith Dimochukwu" />
                <Detail title="Account Number" value="1749848963" />
                <Detail title="Bank" value="Access Bank" />
                <Detail title="Phone Number" value="N/A" />
                <Detail title="Date Settled" value="2025-06-14 07:09:am" />
                <Detail title="Relationship" value="Sister" />
                <Detail title="Reason for Sending" value="Family Support" />

                <div className="h-0.5 w-full border-b border-b-grey-1" />
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TransactionDetail;
