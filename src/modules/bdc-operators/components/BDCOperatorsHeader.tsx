import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import HeadingOne from "@/components/typography/HeadingOne";

const BDCOperatorsHeader = () => {
  return (
    <section>
      <HeadingOne text="BDC Operators" />

      <Button className="bg-primary hover:bg-primary w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base">
        <Icon icon="ci:add-plus" width="20" height="20" color="#fff" /> New Add
        New Operator
      </Button>
    </section>
  );
};

export default BDCOperatorsHeader;
