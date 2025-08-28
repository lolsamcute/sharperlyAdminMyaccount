import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuditTrailTable from "./AuditTrailTable";
import ActivityLogsTable from "./ActivityLogsTable";

const AuditLogsTables = () => {
  return (
    <Tabs defaultValue="activity-log">
      <section className="bg-white rounded-x p-4 space-y-8">
        <TabsList className="w-full max-w-117.5 flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
          <TabsTrigger
            value="activity-log"
            className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Activity Log
          </TabsTrigger>
          <TabsTrigger
            value="audit-trail"
            className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Audit Trail
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity-log">
          <ActivityLogsTable />
        </TabsContent>
        <TabsContent value="audit-trail">
          <AuditTrailTable />
        </TabsContent>
      </section>
    </Tabs>
  );
};

export default AuditLogsTables;
