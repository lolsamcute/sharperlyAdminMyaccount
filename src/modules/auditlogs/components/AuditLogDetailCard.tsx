import { Badge } from "@/components/ui/badge";
import type { AuditLogDetail } from "../utils/types";
import Detail from "@/components/common/Detail";
import HeadingOne from "@/components/typography/HeadingOne";

interface AuditLogDetailCardProps {
  detail: AuditLogDetail;
}

const AuditLogDetailCard = ({ detail }: AuditLogDetailCardProps) => {
  const statusOptions: {
    [key in "Successful" | "Rejected"]: {
      text: string;
      bg: string;
    };
  } = {
    Rejected: { text: "#FE8F76", bg: "#FEF0ED" },
    Successful: { text: "#29C153", bg: "#29C15329" },
  };

  return (
    <section className="bg-off-white rounded-lg py-8 px-7 mt-7.5 font-poppins space-y-8">
      <div className="space-y-4">
        <Detail title="Title" value={detail.title} />

        <Detail title="Detail" value={detail.detail} />

        <Detail
          title="Status"
          value={
            <>
              <Badge
                className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
                style={{
                  color: statusOptions["Successful"].text,
                  backgroundColor: statusOptions["Successful"].bg,
                }}
              >
                Successful
              </Badge>
            </>
          }
        />

        <Detail title="Timestamp" value={detail.timestamp} />

        <div className="h-[3px] w-full bg-grey-1" />
      </div>

      <div className="space-y-5">
        <HeadingOne text="Performed By" className="!text-lg" level={2} />

        <div className="space-y-4">
          <Detail title="Admin Name" value={detail.adminName} />

          <Detail title="Role" value={detail.role} />
          <Detail title="IP Address" value={detail.ipAddress} />
          <Detail title="Device Info" value={detail.deviceInfo} />

          <div className="h-[3px] w-full bg-grey-1" />
        </div>
      </div>

      <div className="space-y-5">
        <HeadingOne text="Action Description" className="!text-lg" level={2} />

        <div className="space-y-4">
          <Detail title="Admin Name" value={detail.adminName} />

          <Detail title="Role" value={detail.role} />
          <Detail title="IP Address" value={detail.ipAddress} />
          <Detail
            title="KYC Status"
            value={
              <>
                <Badge
                  className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
                  style={{
                    color: statusOptions["Rejected"].text,
                    backgroundColor: statusOptions["Rejected"].bg,
                  }}
                >
                  Rejected
                </Badge>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AuditLogDetailCard;
