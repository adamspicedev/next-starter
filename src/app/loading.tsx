import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <CircularProgress
      aria-label="Loading"
      className="mx-auto"
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
        indicator: "stroke-white",
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
    />
  );
}
