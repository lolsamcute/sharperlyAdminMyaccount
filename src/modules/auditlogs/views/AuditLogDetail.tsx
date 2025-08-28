import HeadingOne from "@/components/typography/HeadingOne";
import AuditLogDetailCard from "../components/AuditLogDetailCard";
import { auditLogDetail } from "../utils/constants";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const AuditLogDetail = () => {
  return (
    <section className="w-full px-2 md:px-6 py-6 space-y-5.5">
      <div className="flex items-center justify-between">
        <HeadingOne text="Activity Log" className="" />

        <Button className="bg-primary hover:bg-primary rounded-x flex items-center gap-1 py-2 px-4 h-12.5">
          <Icon color="#fff" icon="ri:download-2-line" width="20" height="20" />

          <span className="block text-white font-medium text-x">
            Download Report
          </span>
        </Button>
      </div>
      <AuditLogDetailCard detail={auditLogDetail} />
    </section>
  );
};

export default AuditLogDetail;
