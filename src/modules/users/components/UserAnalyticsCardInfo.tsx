import { Icon } from "@iconify/react/dist/iconify.js";

import InfoCard from "@/components/common/info-card";
import { Volume2 } from "lucide-react";

const UserAnalyticsCardInfo = () => {
  return (
    <section className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              icon="lucide:users"
              color="var(--color-primary)"
            />
          </>
        }
        isDecimal={false}
        value={5000}
        label="Total Users"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              icon="ri:user-follow-line"
              color="var(--color-primary)"
            />
          </>
        }
        isDecimal={false}
        value={30}
        label="New Signups"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              color="var(--color-chart-yellow)"
              icon="mdi:account-pending-outline"
            />
          </>
        }
        isDecimal={false}
        value={9}
        iconBg="#FFF8E5"
        label="Pending KYC"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              color="var(--color-red2)"
              icon="lsicon:suspend-outline"
            />
          </>
        }
        isDecimal={false}
        value={5}
        iconBg="#FFDDDE80"
        label="Suspended Accounts"
      />

      <InfoCard
        icon={
          <>
            <Volume2 size={15} color="var(--color-primary)" />
          </>
        }
        isDecimal={false}
        value={15}
        label="Active Referral"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              icon="proicons:flag"
              color="var(--color-red2)"
            />
          </>
        }
        value={9}
        iconBg="#FFDDDE80"
        isDecimal={false}
        label="Flagged Accounts"
      />
    </section>
  );
};

export default UserAnalyticsCardInfo;
