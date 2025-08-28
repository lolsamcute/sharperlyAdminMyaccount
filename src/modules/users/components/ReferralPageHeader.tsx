import HeadingOne from "@/components/typography/HeadingOne";
import { Link } from "react-router-dom";

const ReferralPageHeader = () => {
  return (
    <section>
      <HeadingOne text="User Management" />
      <p className="flex gap-0.5 items-center text-primary text-xs font-semibold">
        <Link to={"/all-users"} className="block">
          Users /
        </Link>
        <span className="text-default-text"> Active Referrals </span>
      </p>
    </section>
  );
};

export default ReferralPageHeader;
