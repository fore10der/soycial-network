import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Image from "./assets/background-login.jpg";

const useStyles = makeStyles<Theme>(
  ({
    palette: {
      background: { default: backgroundColor },
    },
  }) => ({
    container: {
      background: `url(${Image})`,
      height: "100%",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "end",
    },
    formLayout: {
      backgroundColor,
      width: "50%",
      height: "100%",
    },
  })
);

export const Authentication: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.formLayout} />
    </div>
  );
};
