import * as React from "react";
import { Spinner } from "./Spinner";
import { useSlotMachine } from "@/hooks/useSlotMachine";
import { seededDurstenfeldShuffle } from "@/utils/array";

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
  "melting",
  "open_eyes",
  "robot",
  "rofl",
  "savory",
  "sweat",
];

export const Slot: React.FC = () => {
  const { publicSeed, privateSeed } = useSlotMachine();

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

  return (
    <div className="flex p-4 rounded-lg bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
      <Spinner symbols={spinner1Symbols} />
      <Spinner symbols={spinner2Symbols} />
      <Spinner symbols={spinner3Symbols} />
    </div>
  );
};
