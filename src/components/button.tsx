import { ButtonHTMLAttributes, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center gap-2 rounded-lg border font-mono font-medium [&>svg]:h-[18px] [&>svg]:w-[18px]",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-solid-background text-background transition hover:bg-solid-background-hover",
        outline:
          "border-border text-text-contrast transition hover:border-border-hover hover:bg-background-light",
      },
      size: {
        sm: "h-12 px-4 text-sm",
        md: "h-14 px-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={buttonStyles({ variant, size, className })}
        {...props}
      />
    );
  },
);
