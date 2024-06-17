import * as React from "react";
import { Spinner } from "./Spinner";

export const Slot: React.FC = () => {
  return (
    <div className="flex p-4 rounded-md bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
      <Spinner />
      <Spinner />
      <Spinner />
    </div>
  );
};
