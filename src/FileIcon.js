import React from "react";
import styles from "./Window.module.css";

function FileIcon({ name, imageSrc, onClick, windowId }) {
  return (
    <button
      className={styles.fileIconButton}
      onClick={onClick}
      data-window-id={windowId}
      aria-label={`Open ${name}`}
    >
      <div
        className={styles.fileIconImage}
        style={{ backgroundImage: `url(${imageSrc})` }}
        data-window-id={windowId}
      />
      <span data-window-id={windowId}>{name}</span>
    </button>
  );
}

export default FileIcon;
