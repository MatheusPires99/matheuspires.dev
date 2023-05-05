"use client";

import { HTMLAttributes } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

const chipsStyles = cva(
  "flex items-center justify-center gap-1 rounded-full border border-accent-border p-2 font-mono text-xs leading-none text-text-base transition hover:scale-105 [&>img]:invert-[0.9] dark:[&>img]:invert-0",
  {
    variants: {
      highlightColor: {
        cyan: "hover:border-[#aadee6] hover:bg-[#f2fcfd] hover:text-[#0c7792] dark:hover:border-[#064150] dark:hover:bg-[#061e24] dark:hover:text-[#00c2d7]",
        green:
          "hover:border-[#b4dfc4] hover:bg-[#f2fcf5] hover:text-[#18794e] dark:hover:border-[#164430] dark:hover:bg-[#0c1f17] dark:hover:text-[#4cc38a]",
        yellow:
          "hover:border-[#f9e68c] hover:bg-[#fffce8] hover:text-[#946800] dark:hover:border-[#493c00] dark:hover:bg-[#221a00] dark:hover:text-[#f0c000]",
        pink: "hover:border-[#f3c6e2] hover:bg-[#fff7fc] hover:text-[#cd1d8d] dark:hover:border-[#601d48] dark:hover:bg-[#271421] dark:hover:text-[#f65cb6]",
        blue: "hover:border-[#b7d9f8] hover:bg-[#f5faff] hover:text-[#006adc] dark:hover:border-[#0d3868] dark:hover:bg-[#0f1b2d] dark:hover:text-[#52a9ff]",
        orange:
          "hover:border-[#ffcca7] hover:bg-[#fef8f4] hover:text-[#bd4b00] dark:hover:border-[#5f2a06] dark:hover:bg-[#2b1400] dark:hover:text-[#ff8b3e]",
        black:
          "hover:border-[#e2e2e2] hover:bg-[#f8f8f8] hover:text-[#6f6f6f] dark:hover:border-[rgba(136,136,136,0.5)] dark:hover:bg-[rgba(136,136,136,0.08)] dark:hover:text-[#ededed]",
        red: "hover:border-[#f9c6c6] hover:bg-[#fff8f8] hover:text-[#cd2b31] dark:hover:border-[#671e22] dark:hover:bg-[#291415] dark:hover:text-[#ff6369]",
      },
    },
  },
);

type ChipProps = VariantProps<typeof chipsStyles> &
  HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

export const Chip = ({
  highlightColor,
  asChild,
  className,
  ...props
}: ChipProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={chipsStyles({ highlightColor, className })}
      {...props}
    />
  );
};
