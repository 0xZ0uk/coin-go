import * as React from "react";
import { Spinner } from "./Spinner";
import { seededDurstenfeldShuffle } from "@/utils/array";
import { squares } from "squares-rng";
import { generateSeed } from "@/utils/seed";

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
  const [spinner1, setSpinner1] = React.useState<string[]>([]);
  const [spinner2, setSpinner2] = React.useState<string[]>([]);
  const [spinner3, setSpinner3] = React.useState<string[]>([]);

  /* 	React.useEffect(() => {
		const interval = setInterval(() => {
			setSpinner1(durstenfeldShuffle(symbols));
			setSpinner2(durstenfeldShuffle(symbols));
			setSpinner3(durstenfeldShuffle(symbols));
		}, 1000);

		return () => clearInterval(interval);
	}, []);
 */

  const privateSeed = generateSeed();
  const publicSeed = generateSeed();

  React.useEffect(() => {
    const privateRandom = squares(privateSeed);
    const publicRandom = squares(publicSeed);

    console.log("seeds:: ", privateRandom, publicRandom);

    setSpinner1(seededDurstenfeldShuffle(symbols, privateRandom, publicRandom));
    setSpinner2(seededDurstenfeldShuffle(symbols, privateRandom, publicRandom));
    setSpinner3(seededDurstenfeldShuffle(symbols, privateRandom, publicRandom));
  }, [privateSeed, publicSeed]);

  return (
    <div className="flex p-4 rounded-md bg-gradient-to-b from-[#563226] to-[#331c17] w-full gap-2">
      <Spinner symbols={spinner1} />
      <Spinner symbols={spinner2} />
      <Spinner symbols={spinner3} />
    </div>
  );
};
