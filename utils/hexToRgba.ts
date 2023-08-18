export function lightenHexColor(hex: string, percent: number): string {
  // Remove '#' if present
  hex = hex.replace("#", "");

  // Parse hex components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate new RGB values
  const newR = Math.min(255, r + Math.round((255 - r) * (percent / 100)));
  const newG = Math.min(255, g + Math.round((255 - g) * (percent / 100)));
  const newB = Math.min(255, b + Math.round((255 - b) * (percent / 100)));

  // Convert RGB values to hexadecimal format
  const newHex = `#${(newR < 16 ? "0" : "") + newR.toString(16)}${
    (newG < 16 ? "0" : "") + newG.toString(16)
  }${(newB < 16 ? "0" : "") + newB.toString(16)}`;

  return newHex;
}
