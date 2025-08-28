import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@/components/ui/input";

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationSearch = ({ value, onChange }: LocationSearchProps) => (
  <div className="flex-1 flex items-center bg-stone-100 gap-2 rounded p-1 h-12.5">
    <Icon
      width="16"
      height="16"
      icon="humbleicons:search"
      color="var(--color-gray900)"
    />

    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-xs leading-4 placeholder:text-gray400 border-none shadow-none focus-visible:ring-0 focus-visible:outline-none"
      placeholder="Search"
    />
  </div>
);

export default LocationSearch;
