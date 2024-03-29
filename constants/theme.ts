const COLORS = {
 
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712",
  },
  rose: { "600": "#e11d48", "900": "#881337" },
  random: [
    "#030712",
    "#f97316",
    "#84cc16",
    "#06b6d4",
    "#3b82f6",
    "#db2777",
    "#fb7185",
    "#a855f7",
  ],
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
