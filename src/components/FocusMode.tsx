import "./FocusMode.css";

import { useState, useEffect } from "react";

interface FocusModeProps {
  onSubmit: () => void;
}

function FocusMode({ onSubmit }: FocusModeProps) {
  const [seconds, setSeconds] = useState(25 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="focus-mode">
      <div className="focus-mode__status">Focus session in progress...</div>
      <div className="focus-mode__timer">{formatted}</div>
      <button onClick={onSubmit} className="focus-mode__button">
        Submit Essay
      </button>
    </div>
  );
}

export default FocusMode;
