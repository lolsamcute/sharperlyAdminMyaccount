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
    <section className="space-y-8">
      <div>
        <HeadingOne text="User Management" />
        <BreadCrumb route="all-users" linkName="Users" subRoute={currentTab} />
      </div>

      {currentTab === "User Profile" && <UserProfileTabTop />}
      {currentTab === "Transactions" && <UserTransactionTabTop />}
      {currentTab === "Referrals" && <UserProfileTabTop />}
      {currentTab === "Wallet Details" && <UserWalletTabTop />}

      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg">
        <Tabs
          defaultValue="User Profile"
          value={currentTab}
          className="w-full"
          onValueChange={setCurrentTab}
        >
          <section className="w-full flex items-center gap-8">
            <TabsList className="w-full flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
              <TabsTrigger
                value="User Profile"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                User Profile
              </TabsTrigger>
              <TabsTrigger
                value="Transactions"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Transactions
              </TabsTrigger>
              <TabsTrigger
                value="Wallet Details"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Wallet Details
              </TabsTrigger>
              <TabsTrigger
                value="Referrals"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Referrals
              </TabsTrigger>
            </TabsList>

            <Button
              onClick={() => navigate("/edit-user-profile/1")}
              className="bg-primary hover:bg-primary py-2 px-4 rounded w-full max-w-30 h-12.5 !text-white font-medium text-x flex gap-1 items-center justify-center cursor-pointer"
            >
              <Icon
                width="12"
                height="12"
                color="#FFFFFF"
                icon="ri:edit-2-line"
              />
              <span className="block"> Edit </span>
            </Button>
          </section>

          <section className="mt-7">
            <TabsContent value="User Profile" className="pl-10">
              <UserProfileTab />
            </TabsContent>
            <TabsContent value="Transactions">
              <UserTransactionsTable />
            </TabsContent>
            <TabsContent value="Wallet Details">
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
