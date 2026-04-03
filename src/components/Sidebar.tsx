import "./Sidebar.css";

interface SidebarProps {
  currentTask: string;
  deadline: string;
  appState: string;
  remainingSeconds: number;
  usedSeconds: number;
  thoughts: string[];
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
  onNudgeClick,
  onClearYourHeadClick,
  onEmergencyQuit,
  onResumeFocus,
}: SidebarProps) {
  const isRunning = appState === "focus";
  const isPaused = appState === "paused";
  const isSubmitted = appState === "submitted";

  const timerSeconds = isSubmitted ? usedSeconds : remainingSeconds;
  const minutes = Math.floor(timerSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timerSeconds % 60).toString().padStart(2, "0");

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
            allow="autoplay"
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
        <button
          className="sidebar__button sidebar__button--quit"
          onClick={onEmergencyQuit}
        >
          ✕ Emergency Quit
        </button>
      )}

      {thoughts.length > 0 && (
        <div className="sidebar__thoughts">
          <div className="sidebar__thoughts-title">Saved Thoughts</div>
          {thoughts.map((t, i) => (
            <div key={i} className="sidebar__thought-item">
              {t}
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
