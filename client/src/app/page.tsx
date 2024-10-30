"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-semibold text-xl">
      {isClient ? "Hello discord clone" : "Server"}
    </div>
  );
}
