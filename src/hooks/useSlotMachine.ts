import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { generateSeed } from "@/utils/seed";

interface SlotMachineState {
  publicSeed: number;
  privateSeed: number;
  spin: () => void;
}

export const useSlotMachine = create<SlotMachineState>()(
  devtools((set) => ({
    publicSeed: generateSeed(),
    privateSeed: generateSeed(),
    spin: () =>
      set(() => ({ publicSeed: generateSeed(), privateSeed: generateSeed() })),
  }))
);
