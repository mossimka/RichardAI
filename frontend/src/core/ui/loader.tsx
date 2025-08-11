import { Loader2Icon } from "lucide-react";
import React from "react";

export default function Loader({ size }: { size?: number }) {
  return <Loader2Icon size={size} className="animate-spin" />;
}
