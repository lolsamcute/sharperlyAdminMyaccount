import { Switch } from "@/components/ui/switch";
import type { ServiceToggle } from "../utils/types";

interface Props {
  toggles: ServiceToggle[];
  onToggle: (value: string) => void;
}

const SystemServicesToggle = ({ toggles, onToggle }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12.5 gap-y-3 w-full max-w-207.5">
      {toggles.map((toggle) => (
        <div
          key={toggle.value}
          className="flex items-center justify-between bg-white rounded-x px-6 h-15 shadow-sm"
        >
          <span className="leading-4.5 text-base text-black/80">
            {toggle.label}
          </span>
          <Switch
            checked={toggle.enabled}
            className="w-10 h-6"
            onCheckedChange={() => onToggle(toggle.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default SystemServicesToggle;
