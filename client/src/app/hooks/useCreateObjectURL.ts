import { useEffect, useState } from "react";

export function useCreateObjectURL(data: File | null): string | null {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      const objectUrl = URL.createObjectURL(data);
      setPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [data]);

  return preview;
}
