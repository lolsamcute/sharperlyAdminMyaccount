import Detail from "@/components/common/Detail";
import { Icon } from "@iconify/react/dist/iconify.js";

const UserProfileTab = () => {
  return (
    <section className="w-full">
      <section className="space-y-4">
        <Detail
          title="Phone Number"
          value={
            <div className="flex items-center gap-2.5">
              <img
                width={20}
                height={20}
                alt="country"
                src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/australia_icon.svg"
              />
              <span className="block text-black-1 text-sm">
                +61 4 1234 5678
              </span>
            </div>
          }
        />
        {/* <div className="flex items-center gap-24">
          <span className="block text-secondary-black text-sm w-full max-w-28">
            Phone Number
          </span>
          <div className="flex items-center gap-2.5">
            <img
              width={20}
              height={20}
              alt="country"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/australia_icon.svg"
            />
            <span className="block text-black-1 text-sm">+61 4 1234 5678</span>
          </div>
        </div> */}

        <Detail
          title="Email Address"
          value={
            <span className="block text-black-1 text-sm">
              judithdimokechukwu@gmail.com
            </span>
          }
        />

        <Detail
          title="Date Joined"
          value={<span className="block text-black-1 text-sm">2025-05-27</span>}
        />

        <Detail
          title="Date Of Birth"
          value={<span className="block text-black-1 text-sm">2025-05-27</span>}
        />

        <Detail
          title="Gender"
          value={<span className="block text-black-1 text-sm">Female</span>}
        />

        <Detail
          title="House Address"
          value={
            <span className="block text-black-1 text-sm">
              27 Koala Crescent, Sunnyvale
            </span>
          }
        />

        <Detail
          title="City"
          value={<span className="block text-black-1 text-sm">Sydney</span>}
        />

        <Detail
          title="State"
          value={
            <span className="block text-black-1 text-sm">New South Wales</span>
          }
        />

        <Detail
          title="Country"
          value={<span className="block text-black-1 text-sm">Australia</span>}
        />

        <Detail
          title="Postal Code"
          value={<span className="block text-black-1 text-sm">2000</span>}
        />

        <Detail
          title="IP Address"
          value={
            <span className="block text-black-1 text-sm">192.168.45.123</span>
          }
        />

        <Detail
          title="Referral Code"
          value={<span className="block text-primary text-sm">REF12345</span>}
        />

        <Detail
          title="Send Amount Per Transaction"
          value={
            <span className="block text-black-1 text-sm">$1000 - $1500 </span>
          }
        />

        <Detail
          title="Last Activity"
          value={
            <span className="block text-black-1 text-sm">
              2025-05-27 19:25pm
            </span>
          }
        />
      </section>

      <section className="flex gap-4 mt-17">
        <div className="w-[47.5%] border border-highlight-purple px-4 py-5 rounded-lg space-y-8">
          <h3 className="text-lg font-semibold text-charcoal">
            Transaction Volume
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width={16}
                  height={16}
                  color="var(--color-primary)"
                  icon="fluent:wallet-credit-card-16-filled"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Wallet Balance
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $5,292.79
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Referral Balance
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $20
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="ri:star-s-line"
                  color="var(--color-yellow2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Influencer Referral Balance
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $0
              </span>
            </div>
          </div>
        </div>

        <div className="w-[47.5%] border border-highlight-purple px-4 py-5 rounded-lg space-y-8">
          <h3 className="text-lg font-semibold text-charcoal">
            Wallet Information
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Total Transactions
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $6000
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Transactions Today
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $20
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Transactions This Week
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $20
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Transactions This Month
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $2000
              </span>
            </div>

            <div className="flex justify-between items-center border border-grey-1 px-2 h-10 rounded-lg">
              <div className="flex gap-2 items-center">
                <Icon
                  width="16"
                  height="16"
                  icon="tdesign:money"
                  color="var(--color-green2)"
                />
                <span className="text-secondary-black text-xs font-medium block">
                  Transactions This Year
                </span>
              </div>

              <span className="block text-secondary-black text-lg font-medium">
                $30020
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfileTab;
