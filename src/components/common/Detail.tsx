import type { ReactNode } from "react";

type DetailProps = {
  title: string;
  value: ReactNode;
};

const Detail: React.FC<DetailProps> = ({ title, value }) => {
  return (
    <div className="flex items-center gap-24">
      <span className="block text-secondary-black text-sm w-full max-w-40">
        {title}
      </span>

      <div className="text-black-1 text-sm">{value}</div>
    </div>
  );
};

export default Detail;
