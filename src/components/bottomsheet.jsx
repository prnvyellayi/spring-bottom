import styles from "../css/bottomsheet.module.css";
import React, { useState, useEffect } from "react";
import { useSpring, motion, useMotionValue } from "framer-motion";

const BottomSheet = () => {
  const height = window.innerHeight;

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: height - 25 });
  const [initialMousePosition, setInitialMousePosition] = useState(null);

  const x = useSpring(0);

  useEffect(() => {
    x.set(position);
  }, [position]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMousePosition({ x: 0, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    // const deltaX = e.clientX - initialMousePosition.x;
    const deltaY = initialMousePosition.y - e.clientY;

    setPosition({
      x: 0,
      y: position.y - deltaY,
    });

    setInitialMousePosition({ x: 0, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const deltaY = initialMousePosition.y - e.clientY;
    if (position.y - deltaY > (5 * height) / 6) {
      setPosition({
        x: 0,
        y: height - 25,
      });
    } else if (
      position.y - deltaY < (5 * height) / 6 &&
      position.y - deltaY > height / 2
    ) {
      setPosition({
        x: 0,
        y: (2 * height) / 3,
      });
    } else if (position.y - deltaY < height / 2) {
      setPosition({
        x: 0,
        y: height / 3,
      });
    }
  };

  return (
    <>
      <motion.div style={{ x }}>
        <div
          className={styles.bottomsheet}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            left: position.x,
            top: position.y,
          }}
          id="bottomsheet"
        >
          <span className={styles.bottomdragger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </span>
          <div className={styles.bottomcontent}>
            <p>
              This content is inside the bottom sheet I implemented.
              <br />
              The logics used to enable drag this section is purely javascript
              based, with handle mouse events
              <br />
              The animations used to show spring motions are made possible with
              pure css animation keyframes (I actually try to build all
              animations like that, gives you power of doing anything with it).
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomSheet;
