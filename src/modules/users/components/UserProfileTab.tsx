import Detail from "@/components/common/Detail";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserProfileTabTop from "./UserProfileTabTop";

const UserProfileTab = () => {
  return (
    <section className="w-full bg-white rounded-lg p-6">
      {/* User Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
        <Detail
          title="Phone Number"
          value={
            <div className="flex items-center gap-2">
              <img
                width={20}
                height={20}
                alt="Australia flag"
                src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/australia_icon.svg"
              />
              <span className="text-gray-900 text-sm font-medium">
                +61 4 1234 5678
              </span>
            </div>
          }
        />

        <Detail
          title="Email Address"
          value={
            <span className="text-gray-900 text-sm font-medium">
              judithdimokechukwu@gmail.com
            </span>
          }
        />

        <Detail
          title="Date Joined"
          value={
            <span className="text-gray-900 text-sm font-medium">2025-05-27</span>
          }
        />

        <Detail
          title="Date Of Birth"
          value={
            <span className="text-gray-900 text-sm font-medium">1988-05-27</span>
          }
        />

        <Detail
          title="Gender"
          value={
            <span className="text-gray-900 text-sm font-medium">Female</span>
          }
        />

        <Detail
          title="House Address"
          value={
            <span className="text-gray-900 text-sm font-medium">
              27 Koala Crescent, Sunnyvale
            </span>
          }
        />

        <Detail
          title="City"
          value={
            <span className="text-gray-900 text-sm font-medium">Sydney</span>
          }
        />

        <Detail
          title="State"
          value={
            <span className="text-gray-900 text-sm font-medium">
              New South Wales
            </span>
          }
        />

        <Detail
          title="Country"
          value={
            <span className="text-gray-900 text-sm font-medium">Australia</span>
          }
        />

        <Detail
          title="Postal Code"
          value={
            <span className="text-gray-900 text-sm font-medium">2000</span>
          }
        />

        <Detail
          title="IP Address"
          value={
            <span className="text-gray-900 text-sm font-medium">
              192.168.45.123
            </span>
          }
        />

        <Detail
          title="Referral Code"
          value={
            <span className="text-purple-600 text-sm font-medium">REF12345</span>
          }
        />

        <Detail
          title="Send Amount Per Transaction"
          value={
            <span className="text-gray-900 text-sm font-medium">
              $1000 - $1500
            </span>
          }
        />

        <Detail
          title="Last Activity"
          value={
            <span className="text-gray-900 text-sm font-medium">
              2025-05-27 19:25pm
            </span>
          }
        />
      </div>

      {/* Transaction Volume and Wallet Information Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Transaction Volume */}
        <div className="border border-purple-200 rounded-lg p-6 bg-gray-50/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Transaction Volume
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  color="var(--color-primary)"
                  icon="fluent:wallet-credit-card-16-filled"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Wallet Balance
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">
                $5,292.79
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="tdesign:money"
                  color="#10B981"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Referral Balance
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$20</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="ri:star-s-line"
                  color="#F59E0B"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Influencer Referral Balance
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$0</span>
            </div>
          </div>
        </div>

        {/* Wallet Information */}
        <div className="border border-purple-200 rounded-lg p-6 bg-gray-50/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Wallet Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="tdesign:money"
                  color="#10B981"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Total Transactions
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$6000</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="tdesign:money"
                  color="#10B981"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Transaction Today
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$100</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="tdesign:money"
                  color="#10B981"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Transactions This Week
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$300</span>
            </div>

            <div className="flex items-center gap-3">
              <Icon
                width={20}
                height={20}
                icon="tdesign:money"
                color="#10B981"
              />
              <span className="text-gray-700 text-sm font-medium">
                Transactions This Month
              </span>
            </div>
            <span className="text-gray-900 text-lg font-semibold">$1000</span>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon
                  width={20}
                  height={20}
                  icon="tdesign:money"
                  color="#10B981"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Transactions This Year
                </span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">$4000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileTabTop;