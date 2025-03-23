import { useContext } from "react";
import { useTheme } from "@mui/material";
import { ColorModeContext } from "./ThemeContext";

export const useColorMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return {
    theme,
    colorMode,
    isDarkMode: theme.palette.mode === "dark",
  };
};