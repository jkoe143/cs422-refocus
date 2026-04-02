import { useState } from "react";

interface ClearYourHeadProps {
  onStart: () => void;
}

function ClearYourHead({ onStart }: ClearYourHeadProps) {
  const [thought, setThought] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "45%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#1e1e1e",
        borderRadius: "16px",
        padding: "28px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        border: "1px solid #4caf50",
        width: "340px",
        zIndex: 1000,
      }}
    >
      <div
        style={{ fontSize: "24px", marginBottom: "8px", textAlign: "center" }}
      >
        🧠
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "4px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Clear Your Head
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Write down what's on your mind to clear it out
      </div>
      <textarea
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        placeholder="e.g. That basketball play was incredible..."
        style={{
          width: "100%",
          height: "100px",
          borderRadius: "10px",
          border: "1px solid #444",
          padding: "12px",
          fontSize: "13px",
          resize: "none",
          outline: "none",
          marginBottom: "16px",
          fontFamily: "inherit",
          backgroundColor: "#2a2a2a",
          color: "#e0e0e0",
        }}
      />
      <button
        onClick={onStart}
        style={{
          width: "100%",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Start Focus Session
      </button>
    </div>
  );
}

export default ClearYourHead;
