import { Icon } from "@iconify/react/dist/iconify.js";

import InfoCard from "@/components/common/info-card";

const BillPaymentCardInfo = () => {
  return (
    <section>
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
          label="Total Bil Payment"
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
          label="Airtime (MTN)"
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
          label="Airtime (Glo)"
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
          label="Airtime (Airtel)"
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
          label="Data Bundle (MTN)"
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
          label="Data Bundle (Glo)"
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
          value={100}
          label="Data Bundle (Airtel)"
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
          value={100}
          label="Electricity"
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
          value={100}
          label="Cable TV"
        />
      </section>
    </section>
  );
};

export default BillPaymentCardInfo;
