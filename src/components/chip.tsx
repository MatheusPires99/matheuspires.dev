import { HTMLAttributes } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

const chipsStyles = cva(
  "flex items-center justify-center gap-1 rounded-full border border-accent-border p-2 font-mono text-xs leading-none text-text-base transition hover:scale-105 [&>img]:invert-[0.9] dark:[&>img]:invert-0",
  {
    variants: {
      highlightColor: {
        cyan: "hover:border-[#064150] hover:bg-[#061e24] hover:text-[#00c2d7] dark:hover:border-[#aadee6] dark:hover:bg-[#f2fcfd] dark:hover:text-[#0c7792]",
        green:
          "hover:border-[#164430] hover:bg-[#0c1f17] hover:text-[#4cc38a] dark:hover:border-[#b4dfc4] dark:hover:bg-[#f2fcf5] dark:hover:text-[#18794e]",
        yellow:
          "hover:border-[#493c00] hover:bg-[#221a00] hover:text-[#f0c000] dark:hover:border-[#f9e68c] dark:hover:bg-[#fffce8] dark:hover:text-[#946800]",
        pink: "hover:border-[#601d48] hover:bg-[#271421] hover:text-[#f65cb6] dark:hover:border-[#f3c6e2] dark:hover:bg-[#fff7fc] dark:hover:text-[#cd1d8d]",
        blue: "hover:border-[#0d3868] hover:bg-[#0f1b2d] hover:text-[#52a9ff] dark:hover:border-[#b7d9f8] dark:hover:bg-[#f5faff] dark:hover:text-[#006adc]",
        orange:
          "hover:border-[#5f2a06] hover:bg-[#2b1400] hover:text-[#ff8b3e] dark:hover:border-[#ffcca7] dark:hover:bg-[#fef8f4] dark:hover:text-[#bd4b00]",
        black:
          "hover:border-[rgba(136,136,136,0.5)] hover:bg-[rgba(136,136,136,0.08)] hover:text-[#ededed] dark:hover:border-[#e2e2e2] dark:hover:bg-[#f8f8f8] dark:hover:text-[#6f6f6f]",
        red: "hover:border-[#671e22] hover:bg-[#291415] hover:text-[#ff6369] dark:hover:border-[#f9c6c6] dark:hover:bg-[#fff8f8] dark:hover:text-[#cd2b31]",
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
