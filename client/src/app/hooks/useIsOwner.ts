"use client";

import { useEffect, useState } from "react";
import { useServer } from "../(routes)/home/context/server";
import { useAuth } from "../context/auth";

export function useIsOwner(serverId: string) {
  const [owner, setOwner] = useState<boolean>(false);

  const { isOwner } = useServer();

  const { user } = useAuth();

  useEffect(() => {
    async function isOwnerFunction() {
      const res = await isOwner(serverId);
      if (res && res.data.user.toString() === user?.id) {
        setOwner(true);
      } else {
        setOwner(false);
      }
    }
    isOwnerFunction();
  }, [isOwner, serverId, user]);

  return { owner };
}
