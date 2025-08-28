import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../ui/input";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";

const TableSearchFilterReport = () => {
  return (
    <section className="flex gap-6 items-center">
      <div className="flex-1 flex items-center bg-stone-100 gap-2 rounded p-1 h-12.5">
        <Icon
          width="16"
          height="16"
          icon="humbleicons:search"
          color="var(--color-gray900)"
        />

        <Input className="text-xs leading-4 placeholder:text-gray400 border-none shadow-none focus-visible:ring-0 focus-visible:outline-none" />
      </div>

      <div className="flex items-center gap-4 p-4 rounded border border-light-stone bg-stone-100 h-12.5">
        <SlidersHorizontal size={16} color="var(--color-primary)" />

        <div className="flex items-center gap-8">
          <span className="text-gray-deep text-[11px] font-bold block">
            Filter
          </span>

          <ChevronDown size={7} color="var(--color-default-text)" />
        </div>
      </div>

      <Button className="bg-primary hover:bg-primary rounded-x flex items-center gap-1 py-2 px-4 h-12.5">
        <Icon color="#fff" icon="ri:download-2-line" width="20" height="20" />

        <span className="block text-white font-medium text-x">
          Download Report
        </span>
      </Button>
    </section>
  );
};

export default TableSearchFilterReport;
