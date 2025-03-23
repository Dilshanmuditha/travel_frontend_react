import { PaletteMode } from "@mui/material";
import { tokens } from "./tokens";

export const themeSettings = ({ mode }: { mode: PaletteMode }) => {
  const colors = tokens({ mode });

  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.primary[700],
            },
            secondary: {
              main: colors.primary[25],
            },
            background: {
              default: colors.primary[0],
            },
          }
        : {
            primary: {
              main: colors.primary[700],
            },
            secondary: {
              main: colors.primary[25],
            },
            background: {
              default: colors.primary[0],
            },
          }),
    },
    typography: {
      fontFamily: ["montserrat"].join(","),
      fontSize: 16,
      fontWeight: 500,
      allVariants: {
        color: colors.gray[900],
      },
      h1: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 28,
        fontWeight: 500,
      },
      h2: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 24,
        fontWeight: 500,
      },
      h3: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["montserrat"].join(","),
        fontSize: 12,
        fontWeight: 500,
      },
    },
  };
};