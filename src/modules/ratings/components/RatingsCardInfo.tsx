import InfoCard from "@/components/common/info-card";
import { Icon } from "@iconify/react";

const RatingsCardInfo = () => {
  return (
    <section className="mt-5 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
      <InfoCard
        icon={
          <Icon
            width="20"
            height="20"
            icon="codicon:feedback"
            color="var(--color-primary)"
          />
        }
        value={10}
        isDecimal={false}
        label="Total Feedback"
      />

      <InfoCard
        icon={
          <Icon
            width="20"
            height="20"
            color="#FFB800"
            icon="iconoir:three-stars"
          />
        }
        value={5.0}
        label="Average Ratings"
      />
    </section>
  );
};

export default RatingsCardInfo;
