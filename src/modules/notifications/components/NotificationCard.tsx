import { Icon } from "@iconify/react";
import type { Notification } from "../utils/types";

interface NotificationCardProps {
  notification: Notification;
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const { icon, color, title, description, dateTime, highlight } = notification;
  return (
    <div
      className={`bg-white flex gap-4 items-start ${
        highlight ? "border-[#F04438] bg-[#FFF3F1]" : ""
      }`}
    >
      <span
        className={`flex items-center justify-center rounded-full w-8 h-8`}
        style={{ background: highlight ? "#FFF3F1" : "#F5F1FC" }}
      >
        {icon && <Icon icon={icon} color={color} width={16} height={16} />}
      </span>
      <div className="flex-1">
        <div className={`font-medium text-sm text-default-text`}>{title}</div>
        <div className="text-sm text-default-text mt-1 leading-5.5 font-medium">
          {description}
        </div>
        <div className="text-sm text-primary-black mt-2 leading-5.5">
          {dateTime}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
