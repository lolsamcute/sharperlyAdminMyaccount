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
    <div className="w-full bg-white min-h-24 rounded-lg flex gap-4 items-center p-4 border border-gray-100 shadow-sm">
      <div
        className="size-12 flex items-center justify-center rounded-lg"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <div className="space-y-1">
        <span className="block font-semibold text-xl text-gray-900">
          {sign}
          {isDecimal ? formatter.format(value) : value}
        </span>
        <span className="block font-medium text-sm text-gray-600">
          {label}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
