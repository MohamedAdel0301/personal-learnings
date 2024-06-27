import React from "react";
import { cn } from "@/lib/utils";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
