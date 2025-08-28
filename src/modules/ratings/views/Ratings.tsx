import HeadingOne from "@/components/typography/HeadingOne";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RatingsCardInfo from "../components/RatingsCardInfo";
import RatingsTable from "../components/RatingsTable";

const Ratings = () => {
  return (
    <Tabs defaultValue="today" className="w-full">
      <section className="space-y-2.5">
        <section className="flex items-center justify-between">
          <HeadingOne text="Ratings & Feedback" />
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
        </section>
        <RatingsCardInfo />
        <RatingsTable />
      </section>
    </Tabs>
  );
};

export default Ratings;
