import { ThemeProvider } from "@mui/styles";
import React from "react";
import { createTheme, CssBaseline } from "@mui/material";

const theme = createTheme();

export const AppTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
