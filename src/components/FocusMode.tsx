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
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "45%",
        transform: "translateX(-50%)",
        backgroundColor: "#1e1e1e",
        borderRadius: "16px",
        padding: "16px 28px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        border: "1px solid #4caf50",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "13px", color: "#888" }}>
        Focus session in progress...
      </div>
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "#4caf50" }}>
        {formatted}
      </div>
      <button
        onClick={onSubmit}
        style={{
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        Submit Essay
      </button>
    </div>
  );
}

export default FocusMode;
