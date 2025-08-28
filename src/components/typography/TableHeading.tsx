import { cn } from "@/lib/utils";

type TableHeadingProps = {
  text: string;
  className?: string;
};

const TableHeading: React.FC<TableHeadingProps> = ({ text, className }) => {
  return (
    <h2 className={cn(`text-lg text-ink font-bold`, className)}>{text}</h2>
  );
};

export default TableHeading;
