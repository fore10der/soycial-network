import React from "react";
import "./App.css";
import { AppTheme } from "./theme";
import { Authentication } from "./pages/Authentication";

export const App = () => {
  return (
    <AppTheme>
      <Authentication />
    </AppTheme>
  );
};
