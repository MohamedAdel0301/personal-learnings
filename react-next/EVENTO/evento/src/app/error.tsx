"use client"; // Error components must be Client Components

import H1 from "@/components/H1";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="py-24 text-center">
      <H1 className="mb-5">Something went wrong!</H1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
