import * as React from "react";
import { Spinner } from "./Spinner";
import { seededDurstenfeldShuffle } from "@/utils/array";
import { useSlotMachine } from "@/hooks/useSlotMachine";

const symbols = [
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

  const [spinner1, setSpinner1] = React.useState<string[]>([]);
  const [spinner2, setSpinner2] = React.useState<string[]>([]);
  const [spinner3, setSpinner3] = React.useState<string[]>([]);

  React.useEffect(() => {
    setSpinner1(seededDurstenfeldShuffle(symbols, privateSeed, publicSeed));
    setSpinner2(seededDurstenfeldShuffle(symbols, privateSeed, publicSeed));
    setSpinner3(seededDurstenfeldShuffle(symbols, privateSeed, publicSeed));
  }, [publicSeed, privateSeed]);

  React.useEffect(() => {
    console.log(publicSeed, privateSeed);
  }, [publicSeed, privateSeed]);

  return (
    <div className="flex p-4 rounded-lg bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
      <Spinner symbols={spinner1} />
      <Spinner symbols={spinner2} />
      <Spinner symbols={spinner3} />
    </div>
  );
};
