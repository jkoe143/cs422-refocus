interface SidebarProps {
  currentTask: string;
  deadline: string;
  appState: string;
}

function Sidebar({ currentTask, deadline, appState }: SidebarProps) {
  const isRunning = appState === "focus";

  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        borderLeft: "1px solid #333",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        boxShadow: "-2px 0 12px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#4caf50",
          letterSpacing: "2px",
          paddingBottom: "12px",
          borderBottom: "1px solid #333",
        }}
      >
        REFOCUS
      </div>

      <div
        style={{
          backgroundColor: "#2a2a2a",
          borderRadius: "10px",
          padding: "14px",
          border: "1px solid #444",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            textTransform: "uppercase",
            marginBottom: "6px",
            letterSpacing: "1px",
          }}
        >
          Current Task
        </div>
        <div style={{ fontWeight: "bold", fontSize: "15px", color: "#fff" }}>
          {currentTask}
        </div>
        <div style={{ fontSize: "12px", color: "#ef5350", marginTop: "4px" }}>
          Due at {deadline}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#2a2a2a",
          borderRadius: "10px",
          padding: "14px",
          border: isRunning ? "1px solid #4caf50" : "1px solid #444",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            textTransform: "uppercase",
            marginBottom: "6px",
            letterSpacing: "1px",
          }}
        >
          Focus Timer
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: isRunning ? "#4caf50" : "#fff",
          }}
        >
          25:00
        </div>
        {isRunning && (
          <div style={{ fontSize: "11px", color: "#4caf50", marginTop: "4px" }}>
            ● RUNNING
          </div>
        )}
      </div>

      {isRunning && (
        <div
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "10px",
            padding: "14px",
            border: "1px solid #444",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              color: "#888",
              textTransform: "uppercase",
              marginBottom: "8px",
              letterSpacing: "1px",
            }}
          >
            Now Playing
          </div>
          <div
            style={{ fontSize: "13px", color: "#fff", marginBottom: "10px" }}
          >
            Lo-Fi Study Beats
          </div>
          <iframe
            width="100%"
            height="80"
            src="https://www.youtube.com/embed/RG2IK8oRZNA?autoplay=1&controls=1"
            allow="autoplay"
            style={{ borderRadius: "8px", border: "none" }}
          />
        </div>
      )}

      <button
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #f9a825",
          borderRadius: "10px",
          padding: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "13px",
          color: "#f9a825",
          textAlign: "left",
        }}
      >
        🔔 Nudge
      </button>

      <button
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #4caf50",
          borderRadius: "10px",
          padding: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "13px",
          color: "#4caf50",
          textAlign: "left",
        }}
      >
        📝 Clear Your Head
      </button>

      <button
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #ef5350",
          borderRadius: "10px",
          padding: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "13px",
          color: "#ef5350",
          textAlign: "left",
        }}
      >
        ✕ Emergency Quit
      </button>

      <div
        style={{
          marginTop: "auto",
          fontSize: "11px",
          color: "#555",
          textAlign: "center",
        }}
      >
        ● {appState === "focus" ? "Focusing" : "Idle"}
      </div>
    </div>
  );
}

export default Sidebar;
