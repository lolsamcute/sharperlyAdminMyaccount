import { Link } from "react-router-dom";

type BreadCrumbProps = {
  route: string;
  linkName: string;
  subRoute: React.ReactNode;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  route,
  linkName,
  subRoute,
}) => {
  return (
    <section>
      <p className="flex gap-0.5 items-center text-primary text-xs font-semibold">
        <Link to={`/${route}`} className="block">
          {linkName} /
        </Link>
        <span className="text-default-text"> {subRoute} </span>
      </p>
    </section>
  );
};

export default BreadCrumb;
