import React from "react";
import NotificationCard from "./NotificationCard";
import { notificationsData } from "../utils/constants";

const NotificationsList = () => {
  return (
    <section className="w-full bg-white rounded-xl">
      {notificationsData.map((notification, index) => (
        <React.Fragment key={notification.id}>
          <div className="py-5 px-4.5">
            <NotificationCard
              notification={notification}
            />
          </div>
          {notificationsData.length - 1 !== index && (
            <hr className="h-0.5 border-b border-b-[#FFF8F8]" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default NotificationsList;
