import { Icon } from "@iconify/react/dist/iconify.js";
import InfoCard from "@/components/common/info-card";

const WalletCardInfo = () => {
  return (
    <section className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <InfoCard
        icon={
          <>
            <Icon
              width="18"
              height="18"
              color="var(--color-primary)"
              icon="icon-park-twotone:view-list"
            />
          </>
        }
        isDecimal={false}
        value={30}
        label="Active Wallets"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="18"
              height="18"
              color="var(--color-primary)"
              icon="icon-park-twotone:view-list"
            />
          </>
        }
        isDecimal={false}
        value={30}
        label="Total Wallet Transactions"
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
        value={24262.49}
        label="Total Wallet Balance"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="19"
              height="19"
              icon="ion:time-outline"
              color="var(--color-primary)"
            />
          </>
        }
        sign="$"
        value={24262.49}
        label="Total Deposits"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="19"
              height="19"
              icon="ion:time-outline"
              color="var(--color-primary)"
            />
          </>
        }
        sign="$"
        value={14200.0}
        label="Total Withdrawals"
      />

      <InfoCard
        icon={
          <>
            <Icon
              width="19"
              height="19"
              icon="ion:time-outline"
              color="var(--color-primary)"
            />
          </>
        }
        sign="$"
        value={1200.0}
        label="Total Refunds"
      />
    </section>
  );
};

export default WalletCardInfo;
