import React from "react";
import styles from "./Window.module.css";

function FileIcon({ name, imageSrc, onClick, windowId }) {
  // Pass a callback from Windows to be used here for
  // the onDrag event.

  return (
    <button
      // onDrag={e => console.log(e.clientX, e.clientY)}
      className={styles.fileIconButton}
      onClick={onClick}
      data-window-id={windowId}
      aria-label={`Open ${name}`}
    >
      <img src={imageSrc} alt="restore" data-window-id={windowId} />
      <span data-window-id={windowId}>{name}</span>
    </button>
  );
}

export default FileIcon;
