import React from "react";
import { v1 as uid } from "uuid";
import restoreImg from "./images/restore-window-50-2.png";
// import minimizeImg from "./images/minimize-window-50-2.png";
import maximizeImg from "./images/maximize-window-50-2.png";
import deleteImg from "./images/delete-50-3.png";
import { WindowContext } from "./Windows";
import FileIcon from "./FileIcon";
import ResizeBorders from "./ResizeBorders";
import windowReducer, { defaultState, actionTypes } from "./windowReducer";

import styles from "./Window.module.css";

let windowCount = 1;

function Window({
  name = "Untitled",
  iconImageSrc,
  minHeight = 200,
  minWidth = 200,
  children
}) {
  const [state, dispatch] = React.useReducer(windowReducer, defaultState);
  const { open, position, maximized, transparent } = state;
  const {
    containerSize,
    containerRef,
    windowIndexes,
    bringToFront
  } = React.useContext(WindowContext);

  const windowIdRef = React.useRef(uid());
  const windowRef = React.useRef();
  const resizeModeRef = React.useRef("");
  const mouseInfoRef = React.useRef({
    mouseDown: false,
    offset: { x: 0, y: 0 }
  });

  const zIndex = windowIndexes[windowIdRef.current];

  // Focus window when opened
  React.useEffect(() => {
    if (open) {
      windowRef.current.focus();
    }
  }, [open]);

  // Keep windows in bounds on resize
  React.useEffect(() => {
    dispatch({ type: actionTypes.RESIZE, payload: containerSize });
  }, [containerSize]);

  function handleMouseDown(e) {
    const { mode, windowId } = e.target.dataset;
    bringToFront(windowIdRef.current);

    if (!windowId || !mode) {
      return;
    }

    const { clientX, clientY } = e;
    resizeModeRef.current = mode;
    mouseInfoRef.current.mouseDown = true;
    mouseInfoRef.current.offset.x = clientX - position.left;
    mouseInfoRef.current.offset.y = clientY - position.top;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    containerRef.current.addEventListener("mouseleave", handleMouseUp);
  }

  function handleMouseUp() {
    mouseInfoRef.current.mouseDown = false;
    dispatch({ type: actionTypes.SET_TRANSPARENT, payload: false });

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    containerRef.current.removeEventListener("mouseleave", handleMouseUp);
  }

  function handleMouseMove(e) {
    const { clientX, clientY } = e;

    dispatch({
      type: actionTypes.SET_POSITION,
      payload: {
        mousePosition: { x: clientX, y: clientY },
        mouseOffset: mouseInfoRef.current.offset,
        resizeMode: resizeModeRef.current,
        containerSize,
        minHeight,
        minWidth
      }
    });
  }

  function maximize() {
    bringToFront(windowIdRef.current);
    dispatch({ type: actionTypes.TOGGLE_MAXIMIZED, payload: containerSize });
  }

  function openWindow() {
    // dispatch({ type: actionTypes.SET_OPEN, payload: true });
    const stagger = 25 * windowCount++;

    dispatch({
      type: actionTypes.OPEN,
      payload: { x: stagger, y: stagger }
    });
    bringToFront(windowIdRef.current);
  }

  function closeWindow() {
    // dispatch({ type: actionTypes.SET_OPEN, payload: false });
    windowCount--;
    dispatch({ type: actionTypes.CLOSE, payload: false });
  }

  const { left, width, top, height } = position;

  return (
    <React.Fragment>
      <FileIcon
        name={name}
        imageSrc={iconImageSrc}
        onClick={openWindow}
        windowId={windowIdRef.current}
      />
      {open && (
        <div
          ref={windowRef}
          onMouseDown={handleMouseDown}
          tabIndex="-1"
          draggable={false}
          className={styles.window}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `translate(${left}px, ${top}px)`,
            opacity: transparent ? "0.8" : "1",
            zIndex: zIndex
          }}
          data-window-id={windowIdRef.current}
        >
          <div
            className={styles.titleBar}
            data-mode="move"
            data-window-id={windowIdRef.current}
          >
            <DefaultIcon imageSrc={iconImageSrc} />
            <h2 className={styles.title}>{name}</h2>
            {/* <MinimizeButton /> */}
            <MaximizeButton onClick={maximize} maximized={maximized} />
            <CloseButton onClick={closeWindow} />
          </div>
          <div className={styles.content}>{children}</div>
          {!maximized && <ResizeBorders windowId={windowIdRef.current} />}
        </div>
      )}
    </React.Fragment>
  );
}

function DefaultIcon({ imageSrc }) {
  return <img className={styles.icon} src={imageSrc} alt="icon" />;
}

function MaximizeButton({ onClick, maximized }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {maximized ? (
        <img className={styles.icon} src={restoreImg} alt="restore" />
      ) : (
        <img className={styles.icon} src={maximizeImg} alt="maximize" />
      )}
    </button>
  );
}

function CloseButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.icon} src={deleteImg} alt="close" />
    </button>
  );
}

// function MinimizeButton({ onClick }) {
//   return (
//     <button className={styles.button} onClick={onClick}>
//       <img className={styles.icon} src={minimizeImg} alt="minimize" />
//     </button>
//   );
// }

export default Window;
