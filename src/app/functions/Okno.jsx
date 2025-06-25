"use client";

import React, { useState, useEffect } from "react";
import "../Sass/_okno.scss";

// Custom hook to manage scroll locking
function useScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLocked]);
}

/**
 * @typedef {Object} OknoProps
 * @property {string} [title]
 * @property {string} [message]
 * @property {boolean} [initiallyOpen]
 */

/**
 * @param {OknoProps} props
 */
function Okno({
  title = "Upozornění",
  message = "Momentálně máme zavřeno",
  initiallyOpen = true,
}) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Use custom hook to lock scroll
  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match transition duration
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`okno-overlay ${isVisible ? "okno-overlay--visible" : ""}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="okno-title"
    >
      <div className={`okno-modal ${isVisible ? "okno-modal--visible" : ""}`}>
        <button
          className="okno-close-btn"
          onClick={handleClose}
          aria-label="Zavřít okno"
          type="button"
        >
          <span className="okno-close-icon">×</span>
        </button>
        <div className="okno-content">
          <h2 id="okno-title" className="okno-title">
            {title}
          </h2>
          <p className="okno-message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Okno;
