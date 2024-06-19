import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { generateSeed } from "@/utils/seed";

interface SlotMachineState {
  publicSeed: number;
  privateSeed: number;
  spinning: boolean;
  energy: number;
  maxEnergy: number;
  score: number;
  setScore: (score: number) => void;
  spin: () => void;
}

export const useSlotMachine = create<SlotMachineState>()(
  devtools((set) => ({
    publicSeed: generateSeed(),
    privateSeed: generateSeed(),
    spinning: false,
    energy: 100, // set to 0 on production
    maxEnergy: 100,
    score: 0,
    setScore: (score) => set((state) => ({ ...state, score: score })),
    spin: () => {
      set((state) =>
        state.energy > 0
          ? {
              ...state,
              spinning: true,
              publicSeed: generateSeed(),
              privateSeed: generateSeed(),
              energy: state.energy - 1,
            }
          : state
      );

      setTimeout(() => {
        set(() => ({
          spinning: false,
        }));
      }, 3000);
    },
  }))
);
