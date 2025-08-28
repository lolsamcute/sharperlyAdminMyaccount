import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import UserProfileTab from "../components/UserProfileTab";
import UserProfileTabTop from "../components/UserProfileTabTop";
import UserTransactionTabTop from "../components/UserTransactionTabTop";
import UserTransactionsTable from "../components/UserTransactionsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserReferralListTable from "../components/UserReferralListTable";
import UserWalletTransactionsTable from "../components/UserWalletTransactionsTable";
import UserWalletTabTop from "../components/UserWalletTabTop";
import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";

const UserTab = () => {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState("User Profile");

  return (
    <section className="space-y-6">
      <div>
        <HeadingOne text="User Management" />
        <BreadCrumb route="all-users" linkName="Users" subRoute={currentTab} />
      </div>

      <UserProfileTabTop />

      <section className="bg-gray-50 px-6 pt-8 pb-12 rounded-lg">
        <Tabs
          defaultValue="User Profile"
          value={currentTab}
          className="w-full"
          onValueChange={setCurrentTab}
        >
          <section className="w-full flex items-center justify-between mb-8">
            <TabsList className="bg-white border border-gray-200 rounded-lg h-14 p-1 flex gap-1">
              <TabsTrigger
                value="User Profile"
                className="text-gray-600 px-6 py-3 text-sm font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:rounded-md transition-all"
              >
                User Profile
              </TabsTrigger>
              <TabsTrigger
                value="Transactions"
                className="text-gray-600 px-6 py-3 text-sm font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:rounded-md transition-all"
              >
                Transactions
              </TabsTrigger>
              <TabsTrigger
                value="Wallet Details"
                className="text-gray-600 px-6 py-3 text-sm font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:rounded-md transition-all"
              >
                Wallet Details
              </TabsTrigger>
              <TabsTrigger
                value="Referrals"
                className="text-gray-600 px-6 py-3 text-sm font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:rounded-md transition-all"
              >
                Referrals
              </TabsTrigger>
            </TabsList>

            <Button
              onClick={() => navigate("/edit-user-profile/1")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2"
            >
              <Icon
                width="16"
                height="16"
                color="#FFFFFF"
                icon="ri:edit-2-line"
              />
              Edit
            </Button>
          </section>

          <section>
            <TabsContent value="User Profile">
              <UserProfileTab />
            </TabsContent>
            <TabsContent value="Transactions">
              <UserTransactionTabTop />
              <UserTransactionsTable />
            </TabsContent>
            <TabsContent value="Wallet Details">
              <UserWalletTabTop />
              <UserWalletTransactionsTable />
            </TabsContent>
            <TabsContent value="Referrals">
              <UserReferralListTable />
            </TabsContent>
          </section>
        </Tabs>
      </section>
    </section>
  );
};

export default UserTab;
