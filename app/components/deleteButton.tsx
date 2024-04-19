"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteButton({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    try {
      //   await fetch("/api/file", {
      await fetch(`/api/file/${encodeURIComponent(url)}`, {
        method: "DELETE",
        // body: JSON.stringify({ url }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsLoading(false);

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}
