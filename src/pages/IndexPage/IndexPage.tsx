import type { FC } from "react";
import { AppMenu } from "@/components/AppMenu";
import { Slot } from "@/components/Slot";
import { useSlotMachine } from "@/hooks/useSlotMachine";
import { LuCoins } from "react-icons/lu";

export const IndexPage: FC = () => {
  const { score } = useSlotMachine();

  return (
    <div className="flex flex-col justify-between">
      <header className="bg-gradient-to-b h-12 flex items-center justify-between from-[#563226] to-[#331c17] border-b px-4">
        <h1>Welcome to TokenMasters</h1>
        <div className="flex gap-2 items-center">
          <LuCoins className="h-8 w-8" />
          <p className="text-lg">{score}</p>
        </div>
      </header>
      <main className="h-[calc(100vh-7rem)] bg-gradient-to-b from-blue-300 to-blue-400 flex items-center justify-cente p-8">
        <Slot />
      </main>
      <AppMenu />
    </div>
  );
};
