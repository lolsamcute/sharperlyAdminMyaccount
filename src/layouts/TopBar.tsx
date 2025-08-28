import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TopBar = () => {
  return (
    <section className="w-full flex items-center justify-between pl-9 pr-3 h-25.5">
      <section className="flex items-end gap-12.5">
        <div className="flex items-center justify-between bg-primary-4 border border-light-violet rounded px-5">
          <Input
            placeholder="Search"
            className="flex-1 placeholder:text-ash text-xs border-none shadow-none focus-visible:ring-0 focus-visible:outline-none placeholder:font-normal"
          />

          <Search size={14} color="var(--color-ash)" />
        </div>

        <div className="size-9.5 relative bg-soft-lavender rounded-md flex justify-center items-center">
          <Badge className="bg-warning size-5.5 text-white rounded-lx font-medium text-[10px] absolute -top-1.5 -right-1.5 font-inter">
            10
          </Badge>
          <Icon
            width="20"
            height="20"
            strokeWidth={5}
            color="var(--color-primary)"
            icon="clarity:notification-line"
          />
        </div>
      </section>

      <section className="flex items-center flex-1 justify-end">
        <div className="bg-primary rounded-md py-2.5 pl-3 pr-2.5 w-full max-w-40">
          <span className="text-white font-inter text-sm font-medium">
            Hello, Super Admin
          </span>
        </div>
        <div className="size-12.5 rounded-full bg-blue-1 flex justify-center items-center -translate-x-4">
          <img
            width={29}
            height={38}
            alt="sharperly-logo"
            src="https://res.cloudinary.com/sharperly/image/upload/v1753829789/Sharperly%20Admin/logoWithoutText_jnfrqi.svg"
          />
        </div>

        <Icon
          width="36"
          height="36"
          color="var(--color-primary-text)"
          icon="iconamoon:arrow-down-2-light"
          className="-translate-x-4"
        />
      </section>
    </section>
  );
};

export default TopBar;
