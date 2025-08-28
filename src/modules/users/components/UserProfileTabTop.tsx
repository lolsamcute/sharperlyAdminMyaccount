import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronDown } from "lucide-react";

const UserProfileTabTop = () => {
  const userData = {
    name: "Judith Dimochukwu",
    role: "Project Manager",
    walletBalance: 5292.79,
    referralBalance: 292.79,
    profileCompletion: 95,
    accountStatus: "Active",
    kycStatus: "Approved",
  };

  return (
    <section className="bg-white px-6 py-8 rounded-lg border border-gray-100 shadow-sm">
      {/* User Header Section */}
      <div className="flex items-start justify-between mb-8">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full flex items-center justify-center">
            <Icon width="32" height="32" color="#FFFFFF" icon="ri:user-line" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {userData.name}
            </h2>
            <p className="text-sm text-gray-600">{userData.role}</p>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="flex items-center gap-6">
          {/* Wallet Balance */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
              <Icon
                width={20}
                height={20}
                color="var(--color-primary)"
                icon="fluent:wallet-credit-card-16-filled"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-900">
                ${userData.walletBalance.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Wallet Balance</div>
            </div>
          </div>

          {/* Referral Balance */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
              <Icon
                width={20}
                height={20}
                color="var(--color-primary)"
                icon="charm:person"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-900">
                ${userData.referralBalance}
              </div>
              <div className="text-sm text-gray-600">Referral Balance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Cards Row */}
      <div className="flex items-center gap-6 mb-8">
        {/* Profile Completion */}
        <div className="flex-1 max-w-48 h-20 border border-purple-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-purple-50/30">
          <span className="text-2xl font-semibold text-gray-900">
            {userData.profileCompletion}%
          </span>
          <span className="text-sm font-medium text-gray-600">
            Profile Completion
          </span>
        </div>

        {/* Account Status */}
        <div className="flex-1 max-w-48 h-20 border border-purple-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-purple-50/30">
          <Badge className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm font-medium">
            {userData.accountStatus}
          </Badge>
          <span className="text-sm font-medium text-gray-600">
            Account Status
          </span>
        </div>

        {/* KYC Status */}
        <div className="flex-1 max-w-48 h-20 border border-purple-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-purple-50/30">
          <Badge className="bg-green-100 text-green-700 border border-green-300 px-4 py-1 rounded-md text-sm font-medium">
            {userData.kycStatus}
          </Badge>
          <span className="text-sm font-medium text-gray-600">KYC Status</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="border border-red-300 text-red-600 bg-white hover:bg-red-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
        >
          Deactivate
          <ChevronDown size={16} />
        </Button>

        <Button
          variant="outline"
          className="border border-blue-300 text-blue-600 bg-white hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
        >
          <Icon
            width="16"
            height="16"
            color="currentColor"
            icon="fluent:wallet-credit-card-16-filled"
          />
          Fund Wallet
        </Button>

        <Button
          variant="outline"
          className="border border-red-300 text-red-600 bg-white hover:bg-red-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
        >
          <Icon
            width="16"
            height="16"
            icon="ri:delete-bin-6-line"
            color="currentColor"
          />
          Delete
        </Button>

        <Button
          variant="outline"
          className="border border-purple-300 text-purple-600 bg-white hover:bg-purple-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
        >
          <Icon
            width="16"
            height="16"
            color="currentColor"
            icon="clarity:notification-line"
          />
          Send Notification
        </Button>
      </div>
    </section>
  );
};

export default UserProfileTabTop;