"use client"

import ErrorInterface from "@/components/errorInterface";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {

    console.error(error);
  }, [error]);

  return <ErrorInterface text="There was a problem with your search" />;
}
