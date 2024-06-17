import * as React from "react";
import { GoImage } from "react-icons/go";
import { BsCoin, BsHammer, BsWallet2 } from "react-icons/bs";
import { Spin } from "./Slot/Spin";

export const AppMenu: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b h-16 from-[#563226] to-[#331c17] flex">
      <div className="w-full basis-1/6 border-r flex flex-col items-center justify-center border-[#ac6b26] text-[#ac6b26]">
        <BsCoin className="h-8 w-8" />
        <p className="text-sm">Play</p>
      </div>
      <div className="w-full basis-1/6 border-r flex flex-col items-center justify-center border-[#ac6b26] text-[#ac6b26]">
        <BsHammer className="h-8 w-8" />
        <p className="text-sm">Build</p>
      </div>
      <div className="w-full basis-2/6 bg-gradient-to-b from-[#bb7f57]/40 to-[#bb7f57]/80">
        <Spin />
      </div>
      <div className="w-full basis-1/6 border-l flex flex-col items-center justify-center border-[#ac6b26] text-[#ac6b26]">
        <GoImage className="h-8 w-8" />
        <p className="text-sm">NFTs</p>
      </div>
      <div className="w-full basis-1/6 border-l flex flex-col items-center justify-center border-[#ac6b26] text-[#ac6b26]">
        <BsWallet2 className="h-8 w-8" />
        <p className="text-sm">Wallet</p>
      </div>
    </footer>
  );
};
