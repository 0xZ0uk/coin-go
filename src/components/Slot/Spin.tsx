import { FC } from "react";
import { useSlotMachine } from "@/hooks/useSlotMachine";

export const Spin: FC = () => {
  const { spin, spinning, energy } = useSlotMachine();

  return (
    <button
      className="w-full h-[90%] p-2 relative -top-14 rounded-t-md group active:translate-y-4 disabled:translate-y-4 transition-all"
      onClick={() => spin()}
      disabled={spinning || energy === 0}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-red-400 to-red-500 group-active:from-red-600 group-active:to-red-800 group-disabled:from-slate-600 group-disabled:to-slate-700 transition-all text-red-200 group-active:text-red-300 group-disabled:text-slate-300 rounded-t-md">
        <p className="text-center uppercase font-bold text-4xl tracking-wide leading-wide">
          Spin
        </p>
      </div>
      <div className="bg-red-700 w-full h-8 group-active:h-4 group-disabled:h-4 group-active:bg-red-800 group-disabled:bg-slate-800 rounded-b-md transition-all"></div>
    </button>
  );
};
