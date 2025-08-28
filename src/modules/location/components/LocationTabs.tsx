import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type LocationTabType = "region" | "country" | "state";

interface LocationTabsProps {
  activeTab: LocationTabType;
  onTabChange: (tab: LocationTabType) => void;
}

const LocationTabs = ({ activeTab, onTabChange }: LocationTabsProps) => (
  <Tabs
    value={activeTab}
    onValueChange={(value) => onTabChange(value as LocationTabType)}
    className="w-full"
  >
    <TabsList className="w-full max-w-xs flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
      <TabsTrigger
        value="region"
        className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
      >
        Region
      </TabsTrigger>
      <TabsTrigger
        value="country"
        className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
      >
        Country
      </TabsTrigger>
      <TabsTrigger
        value="state"
        className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
      >
        State
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export default LocationTabs;
