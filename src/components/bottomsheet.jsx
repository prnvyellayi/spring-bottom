import styles from "../css/bottomsheet.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BottomSheet = () => {
  const height = window.innerHeight;
  const bottomsheet = document.getElementById("bottomsheet");

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ y: 0 });
  const [initialMousePosition, setInitialMousePosition] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMousePosition({ y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = initialMousePosition.y - e.clientY;

    setPosition({
      y: position.y - deltaY,
    });

    setInitialMousePosition({ y: e.clientY });
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const bottom = bottomsheet.getBoundingClientRect().top;
    if (bottom > (7 * height) / 12) {
      setPosition({
        y: 0,
      });
    } else if (
      bottom < (7 * height) / 12 &&
      bottom > height / 4
    ) {
      setPosition({
        y: -250,
      });
    } else if (bottom < height / 4) {
      setPosition({
        y: -500,
      });
    }
  };

  return (
    <>
      <motion.div
        className={styles.framerDiv}
        animate={position}
        drag={isDragging ? 'y' : ''}
        dragConstraints={{top: '71.5vh'}}
        transition={{ type: "spring" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        id="bottomsheet"
        >
        <div
          className={styles.bottomsheet}
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
              based, with handle mouse events.
              <br />
              The animations used to show spring motions are made possible with
              frmer animations provided by react. This helped to animate the bottom sheet
              while reaching the snap points.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomSheet;
