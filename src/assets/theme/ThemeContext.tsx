import { createContext, useState, useMemo, ReactNode } from "react";
import { PaletteMode, createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";

export interface ColorModeContextType {
    toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const themeMemo = useMemo(() => createTheme(themeSettings({ mode })), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={themeMemo}>{children}</MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
