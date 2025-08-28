import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  iconBg?: string;
  value: number;
  isDecimal?: boolean;
  sign?: string;
  label: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  value,
  sign,
  label,
  iconBg = "#4700d60d",
  isDecimal = true,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="w-full bg-off-white min-h-27.5 rounded-lg flex gap-4 items-center pl-5">
      <div
        className="size-14 flex items-center justify-center rounded-xxx"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <div className="space-y-1">
        <span className="block font-medium text-2xl text-black">
          {sign}
          {isDecimal ? formatter.format(value) : value}
        </span>
        <span className="block font-semibold text-xs text-cool-slate">
          {label}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
