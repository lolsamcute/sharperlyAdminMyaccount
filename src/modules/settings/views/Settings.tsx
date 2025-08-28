import HeadingOne from "@/components/typography/HeadingOne";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SystemServicesTab from "../components/SystemServicesTab";
import AccountSettingsTab from "../components/AccountSettingsTab";
import AdminManagementTab from "../components/AdminManagementTab";
import RoleManagementTab from "../components/RoleManagementTab";

const Settings = () => {
  return (
    <Tabs defaultValue="system-services" className="w-full">
      <section className="w-full px-2 md:px-6 py-6 space-y-7.5">
        <div className="flex gap-22 items-center justify-between">
          <HeadingOne text="Settings" />

          <TabsList className="w-full flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
            <TabsTrigger
              value="system-services"
              className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
            >
              System Services
            </TabsTrigger>
            <TabsTrigger
              value="account-settings"
              className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
            >
              Account Settings
            </TabsTrigger>
            <TabsTrigger
              value="admin-management"
              className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
            >
              Admin Management
            </TabsTrigger>
            <TabsTrigger
              value="role-management"
              className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
            >
              Role Management
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="system-services">
          <SystemServicesTab />
        </TabsContent>
        <TabsContent value="account-settings">
          <AccountSettingsTab />
        </TabsContent>
        <TabsContent value="admin-management">
          <AdminManagementTab />
        </TabsContent>
        <TabsContent value="role-management">
          <RoleManagementTab />
        </TabsContent>
      </section>
    </Tabs>
  );
};

export default Settings;
