import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import clsx from "clsx";

export const Divider = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={clsx(
        "shrink-0 bg-accent-border data-[orientation=horizontal]:mx-auto data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-[120px]",
        className,
      )}
      {...props}
    />
  ),
);
