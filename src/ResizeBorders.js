import React from "react";
import styles from "./Window.module.css";

function ResizeBorders({ windowId }) {
  return (
    <React.Fragment>
      <span
        className={styles.right}
        data-mode="right"
        data-window-id={windowId}
      />
      <span
        className={styles.left}
        data-mode="left"
        data-window-id={windowId}
      />
      <span
        className={styles.bottom}
        data-mode="bottom"
        data-window-id={windowId}
      />
      <span className={styles.top} data-mode="top" data-window-id={windowId} />
      <span
        className={styles.topLeft}
        data-mode="left-top"
        data-window-id={windowId}
      />
      <span
        className={styles.bottomLeft}
        data-mode="left-bottom"
        data-window-id={windowId}
      />
      <span
        className={styles.topRight}
        data-mode="right-top"
        data-window-id={windowId}
      />
      <span
        className={styles.bottomRight}
        data-mode="right-bottom"
        data-window-id={windowId}
      />
    </React.Fragment>
  );
}

export default ResizeBorders;
