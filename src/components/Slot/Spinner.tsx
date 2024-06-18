import { cn } from "@/utils/cn";
import { Image } from "@telegram-apps/telegram-ui";
import * as React from "react";

interface SpinnerProps {
  symbols?: string[];
  spinning?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  symbols = [],
  spinning = false,
}) => {
  return (
    <div
      className={cn(
        "basis-1/3 w-full bg-[#ffecd6] h-fit max-h-[19rem] overflow-x-hidden relative rounded-md flex flex-col gap-2 p-2"
      )}
    >
      <div className="absolute left-0 transition-all top-0 z-20 w-full rounded-md h-full bg-gradient-to-b from-background/40 from-5% via-50% via-transparent to-95% to-background/40"></div>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-2 w-full",
          spinning ? "animate-slot-spin" : ""
        )}
      >
        {symbols.map((symbol, index) => (
          <SpinnerItem key={index}>
            <Image
              src={`/twa/emojis/${symbol}.svg`}
              size={48}
              alt={symbol}
              className="bg-transparent"
            />
          </SpinnerItem>
        ))}
      </div>
    </div>
  );
};

interface SpinnerItemProps {
  children?: React.ReactNode;
}

const SpinnerItem: React.FC<SpinnerItemProps> = ({ children }) => {
  return (
    <div className="rounded-md aspect-square flex items-center justify-center w-full bg-[#ffd4a3]">
      {children}
    </div>
  );
};
