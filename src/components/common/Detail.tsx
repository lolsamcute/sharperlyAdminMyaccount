import type { ReactNode } from "react";

type DetailProps = {
  title: string;
  value: ReactNode;
};

const Detail: React.FC<DetailProps> = ({ title, value }) => {
  return (
    <div className="flex items-start gap-8">
      <span className="block text-gray-600 text-sm font-medium w-32 flex-shrink-0">
        {title}
      </span>

      <div className="flex-1">{value}</div>
    </div>
  );
};

export default Detail;
