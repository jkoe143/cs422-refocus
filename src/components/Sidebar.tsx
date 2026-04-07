import { useState } from "react";
import "./Sidebar.css";

interface SidebarProps {
  currentTask: string;
  deadline: string;
  appState: string;
  remainingSeconds: number;
  usedSeconds: number;
  thoughts: string[];
  setThoughts: React.Dispatch<React.SetStateAction<string[]>>;
  onNudgeClick: () => void;
  onClearYourHeadClick: () => void;
  onEmergencyQuit: () => void;
  onResumeFocus: () => void;
}

function Sidebar({
  currentTask,
  deadline,
  appState,
  remainingSeconds,
  usedSeconds,
  thoughts,
  setThoughts,
  onNudgeClick,
  onClearYourHeadClick,
  onEmergencyQuit,
  onResumeFocus,
}: SidebarProps) {
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const isRunning = appState === "focus";
  const isPaused = appState === "paused";
  const isSubmitted = appState === "submitted";

  const timerSeconds = isSubmitted ? usedSeconds : remainingSeconds;
  const minutes = Math.floor(timerSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timerSeconds % 60).toString().padStart(2, "0");

  const onDeleteThoughtClick = (thought: string) => {
    const updatedThoughts =thoughts.filter(item => item !== thought);
    setThoughts(updatedThoughts);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__brand">REFOCUS</div>

      <div className="sidebar__card">
        <div className="sidebar__label">Current Task</div>
        <div className="sidebar__task">{currentTask}</div>
        <div className="sidebar__deadline">Due at {deadline}</div>
      </div>

      <div
        className={`sidebar__card ${isRunning || isPaused ? "sidebar__card--running" : ""}`}
      >
        <div className="sidebar__label">
          {isSubmitted ? "You Used" : "Focus Timer"}
        </div>
        <div
          className={`sidebar__timer ${isRunning ? "sidebar__timer--running" : ""}`}
        >
          {minutes}:{seconds}
        </div>
        {isRunning && <div className="sidebar__running">● RUNNING</div>}
        {isPaused && <div className="sidebar__paused">⏸ PAUSED</div>}
      </div>

      {isRunning && (
        <div className="sidebar__card">
          <div className="sidebar__label">Now Playing</div>
          <div className="sidebar__track">Lo-Fi Study Beats</div>
          <iframe
            className="sidebar__iframe"
            width="100%"
            height="80"
            src="https://www.youtube.com/embed/RG2IK8oRZNA?autoplay=1&controls=1"
          />
        </div>
      )}

      {isPaused && (
        <button
          className="sidebar__button sidebar__button--resume"
          onClick={onResumeFocus}
        >
          ▶ Resume Focus
        </button>
      )}

      <button
        className="sidebar__button sidebar__button--nudge"
        onClick={onNudgeClick}
      >
        🔔 Nudge
      </button>

      <button
        className="sidebar__button sidebar__button--clear"
        onClick={onClearYourHeadClick}
      >
        📝 Clear Your Head
      </button>

      {(isRunning || isPaused) && (
        <>
          {showQuitConfirm ? (
            <div
              style={{
                padding: "12px",
                border: "1px solid #ef5350",
                borderRadius: "10px",
                backgroundColor: "#2a2a2a",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#ef5350",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Are you sure you want to quit your focus session?
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="sidebar__button sidebar__button--quit"
                  style={{ flex: 1, padding: "8px", fontSize: "12px" }}
                  onClick={() => {
                    setShowQuitConfirm(false);
                    onEmergencyQuit();
                  }}
                >
                  Yes, Quit
                </button>
                <button
                  className="sidebar__button sidebar__button--clear"
                  style={{ flex: 1, padding: "8px", fontSize: "12px" }}
                  onClick={() => setShowQuitConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              className="sidebar__button sidebar__button--quit"
              onClick={() => setShowQuitConfirm(true)}
            >
              ✕ Emergency Quit
            </button>
          )}
        </>
      )}

      {thoughts.length > 0 && (
        <div className="sidebar__thoughts">
          <div className="sidebar__thoughts-title">Saved Thoughts</div>
          {thoughts.map((t, i) => (
            <div key={i} className="sidebar__thought-item">
              {t}
              <div>
              <button className = "delete_btn" onClick={() => onDeleteThoughtClick(t)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="sidebar__status">
        ●{" "}
        {appState === "focus"
          ? "Focusing"
          : appState === "paused"
            ? "On Break"
            : "Idle"}
      </div>
    </div>
  );
}

export default Sidebar;
