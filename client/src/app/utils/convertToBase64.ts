export function convertToBase64(file: string) {
  if (file && file.data && Array.isArray(file.data.data)) {
    const logoUrl = `data:${file.contentType};base64,${Buffer.from(
      file.data.data
    ).toString("base64")}`;

    return logoUrl;
  }
}
