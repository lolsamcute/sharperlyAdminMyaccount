import { Icon } from "@iconify/react/dist/iconify.js";

import InfoCard from "@/components/common/info-card";
import HeadingOne from "@/components/typography/HeadingOne";

const MoneyTransferCardInfo = () => {
  return (
    <section>
      <HeadingOne text="Money Transfers" />
      <section className="mt-5 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
            <img
              width="16"
              height="16"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754377188/Sharperly%20Admin/smallBidHammer_c3xyeg.svg"
              alt="hammer"
            />
          }
          sign="$"
          value={40492.79}
          label="Total Bidding Transactions"
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
          value={100}
          label="Total Transactions"
        />

        <InfoCard
          icon={
            <>
              <Icon
                width="19"
                height="19"
                icon="ion:time-outline"
                color="var(--color-chart-yellow)"
              />
            </>
          }
          sign="$"
          iconBg="#FFF8E5"
          value={14200.0}
          label="Pending Transactions"
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
          label="Flagged Transactions"
        />
      </section>
    </section>
  );
};

export default MoneyTransferCardInfo;
