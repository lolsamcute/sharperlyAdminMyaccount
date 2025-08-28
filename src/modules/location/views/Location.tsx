import { useState } from "react";
import HeadingOne from "@/components/typography/HeadingOne";
import LocationTabs, { type LocationTabType } from "../components/LocationTabs";
import LocationSearch from "../components/LocationSearch";
import { DataTable } from "@/components/common/DataTable";
import {
  regionRecords,
  countryRecords,
  stateRecords,
} from "../utils/constants";
import { regionTableColumn } from "../components/RegionTableColumn";
import { countryTableColumn } from "../components/CountryTableColumn";
import { stateTableColumn } from "../components/StateTableColumn";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<LocationTabType>("region");
  const [search, setSearch] = useState("");

  // Filter logic for each table
  const filteredRegion = regionRecords.filter((r) =>
    r.regionName.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCountry = countryRecords.filter((c) =>
    c.countryName.toLowerCase().includes(search.toLowerCase())
  );
  const filteredState = stateRecords.filter((s) =>
    s.stateName.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigateToStateOrCountry = () => {
    if (activeTab === "country") {
      navigate("/location/create/country");
    } else if (activeTab === "state") {
      navigate("/location/create/state");
    } else if (activeTab === "region") {
      navigate("/location/create/region");
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <HeadingOne text="Location" />
        <Button
          onClick={handleNavigateToStateOrCountry}
          className="bg-primary hover:bg-primary w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base"
        >
          <Icon icon="ci:add-plus" width="20" height="20" color="#fff" /> Add{" "}
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </Button>
      </div>
      <section className="bg-white rounded-x p-4 space-y-8">
        <div className="flex gap-27.5 items-center">
          <div>
            <LocationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <LocationSearch value={search} onChange={setSearch} />
        </div>
        {activeTab === "region" && (
          <DataTable data={filteredRegion} columns={regionTableColumn} />
        )}
        {activeTab === "country" && (
          <DataTable data={filteredCountry} columns={countryTableColumn} />
        )}
        {activeTab === "state" && (
          <DataTable data={filteredState} columns={stateTableColumn} />
        )}
      </section>
    </section>
  );
};

export default Location;
