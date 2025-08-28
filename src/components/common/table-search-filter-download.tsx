import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../ui/input";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";

const TableSearchFilterReport = () => {
  return (
    <section className="flex gap-6 items-center">
      <div className="flex-1 flex items-center bg-gray-50 gap-2 rounded-lg px-3 py-2 h-10 border border-gray-200">
        <Icon
          width="16"
          height="16"
          icon="humbleicons:search"
          color="#9CA3AF"
        />

        <Input 
          placeholder="Search"
          className="text-sm leading-4 placeholder:text-gray-400 border-none shadow-none focus-visible:ring-0 focus-visible:outline-none bg-transparent" 
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 h-10">
        <SlidersHorizontal size={16} color="#6366F1" />

        <div className="flex items-center gap-8">
          <span className="text-gray-700 text-sm font-medium block">
            Filter
          </span>

          <ChevronDown size={12} color="#6B7280" />
        </div>
      </div>

      <Button className="bg-primary hover:bg-primary/90 rounded-lg flex items-center gap-2 py-2 px-4 h-10">
        <Icon color="#fff" icon="ri:download-2-line" width="16" height="16" />

        <span className="block text-white font-medium text-sm">
          Download Report
        </span>
      </Button>
    </section>
  );
};

export default TableSearchFilterReport;
