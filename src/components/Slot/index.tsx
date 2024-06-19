import * as React from "react";
import { Spinner } from "./Spinner";
import { useSlotMachine } from "@/hooks/useSlotMachine";
import { seededDurstenfeldShuffle } from "@/utils/array";
import { EnergyBar } from "./EnergyBar";

const symbols: string[] = [
  "angry_horns",
  "angry",
  "anguished",
  "anxious",
  "astonished",
  "beaming",
  "clown",
  "cold",
  "confounded",
  "confused",
  "cowboy",
  "crying",
  "disappointed",
  "disguised",
  "dizzy",
  "dotted",
  "downcase",
  "drooling",
  "exploding",
  "expressionless",
  "grinning",
];

export const Slot: React.FC = () => {
  const { publicSeed, privateSeed, spinning, setScore, score } =
    useSlotMachine();

  const [spinner1Symbols, setSpinner1Symbols] = React.useState<string[]>([]);
  const [spinner2Symbols, setSpinner2Symbols] = React.useState<string[]>([]);
  const [spinner3Symbols, setSpinner3Symbols] = React.useState<string[]>([]);

  React.useEffect(() => {
    setSpinner1Symbols(
      seededDurstenfeldShuffle([...symbols], privateSeed, publicSeed)
    );
    setSpinner2Symbols(
      seededDurstenfeldShuffle([...symbols], privateSeed + 1, publicSeed + 1)
    );
    setSpinner3Symbols(
      seededDurstenfeldShuffle([...symbols], privateSeed + 2, publicSeed + 2)
    );
  }, [publicSeed, privateSeed]);

  React.useEffect(() => {
    if (
      spinner1Symbols[1] === spinner2Symbols[1] &&
      spinner1Symbols[1] === spinner3Symbols[1]
    ) {
      setScore(score + 1);
    }
  }, [spinner1Symbols, spinner2Symbols, spinner3Symbols]);

  return (
    <div className="flex flex-col items-center justify-between gap-16">
      <div className="grid grid-cols-3 p-4 rounded-lg bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
        <Spinner symbols={spinner1Symbols} spinning={spinning} />
        <Spinner symbols={spinner2Symbols} spinning={spinning} />
        <Spinner symbols={spinner3Symbols} spinning={spinning} />
      </div>
      <EnergyBar />
    </div>
  );
};
