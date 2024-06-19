import { FC } from "react";
import { useSlotMachine } from "@/hooks/useSlotMachine";

export const EnergyBar: FC = () => {
  const { energy, maxEnergy } = useSlotMachine();
  const energyPercentage = (energy / maxEnergy) * 100;

  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="basis-9/12 flex items-center justify-start w-full h-full bg-gradient-to-b from-red-400 to-red-500 rounded-md">
        <div
          className="w-full h-2 bg-gradient-to-b from-green-400 to-green-500 rounded-md"
          style={{ width: `${energyPercentage}%` }}
        ></div>
      </div>
      <p className="basis-3/12 w-full text-right">
        {energy} / {maxEnergy}
      </p>
    </div>
  );
};
