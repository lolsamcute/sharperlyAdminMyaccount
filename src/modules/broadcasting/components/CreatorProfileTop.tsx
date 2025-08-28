import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const CreatorProfileTop = () => {
  const creatorData = {
    name: "Anabel Adindu",
    email: "anabeladindu@gmail.com",
    referrals: 5,
    kycStatus: "Approved",
    successfulTransactions: 5,
    accountStatus: "Active",
  };

  return (
    <section className="bg-white px-5 py-9 rounded-lg">
      <section className="w-full max-w-225 space-y-8">
        <div className="flex gap-4 justify-between items-center">
          <div className="w-13 h-13 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full flex items-center justify-center">
            <Icon width="32" height="32" color="#FFFFFF" icon="ri:user-line" />
          </div>
          <div>
            <h2 className="text-base font-medium text-charcoal2 capitalize">
              {creatorData.name}
            </h2>
            <p className="text-sm text-cool-slate">{creatorData.email}</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center border border-highlight-purple min-h-20 min-w-34.5 px-2 rounded-lg space-y-2">
            <div className="text-xl font-medium leading-5 text-charcoal2">
              {creatorData.referrals}
            </div>
            <div className="text-x font-medium text-secondary-black">
              Referrals
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center border border-highlight-purple min-h-20 min-w-34.5 px-2 rounded-lg space-y-2">
            <Badge className="bg-white border border-green2 !text-green2 px-3 py-2 rounded text-x font-semibold">
              {creatorData.kycStatus}
            </Badge>
            <div className="text-x text-secondary-black font-medium mt-1">
              KYC Status
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center border border-highlight-purple min-h-20 min-w-34.5 px-2 rounded-lg space-y-2">
            <div className="text-2xl font-bold text-gray-900">
              {creatorData.successfulTransactions}
            </div>
            <div className="text-x text-secondary-black font-medium">
              Successful Transactions
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center border border-highlight-purple min-h-20 min-w-34.5 px-2 rounded-lg space-y-2">
            <Badge className="bg-tertiary2 !text-leafy-green px-3 py-2 rounded text-x font-semibold min-w-22.5">
              {creatorData.accountStatus}
            </Badge>
            <div className="text-x text-secondary-black font-medium mt-1">
              Account Status
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="w-full max-w-34.5 h-8 border-[0.5px] border-black2 !text-warning bg-white px-6 py-2 rounded font-medium text-x flex items-center justify-center gap-1">
            <Icon
              width="12"
              height="12"
              color="#EF4444"
              icon="ri:delete-bin-line"
            />
            Delete Creator
          </Button>
        </div>
      </section>
    </section>
  );
};

export default CreatorProfileTop;
