import { generateSeed } from "@/utils/seed";
import { useContext, useState, FC, createContext, useEffect } from "react";

export const SlotMachineContext = createContext<{
	publicSeed: number;
	privateSeed: number;
	spin: () => void;
}>({
	publicSeed: 0,
	privateSeed: 0,
	spin: () => {},
});

interface SlotMachineProviderProps {
	children: React.ReactNode;
}

export const SlotMachineProvider: FC<SlotMachineProviderProps> = ({
	children,
}) => {
	const [publicSeed, setPublicSeed] = useState(generateSeed());
	const [privateSeed, setPrivateSeed] = useState(generateSeed());

	const handleSpin = () => {
		setPrivateSeed(generateSeed());
		setPublicSeed(generateSeed());
	};

	useEffect(() => {
		console.log("publicSeed", publicSeed);
		console.log("privateSeed", privateSeed);
	}, [publicSeed, privateSeed]);

	return (
		<SlotMachineContext.Provider
			value={{
				publicSeed,
				privateSeed,
				spin: () => handleSpin(),
			}}
		>
			{children}
		</SlotMachineContext.Provider>
	);
};

export const useSlotMachine = () => useContext(SlotMachineContext);
