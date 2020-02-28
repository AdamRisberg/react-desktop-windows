import React from "react";
import styles from "./demo.module.css";

function DemoHeader() {
  return (
    <header className={styles.header}>
      <h1>React Desktop Windows</h1>
      <a
        href="https://github.com/AdamRisberg/react-desktop-windows"
        aria-label="Github Repo"
      >
        <img src="images/github-logo.png" alt="Github" />
      </a>
    </header>
  );
}

export default DemoHeader;
