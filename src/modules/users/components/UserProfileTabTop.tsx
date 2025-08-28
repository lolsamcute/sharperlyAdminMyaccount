import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronDown, CircleUser } from "lucide-react";

const UserProfileTabTop = () => {
  return (
    <section className="bg-off-white rounded-lg w-full pl-7 py-7.5 space-y-8 mt-8">
      <section className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <CircleUser
            color="var(--color-primary)"
            size={52}
            strokeWidth={0.5}
            className="size-13 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="block font-medium text-base text-charcoal2">
              Judith Dimochukwu
            </span>
            <span className="block text-base text-cool-slate">
              Project Manager
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-primary-5 flex items-center justify-center size-13 rounded-full">
            <Icon
              width={20}
              height={20}
              color="var(--color-primary)"
              icon="fluent:wallet-credit-card-16-filled"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="block text-black text-2xl font-medium">
              $5,292.79
            </span>
            <span className="block text-cool-slate text-xs">
              Wallet Balance
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-primary-5 flex items-center justify-center size-13 rounded-full">
            <Icon
              width={20}
              height={20}
              color="var(--color-primary)"
              icon="charm:person"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="block text-black text-2xl font-medium">
              $292.79
            </span>
            <span className="block text-cool-slate text-xs">
              Referral Balance
            </span>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-8">
        <div className="w-full max-w-62.5 h-20 border border-[#EEE5FF] rounded-lg flex flex-col items-center justify-center gap-2">
          <span className="block text-black text-2xl font-medium">95%</span>
          <span className="block font-semibold text-cool-slate text-xs">
            Profile Completion
          </span>
        </div>

        <div className="w-full max-w-62.5 h-20 border border-[#EEE5FF] rounded-lg flex flex-col items-center justify-center gap-2">
          <div className="bg-tertiary2 w-full max-w-22.5 h-7 rounded flex justify-center items-center">
            <span className="font-semibold text-x text-leafy-green">
              Active
            </span>
          </div>
          <span className="block font-semibold text-cool-slate text-xs">
            Account Status
          </span>
        </div>

        <div className="w-full max-w-62.5 h-20 border border-[#EEE5FF] rounded-lg flex flex-col items-center justify-center gap-2">
          <div className="border border-green2 w-full max-w-22.5 h-7 rounded flex justify-center items-center">
            <span className="font-semibold text-x text-green2">Active</span>
          </div>
          <span className="block font-semibold text-cool-slate text-xs">
            KYC Status
          </span>
        </div>
      </section>

      <section className="flex items-center gap-4">
        <div className="w-full max-w-31 rounded border-[0.5px] border-black2 py-2 px-4 h-8 flex items-center justify-center gap-0.5">
          <span className="text-x font-medium text-warning">Deactivate</span>
          <ChevronDown color="var(--color-warning)" size={16} />
        </div>
        <div className="w-full max-w-31 rounded border-[0.5px] border-black2 py-2 px-4 h-8 flex items-center justify-center gap-0.5">
          <Icon
            width="12"
            height="12"
            color="var(--color-sky-blue)"
            icon="fluent:wallet-credit-card-16-filled"
          />
          <span className="text-x font-medium text-sky-blue">Fund Wallet</span>
        </div>
        <div className="w-full max-w-31 rounded border-[0.5px] border-black2 py-2 px-4 h-8 flex items-center justify-center gap-0.5">
          <Icon
            width="12"
            height="12"
            icon="ri:delete-bin-6-line"
            color="var(--color-warning)"
          />
          <span className="text-x font-medium text-warning"> Delete </span>
        </div>
        <div className="w-fit rounded border-[0.5px] border-black2 py-2 px-4 h-8 flex items-center justify-center gap-0.5">
          <Icon
            width="12"
            height="12"
            color="var(--color-primary)"
            icon="clarity:notification-line"
          />
          <span className="text-x font-medium text-primary">
            Send Notification
          </span>
        </div>
      </section>
    </section>
  );
};

export default UserProfileTabTop;
