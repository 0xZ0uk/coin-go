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

  const [spinners, setSpinners] = React.useState<string[][]>([]);

  React.useEffect(() => {
    setSpinners([
      seededDurstenfeldShuffle(symbols, privateSeed, publicSeed),
      seededDurstenfeldShuffle(symbols, privateSeed, publicSeed),
      seededDurstenfeldShuffle(symbols, privateSeed, publicSeed),
    ]);
  }, [publicSeed, privateSeed]);

  React.useEffect(() => {
    console.log(publicSeed, privateSeed);
  }, [publicSeed, privateSeed]);

  return (
    <div className="flex p-4 rounded-lg bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
      <Spinner symbols={spinners[0]} />
      <Spinner symbols={spinners[1]} />
      <Spinner symbols={spinners[2]} />
    </div>
  );
};
