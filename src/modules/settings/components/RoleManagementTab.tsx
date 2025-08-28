import { Button } from "@/components/ui/button";
import TableHeading from "@/components/typography/TableHeading";
import { roleList } from "../utils/constants";
import { DataTable } from "@/components/common/DataTable";
import { roleTableColumn } from "./RoleTableColumn";
import { Icon } from "@iconify/react/dist/iconify.js";

const RoleManagementTab = () => {
  return (
    <div className="bg-white rounded-x px-5 pt-5 pb-20 w-full space-y-5">
      <div className="flex items-center justify-between">
        <TableHeading text="Manage Roles" />
        <Button className="bg-primary hover:bg-primary !text-white text-x rounded-x h-12.5 flex items-center justify-center font-medium">
          <Icon icon="ci:add-plus" width="20" height="20" color="#fff" /> Add
          Create Role
        </Button>
      </div>
      <DataTable columns={roleTableColumn} data={roleList} />
    </div>
  );
};

export default RoleManagementTab;
