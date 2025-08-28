import InfoCard from "@/components/common/info-card";
import { Icon } from "@iconify/react/dist/iconify.js";

const UserWalletTabTop = () => {
  return (
    <section className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
        value={5292.79}
        label="Wallet Balance"
      />
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
        value={4292.79}
        label="Total Fund Amount"
      />
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
        value={1292.79}
        label="Total Withdrawals"
      />
    </section>
  );
};

export default UserWalletTabTop;
