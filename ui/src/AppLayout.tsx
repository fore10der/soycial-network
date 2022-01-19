import React, { ReactNode } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export interface AppLayoutProps {
  sidebar?: ReactNode;
}

const useStyles = makeStyles<Theme>(
  ({
    palette: {
      primary: { dark: primary },
      background: { default: background },
    },
  }) => {
    return {
      layout: {
        height: "100%",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"sidebar container"`,
      },
      container: {
        gridArea: "container",
        backgroundColor: background,
        overflow: "auto",
      },
      sidebar: {
        gridArea: "sidebar",
        backgroundColor: primary,
      },
    };
  }
);

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  sidebar = null,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.container}>{children}</main>
    </div>
  );
};
