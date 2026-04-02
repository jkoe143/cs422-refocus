interface DistractionAlertProps {
  onRefocus: () => void;
  onBreak: () => void;
}

function DistractionAlert({ onRefocus, onBreak }: DistractionAlertProps) {
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
        border: "2px solid #ef5350",
        width: "340px",
        zIndex: 1000,
      }}
    >
      <div
        style={{ fontSize: "24px", marginBottom: "8px", textAlign: "center" }}
      >
        🚨
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "8px",
          color: "#ef5350",
          textAlign: "center",
        }}
      >
        Distraction Alert
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "#aaa",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Still working on your English Essay?
      </div>
      <div
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #ef5350",
          borderRadius: "10px",
          padding: "12px",
          fontSize: "13px",
          color: "#ef5350",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        ⚠️ Deadline is approaching!
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onRefocus}
          style={{
            flex: 1,
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
          Yes, Refocus
        </button>
        <button
          onClick={onBreak}
          style={{
            flex: 1,
            backgroundColor: "#2a2a2a",
            color: "#888",
            border: "1px solid #444",
            borderRadius: "10px",
            padding: "12px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Taking a Break
        </button>
      </div>
    </div>
  );
}

export default DistractionAlert;
