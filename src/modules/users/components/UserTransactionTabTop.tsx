import InfoCard from "@/components/common/info-card";
import { Icon } from "@iconify/react/dist/iconify.js";

const UserTransactionTabTop = () => {
  return (
    <section className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
        label="This Month"
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
        value={514292.79}
        label="This Week"
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
        value={514292.79}
        label="Yesterday"
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
        value={514292.79}
        label="Today"
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
        isDecimal={false}
        value={9}
        label="Total Transaction"
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
        isDecimal={false}
        value={4}
        label="This Month"
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
        isDecimal={false}
        value={2}
        label="This Week"
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
        isDecimal={false}
        value={1}
        label="Today"
      />
    </section>
  );
};

export default UserTransactionTabTop;
