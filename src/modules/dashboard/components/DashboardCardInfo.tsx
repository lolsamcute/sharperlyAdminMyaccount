import InfoCard from "@/components/common/info-card";
import { Icon } from "@iconify/react/dist/iconify.js";

const DashboardCardInfo = () => {
  return (
    <section className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
      <InfoCard
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="icon-park-twotone:view-list"
          />
        }
        sign="$"
        value={514292.79}
        label="Total Transactions"
      />
      <InfoCard
        sign="$"
        value={14292.79}
        label="Transactions Today"
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="icon-park-twotone:view-list"
          />
        }
      />
      <InfoCard
        sign="$"
        value={104292.79}
        label="Transactions This Month"
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="icon-park-twotone:view-list"
          />
        }
      />
      <InfoCard
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="mdi:gavel"
          />
        }
        sign="$"
        value={51292.79}
        label="Total Bid Transactions"
      />
      <InfoCard
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="fluent:wallet-credit-card-16-filled"
          />
        }
        sign="$"
        value={54292.79}
        label="Active Wallet Balance"
      />
      <InfoCard
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="mdi:receipt"
          />
        }
        sign="$"
        value={292.79}
        label="Bill Payment (MTN)"
      />
      <InfoCard
        icon={
          <Icon
            width="18"
            height="18"
            color="var(--color-primary)"
            icon="mdi:receipt"
          />
        }
        sign="$"
        value={392.79}
        label="Bill Payment (Glo)"
      />
      <InfoCard
        icon={
          <Icon
            width="20"
            height="20"
            icon="ri:user-follow-line"
            color="var(--color-primary)"
          />
        }
        value={30}
        isDecimal={false}
        label="Signups Today"
      />
    </section>
  );
};

export default DashboardCardInfo;
