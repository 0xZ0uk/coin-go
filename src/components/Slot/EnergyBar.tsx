import { FC } from "react";
import { useSlotMachine } from "@/hooks/useSlotMachine";

export const EnergyBar: FC = () => {
  const { energy, maxEnergy } = useSlotMachine();
  const energyPercentage = (energy / maxEnergy) * 100;

  return (
    <div className="bg-[#331c17] w-full p-4 pt-0 rounded-b-lg">
      <div className="flex items-center h-6 justify-start text-center w-full bg-gradient-to-b from-red-400 to-red-500 rounded-md">
        <div
          className="w-full h-6 bg-gradient-to-b from-green-400 to-green-500 rounded-md"
          style={{ width: `${energyPercentage}%` }}
        />
        <p className="absolute px-2 text-black font-bold text-right">
          {energy} / {maxEnergy}
        </p>
      </div>
    </div>
  );
};
