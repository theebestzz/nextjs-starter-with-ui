"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <NextUIProvider>{children}</NextUIProvider>
    </StyledComponentsRegistry>
  );
}
