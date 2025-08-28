import SystemServicesToggle from "./SystemServicesToggle";
import {
  bankOptions,
  paymentOptions,
  chatOptions,
  serviceToggles,
} from "../utils/constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";

const SystemServicesTab = () => {
  const [toggles, setToggles] = useState(serviceToggles);
  const [payOut, setPayOut] = useState(bankOptions[0].value);
  const [receivePayment, setReceivePayment] = useState(paymentOptions[0].value);
  const [liveChat, setLiveChat] = useState(chatOptions[0].value);

  const handleToggle = (value: string) => {
    setToggles((prev) =>
      prev.map((toggle) =>
        toggle.value === value
          ? { ...toggle, enabled: !toggle.enabled }
          : toggle
      )
    );
  };

  return (
    <div className="space-y-15">
      <SystemServicesToggle toggles={toggles} onToggle={handleToggle} />
      <div className="space-y-8 w-full max-w-132.5">
        <div className="space-y-2.5">
          <label className="text-base text-secondary-black leading-5 block">
            Pay Out
          </label>

          <div className="flex items-center gap-5">
            <Select value={payOut} onValueChange={setPayOut}>
              <SelectTrigger className="w-full border border-black-1 !h-15 rounded-lg px-4 text-secondary-black text-base font-medium bg-white flex items-center justify-between">
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {bankOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="font-poppins font-medium"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-primary hover:bg-primary text-white w-full max-w-30.5 rounded-xl h-15 flex items-center justify-center">
              Update
            </Button>
          </div>
        </div>
        <div className="space-y-2.5">
          <label className="text-base text-secondary-black leading-5 block">
            Receive Payment
          </label>
          <div className="flex items-center gap-5">
            <Select value={receivePayment} onValueChange={setReceivePayment}>
              <SelectTrigger className="w-full border border-black-1 !h-15 rounded-lg px-4 text-secondary-black text-base font-medium bg-white flex items-center justify-between">
                <SelectValue placeholder="Select Payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {paymentOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="font-poppins font-medium"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-primary hover:bg-primary text-white w-full max-w-30.5 rounded-xl h-15 flex items-center justify-center">
              Update
            </Button>
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-base text-secondary-black leading-5 block">
            Live Chat
          </label>
          <div className="flex items-center gap-5">
            <Select value={liveChat} onValueChange={setLiveChat}>
              <SelectTrigger className="w-full border border-black-1 !h-15 rounded-lg px-4 text-secondary-black text-base font-medium bg-white flex items-center justify-between">
                <SelectValue placeholder="Select Chat" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {chatOptions.map((option) => (
                    <SelectItem
                      className="font-poppins font-medium"
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-primary hover:bg-primary text-white w-full max-w-30.5 rounded-xl h-15 flex items-center justify-center">
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemServicesTab;
