import HeadingOne from "@/components/typography/HeadingOne";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserAnalyticsCardInfo from "../components/UserAnalyticsCardInfo";
import { SignupTrendsChart } from "../components/SignupTrendsChart";

const UserAnalytics = () => {
  return (
    <Tabs defaultValue="today" className="w-full">
      <section className="space-y-4">
        <section className="flex items-center justify-between">
          <HeadingOne text="User Analytics" />

          <div className="flex gap-8 items-center">
            <TabsList className="space-x-2.5 rounded-md h-10 overflow-clip bg-faint-lavender border-[0.5px] border-light-violet w-full max-w-45">
              <TabsTrigger
                value="monthly"
                className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="weekly"
                className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="today"
                className="text-default-text text-viii data-[state=active]:shadow-none w-16 flex justify-center h-6 items-center data-[state=active]:bg-off-white data-[state=active]:border data-[state=active]:border-misty-blue data-[state=active]:rounded-md data-[state=active]:text-medium-charcoal font-bold data-[state=active]:font-bold"
              >
                Today
              </TabsTrigger>
            </TabsList>

            <Button className="w-full max-w-41.5 rounded-x border-[1.5px] border-primary bg-white hover:bg-white h-10 py-2 px-4 flex justify-center items-center gap-1">
              <Icon
                width="24"
                height="24"
                icon="ri:file-pdf-2-line"
                color="var(--color-primary)"
              />
              <span className="text-primary text-x font-medium">
                Generate Report
              </span>
            </Button>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <TabsContent value="monthly">
              <UserAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="weekly">
              <UserAnalyticsCardInfo />
            </TabsContent>
            <TabsContent value="today">
              <UserAnalyticsCardInfo />
            </TabsContent>
          </div>

          <section className="flex gap-8">
            <section className="bg-white rounded-x pt-9 pb-4 px-4 space-y-9 w-[44.41%]">
              <div className="text-center">
                <h4 className="text-content-primary leading-6 font-semibold text-base -tracking-[1%]">
                  Online User
                </h4>
                <p className="text-content-secondary text-xs leading-5.5 tracking-[1%]">
                  Monitor the activities of users
                </p>
              </div>

              <section className="grid grid-cols-2 gap-x-2 gap-y-4 w-full max-w-82 mx-auto">
                <div className="p-5 space-y-1 bg-primary3 rounded-lg">
                  <span className="block font-medium text-base text-charcoal">
                    20
                  </span>
                  <span className="block font-semibold text-xs text-cool-slate">
                    Online Now
                  </span>
                </div>
                <div className="p-5 space-y-1 bg-primary3 rounded-lg">
                  <span className="block font-medium text-base text-charcoal">
                    30
                  </span>
                  <span className="block font-semibold text-xs text-cool-slate">
                    Online Today
                  </span>
                </div>
                <div className="p-5 space-y-1 bg-primary3 rounded-lg">
                  <span className="block font-medium text-base text-charcoal">
                    40
                  </span>
                  <span className="block font-semibold text-xs text-cool-slate">
                    This Week
                  </span>
                </div>
                <div className="p-5 space-y-1 bg-primary3 rounded-lg">
                  <span className="block font-medium text-base text-charcoal">
                    300
                  </span>
                  <span className="block font-semibold text-xs text-cool-slate">
                    This Month
                  </span>
                </div>
              </section>
            </section>

            <section className="w-full flex-1">
              <SignupTrendsChart />
            </section>
          </section>
        </section>
      </section>
    </Tabs>
  );
};

export default UserAnalytics;
