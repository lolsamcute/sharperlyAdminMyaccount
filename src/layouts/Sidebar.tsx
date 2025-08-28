import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

type SubRoute = {
  name: string;
  path: string;
  icon: string;
};

type SidebarLink = {
  name: string;
  path: string;
  icon: string;
  badge?: string;
  hasArrow?: boolean;
  subroute?: SubRoute[];
};

const sidebarNavLinks: SidebarLink[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "material-symbols:dashboard-rounded",
  },
  {
    name: "Users",
    path: "",
    icon: "lucide:users",
    badge: "500",
    hasArrow: true,
    subroute: [
      { name: "All Users", path: "/all-users", icon: "lucide:users" },
      { name: "Referrals", path: "/referrals", icon: "charm:person" },
      { name: "User Analytics", path: "/user-analytics", icon: "picon:chart" },
      {
        name: "Verifications",
        path: "/verifications",
        icon: "uiw:verification",
      },
    ],
  },
  {
    name: "Wallets",
    path: "/wallets",
    icon: "fluent:wallet-credit-card-16-filled",
  },
  {
    name: "Transactions",
    path: "",
    icon: "hugeicons:transaction-history",
    hasArrow: true,
    subroute: [
      {
        name: "All Transactions",
        path: "/all-transactions",
        icon: "hugeicons:transaction-history",
      },
      {
        name: "Money Transfers",
        path: "/money-transfers",
        icon: "charm:person",
      },
      {
        name: "Bill Payment",
        path: "/bill-payment",
        icon: "hugeicons:payment-02",
      },
      {
        name: "Wallet Funding",
        path: "/wallet-funding",
        icon: "fluent:wallet-credit-card-16-filled",
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: "picon:chart",
      },
      {
        name: "Top Users",
        path: "/top-users",
        icon: "iconoir:user-star",
      },
    ],
  },
  { name: "Rates", path: "/rates", icon: "mage:money-exchange" },
  { name: "BDC Operators", path: "/bdc-operators", icon: "mynaui:users-group" },
  { name: "Location", path: "/location", icon: "lsicon:location-outline" },
  {
    name: "Notifications",
    path: "/notifications",
    icon: "clarity:notification-line",
  },
  { name: "Ratings & Feedback", path: "/ratings", icon: "custom-ratings-icon" },
  {
    name: "Broadcasting",
    path: "",
    icon: "ri:broadcast-line",
    hasArrow: true,
    subroute: [
      {
        name: "Campaigns",
        path: "/campaigns",
        icon: "streamline-plump:announcement-megaphone-solid",
      },
      {
        name: "Push Notification",
        path: "/push-notification",
        icon: "clarity:notification-line",
      },
      {
        name: "Dashboard Dialogue",
        path: "/dashboard-dialogue",
        icon: "mdi:dialogue-outline",
      },
      {
        name: "Bulk Email",
        path: "/bulk-email",
        icon: "material-symbols:mail-outline",
      },
      {
        name: "Banners",
        path: "/banners",
        icon: "mi:image",
      },
    ],
  },
  { name: "Audit Logs", path: "/audit-logs", icon: "picon:chart" },
  {
    name: "Settings",
    path: "/settings",
    icon: "material-symbols:settings-outline",
  },
];

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <aside className="bg-white w-full fixed max-w-71.5 pl-13 pt-5 font-poppins flex flex-col h-screen">
      {/* Header */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-5.5 pl-2.5 h-20">
          <img
            width={137}
            height={32}
            src="https://res.cloudinary.com/sharperly/image/upload/v1753796693/Sharperly%20Admin/sharperlyLogo_lvxbty.svg"
            alt="sharperly-logo"
          />
          <img
            width={20}
            height={14}
            src="https://res.cloudinary.com/sharperly/image/upload/v1753796927/Sharperly%20Admin/hamburger_hcnvqd.svg"
            alt="hamburger"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow space-y-1 mt-1.5 pr-4 overflow-y-auto hide-scrollbar">
        {sidebarNavLinks.map((link) => {
          // Case 1: The link has sub-routes (it's a dropdown menu)
          if (link.subroute) {
            const isOpen = openMenu === link.name;
            return (
              <div key={link.name}>
                {/* This div acts as the clickable button to toggle the menu */}
                <div
                  className="flex items-center gap-4 h-12.5 w-full px-4 rounded-md cursor-pointer"
                  onClick={() => handleMenuToggle(link.name)}
                >
                  <Icon
                    width="18"
                    height="18"
                    icon={link.icon}
                    color="var(--color-black-1)"
                  />
                  <span className="font-semibold text-sm text-black-1">
                    {link.name}
                  </span>

                  {/* Right-aligned items: Badge and Arrow */}
                  <div className="ml-auto flex items-center gap-2">
                    {link.badge && (
                      <Badge className="w-6.5 h-5.5 rounded-md text-[9px] p-2.5 bg-primary">
                        {link.badge}
                      </Badge>
                    )}
                    {link.hasArrow && (
                      <Icon
                        width="24"
                        height="24"
                        icon="weui:arrow-filled"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                        color="var(--color-primary)"
                      />
                    )}
                  </div>
                </div>

                {/* Collapsible Sub-menu: Renders only if 'isOpen' is true */}
                {isOpen && (
                  <div className="pt-2 pl-3 pb-1 space-y-1">
                    {link.subroute.map((subLink) => (
                      <NavLink
                        key={subLink.name}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `flex items-center gap-4 h-12.5 w-full px-4 ${
                            isActive
                              ? "bg-lavender-light border-l-2 border-l-primary"
                              : "border-l-2 border-transparent"
                          }`
                        }
                      >
                        {({ isActive }) => {
                          const activeColor = "var(--color-primary)";
                          const defaultColor = "var(--color-black-1)";
                          const iconColor = isActive
                            ? activeColor
                            : defaultColor;

                          return (
                            <>
                              <Icon
                                width="18"
                                height="18"
                                icon={subLink.icon}
                                color={iconColor}
                              />

                              {/* Text */}
                              <span
                                className={`font-semibold text-sm ${
                                  isActive ? "text-primary" : "text-black-1"
                                }`}
                              >
                                {subLink.name}
                              </span>
                            </>
                          );
                        }}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // Case 2: The link is a standard navigation link
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 h-12.5 w-full px-4 ${
                  isActive
                    ? "bg-lavender-light border-l-2 border-l-primary"
                    : "border-l-2 border-transparent"
                }`
              }
            >
              {({ isActive }) => {
                const activeColor = "var(--color-primary)";
                const defaultColor = "var(--color-black-1)";
                const iconColor = isActive ? activeColor : defaultColor;

                return (
                  <>
                    {/* Special Icon for Ratings & Feedback */}
                    {link.icon === "custom-ratings-icon" ? (
                      <div className="inline-flex items-center flex-col">
                        <Icon
                          width="10"
                          height="10"
                          icon="material-symbols-light:star-rate-outline"
                          color={iconColor}
                        />
                        <div className="inline-flex">
                          <Icon
                            width="10"
                            height="10"
                            icon="material-symbols-light:star-rate-outline"
                            color={iconColor}
                          />
                          <Icon
                            width="10"
                            height="10"
                            icon="material-symbols-light:star-rate-outline"
                            color={iconColor}
                          />
                        </div>
                      </div>
                    ) : (
                      // Default Icon
                      <Icon
                        width="18"
                        height="18"
                        icon={link.icon}
                        color={iconColor}
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`font-semibold text-sm ${
                        isActive ? "text-primary" : "text-black-1"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Badge (if any) */}
                    {link.badge && (
                      <Badge className="w-6.5 h-5.5 rounded-md text-[9px] p-2.5 bg-primary">
                        {link.badge}
                      </Badge>
                    )}
                  </>
                );
              }}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="flex-shrink-0">
        <div className="mt-6 h-14.5 pl-5 flex items-center">
          <span className="text-[7px] text-black-1 font-semibold block w-full max-w-30">
            Sharperly Admin Dashboard 2025 All Rights Reserved
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
