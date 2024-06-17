import { FC } from "react";
import { useSlotMachine } from "./SlotMachine";

export const Spin: FC = () => {
	const { spin } = useSlotMachine();

	return (
		<button
			className="w-full h-full p-2 relative -top-8 rounded-t-md group active:translate-y-4 transition-all"
			onClick={() => spin()}
		>
			<div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-red-400 to-red-500 group-active:bg-red-600 transition-all text-red-200 group-active:text-red-300 rounded-t-md">
				<p className="text-center uppercase font-bold text-4xl tracking-wide leading-wide">
					Spin
				</p>
			</div>
			<div className="bg-red-700 w-full h-8 group-active:h-4 group-active:bg-red-800 rounded-b-md transition-all"></div>
		</button>
	);
};
