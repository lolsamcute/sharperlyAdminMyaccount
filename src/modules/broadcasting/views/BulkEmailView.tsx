import { Button } from "@/components/ui/button";
import BulkEmail from "../components/BulkEmail";
import HeadingOne from "@/components/typography/HeadingOne";

const BulkEmailView = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <HeadingOne text="Bulk Email" className="" />
        <div className="w-full justify-end flex items-center gap-4 flex-1">
          <Button className="border border-primary text-primary bg-white hover:bg-white !h-15 min-w-49.5 flex items-center justify-center rounded-lg font-medium">
            View History
          </Button>
          <Button
            type="submit"
            form="bulk-email-form"
            className="bg-primary hover:bg-primary text-white flex items-center justify-center min-w-49.5 !h-15 rounded-lg font-medium"
          >
            Send Email
          </Button>
        </div>
      </div>
      <section className="rounded-x bg-white pt-8 px-7.5 min-h-190">
        <BulkEmail />
      </section>
    </section>
  );
};

export default BulkEmailView;
