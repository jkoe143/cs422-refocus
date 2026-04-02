interface NudgePanelProps {
  onStart: () => void;
  onLater: () => void;
}

function NudgePanel({ onStart, onLater }: NudgePanelProps) {
  const now = new Date();
  const deadline = new Date();
  deadline.setHours(23, 0, 0, 0);
  const diffMs = deadline.getTime() - now.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

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
        border: "1px solid #f9a825",
        width: "340px",
        zIndex: 1000,
      }}
    >
      <div
        style={{ fontSize: "24px", marginBottom: "8px", textAlign: "center" }}
      >
        ⏰
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "8px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Hey Jack!
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "#aaa",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Your English Essay is due in{" "}
        <span style={{ color: "#f9a825", fontWeight: "bold" }}>
          {diffHrs}h {diffMins}m
        </span>{" "}
        and you haven't started yet!
      </div>
      <div
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #f9a825",
          borderRadius: "10px",
          padding: "12px",
          fontSize: "13px",
          color: "#f9a825",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        💡 Try starting with a simple outline
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onStart}
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
          Let's Start
        </button>
        <button
          onClick={onLater}
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
          Later
        </button>
      </div>
    </div>
  );
}

export default NudgePanel;
