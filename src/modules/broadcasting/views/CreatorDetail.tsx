import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreatorProfileTop from "../components/CreatorProfileTop";
import CreatorProfileTab from "../components/CreatorProfileTab";
import ReferralsListTable from "../components/ReferralsListTable";

const CreatorDetail = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("Creator Profile");

  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Campaigns" />
        <BreadCrumb
          route="campaigns"
          linkName="Campaigns"
          subRoute={currentTab}
        />
      </div>

      <CreatorProfileTop />

      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg w-full">
        <Tabs
          defaultValue="Creator Profile"
          value={currentTab}
          className="w-full"
          onValueChange={setCurrentTab}
        >
          <section className="w-full flex items-center gap-8">
            <TabsList className="w-full flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary max-w-85">
              <TabsTrigger
                value="Creator Profile"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Creator Profile
              </TabsTrigger>
              <TabsTrigger
                value="Referrals"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Referrals
              </TabsTrigger>
            </TabsList>

            <Button
              onClick={() => navigate("/campaigns/edit-creator/1")}
              className="bg-primary hover:bg-primary py-2 px-4 rounded w-full max-w-30 h-12.5 !text-white font-medium text-x flex gap-1 items-center justify-center cursor-pointer"
            >
              <Icon
                width="12"
                height="12"
                color="#FFFFFF"
                icon="ri:edit-2-line"
              />
              <span className="block">Edit</span>
            </Button>
          </section>

          <section className="mt-7">
            <TabsContent value="Creator Profile" className="pl-10">
              <CreatorProfileTab />
            </TabsContent>
            <TabsContent value="Referrals">
              <ReferralsListTable />
            </TabsContent>
          </section>
        </Tabs>
      </section>
    </section>
  );
};

export default CreatorDetail;
