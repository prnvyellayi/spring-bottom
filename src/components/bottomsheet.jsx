import styles from "../css/bottomsheet.module.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BottomSheet = ({ snap }) => {
  const height = window.innerHeight;
  const bottomsheet = document.getElementById("bottomsheet");

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ y: 0 });
  const [initialMousePosition, setInitialMousePosition] = useState(null);

  useEffect(() => {
    switch (snap) {
      case "close":
        setPosition({ y: 0 });
        break;
      case "half":
        setPosition({
          y: -250,
        });
        break;
      case "full":
        setPosition({ y: -500 });
        break;
    }
  }, [snap]);

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
    } else if (bottom < (7 * height) / 12 && bottom > height / 4) {
      setPosition({
        y: -250,
      });
    } else if (bottom < height / 4) {
      setPosition({
        y: -500,
      });
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setInitialMousePosition({ y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);
    const bottom = bottomsheet.getBoundingClientRect().top;
    if (bottom > (7 * height) / 12) {
      setPosition({
        y: 0,
      });
    } else if (bottom < (7 * height) / 12 && bottom > height / 4) {
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
        drag={'y'}
        dragConstraints={{ top: "71.5vh" }}
        transition={{ type: "spring" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        id="bottomsheet"
      >
        <div className={styles.bottomsheet}>
          <span className={styles.bottomdragger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </span>
          <div className={styles.bottomcontent}>
            <p className={styles.para}>
              This content is inside the bottom sheet I implemented.
              <br />
              <br />
              The logics used to enable drag this section is purely javascript
              based, with handle mouse events.
              <br />
              <br />
              The animations used to show spring motions are made possible with
              frmer animations provided by react. This helped to animate the
              bottom sheet while reaching the snap points.
              <br />
              <br />
              For snap points I have implemented logics to resize the window
              whenever the drag released at a range nearest to any snap points.
              <br />
              <br />
              <button
                className={styles.button}
                onClick={() => {
                  setPosition({ y: 0 });
                }}
              >
                Close sheet
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomSheet;
