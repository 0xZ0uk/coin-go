import type { FC } from "react";
import { AppMenu } from "@/components/AppMenu";
import { Slot } from "@/components/Slot";

export const IndexPage: FC = () => {
	return (
		<div className="flex flex-col justify-between">
			<header className="bg-gradient-to-b h-12 flex items-center justify-center from-[#563226] to-[#331c17] border-b">
				<h1>Welcome to CoinGo</h1>
			</header>
			<main className="h-[calc(100vh-7rem)] bg-gradient-to-b from-blue-300 to-blue-400 flex items-center justify-cente p-8">
				<Slot />
			</main>
			<AppMenu />
		</div>
	);
};
