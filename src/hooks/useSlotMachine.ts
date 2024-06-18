import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { generateSeed } from "@/utils/seed";

interface SlotMachineState {
  publicSeed: number;
  privateSeed: number;
  spinning: boolean;
  spin: () => void;
}

export const useSlotMachine = create<SlotMachineState>()(
  devtools((set) => ({
    publicSeed: generateSeed(),
    privateSeed: generateSeed(),
    spinning: false,
    spin: () => {
      set({
        spinning: true,
        publicSeed: generateSeed(),
        privateSeed: generateSeed(),
      });
      setTimeout(() => {
        set(() => ({
          spinning: false,
        }));
      }, 3000); // or any other duration you prefer
    },
  }))
);
