import React from "react";
import styles from "./Windows.module.css";

export const WindowContext = React.createContext({});

function Windows({ children }) {
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0
  });
  const [nextZIndex, setNextZIndex] = React.useState(1);
  const [windowIndexes, setWindowIndexes] = React.useState({});

  const containerRef = React.useRef();

  // Keeps track of container size
  function handleResize() {
    const { width, height } = containerRef.current.getBoundingClientRect();
    setContainerSize({ width, height });
  }

  // Prevents scrolling when a window mounts partially off screen
  function preventScroll(e) {
    e.target.scrollTop = 0;
    e.target.scrollLeft = 0;
  }

  // Add and remove event listeners on mount/unmount
  React.useEffect(() => {
    handleResize();
    containerRef.current.addEventListener("scroll", preventScroll);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function bringToFront(windowId) {
    setWindowIndexes({
      ...windowIndexes,
      [windowId]: nextZIndex
    });
    setNextZIndex(prev => prev + 1);
  }

  return (
    <div ref={containerRef} className={styles.windows}>
      <WindowContext.Provider
        value={{
          containerSize,
          windowIndexes,
          bringToFront,
          containerRef
        }}
      >
        {children}
      </WindowContext.Provider>
    </div>
  );
}

export default Windows;
