import { LoaderCircleIcon } from "lucide-react";
import React from "react";

export default function Loader({ size }: { size?: number }) {
  return <LoaderCircleIcon size={size} className="animate-spin" />;
}
