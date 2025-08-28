import { Icon } from "@iconify/react/dist/iconify.js";

import InfoCard from "@/components/common/info-card";

const ReferralCardInfo = () => {
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
        value={50}
        isDecimal={false}
        label="Total Referrals"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="19"
              height="19"
              icon="ix:success"
              color="var(--color-primary)"
            />
          </>
        }
        sign="$"
        value={200}
        label="Total Bonus Paid"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="20"
              height="20"
              color="var(--color-primary)"
              icon="mdi:account-pending-outline"
            />
          </>
        }
        value={9}
        isDecimal={false}
        label="Pending KYC"
      />
    </section>
  );
};

export default ReferralCardInfo;
