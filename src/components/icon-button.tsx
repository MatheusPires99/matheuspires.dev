"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

const iconButtonStyles = cva(
  "flex items-center justify-center rounded-lg bg-transparent text-text-base transition hover:bg-shape hover:text-text-contrast [&>svg]:h-5 [&>svg]:w-5",
  {
    variants: {
      size: {
        sm: "h-9 w-9 text-xl",
        md: "h-10 w-10 text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type IconButtonProps = VariantProps<typeof iconButtonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={iconButtonStyles({ size, className })}
        {...props}
      />
    );
  },
);
