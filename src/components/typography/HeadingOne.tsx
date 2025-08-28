import { cn } from "@/lib/utils";

type HeadingOneProps = {
  text: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingOne: React.FC<HeadingOneProps> = ({
  text,
  className,
  level = 1,
}) => {
  const Tag: React.ElementType = `h${level}`;
  return (
    <Tag className={cn("text-heading-1 text-xl font-semibold", className)}>
      {text}
    </Tag>
  );
};

export default HeadingOne;
