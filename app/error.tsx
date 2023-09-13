"use client"

import { useEffect } from "react";
import ErrorInterface from "@/components/errorInterface";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorInterface text="oops, something went wrong..." />;
}
