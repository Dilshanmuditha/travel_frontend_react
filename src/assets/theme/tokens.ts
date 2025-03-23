import { PaletteMode } from "@mui/material";

export const tokens = ({ mode }: { mode: PaletteMode }) => ({
  ...(mode === "light"
    ? {
        gray: {
          0: "#FCFCFD",
          25: "#F9FAFB",
          50: "#F2F4F7",
          100: "#EAECF0",
          200: "#D0D5DD",
          300: "#c5c5c5",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          0: "#FFFFFF",   // White
          25: "#E6F0FF",   // Light blue
          50: "#CCE0FF",   // Soft blue
          100: "#99C2FF",  // Pale blue
          200: "#66A3FF",  // Light blue
          300: "#3385FF",  // Medium blue
          400: "#0066FF",  // Bright blue
          500: "#0052CC",  // Deep blue
          600: "#0041A1",  // Darker blue
          700: "#003580",  // Very dark blue
          800: "#002660",  // Almost navy blue
          900: "#001A40",  // Navy blue
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#FC8686",
          500: "#F04438",
          600: "#d32f2f",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#B7FFD5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        background: {
          600: "#C5E8ED",
          700: "#000000",
          800: "#2D2D2D",
          900: "#1F1F1F",
        },
      }
    : {
        // Dark mode colors (same as light mode for now)
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          0: "#FFFFFF",   // White
          25: "#E6F0FF",   // Light blue
          50: "#CCE0FF",   // Soft blue
          100: "#99C2FF",  // Pale blue
          200: "#66A3FF",  // Light blue
          300: "#3385FF",  // Medium blue
          400: "#0066FF",  // Bright blue
          500: "#0052CC",  // Deep blue
          600: "#0041A1",  // Darker blue
          700: "#003580",  // Very dark blue
          800: "#002660",  // Almost navy blue
          900: "#001A40",  // Navy blue
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#FC8686",
          500: "#F04438",
          600: "#d32f2f",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#B7FFD5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        background: {
          600: "#C5E8ED",
          700: "#000000",
          800: "#2D2D2D",
          900: "#1F1F1F",
        },
      }),
});