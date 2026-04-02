import "./Sidebar.css";

interface SidebarProps {
  currentTask: string;
  deadline: string;
  appState: string;
  remainingSeconds: number;
}

function Sidebar({
  currentTask,
  deadline,
  appState,
  remainingSeconds,
}: SidebarProps) {
  const isRunning = appState === "focus";

  const minutes = Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingSeconds % 60).toString().padStart(2, "0");

  return (
    <div className="sidebar">
      <div className="sidebar__brand">REFOCUS</div>

      <div className="sidebar__card">
        <div className="sidebar__label">Current Task</div>
        <div className="sidebar__task">{currentTask}</div>
        <div className="sidebar__deadline">Due at {deadline}</div>
      </div>

      <div
        className={`sidebar__card ${isRunning ? "sidebar__card--running" : ""}`}
      >
        <div className="sidebar__label">Focus Timer</div>
        <div
          className={`sidebar__timer ${isRunning ? "sidebar__timer--running" : ""}`}
        >
          {minutes}:{seconds}
        </div>
        {isRunning && <div className="sidebar__running">● RUNNING</div>}
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

      <button className="sidebar__button sidebar__button--nudge">
        🔔 Nudge
      </button>

      <button className="sidebar__button sidebar__button--clear">
        📝 Clear Your Head
      </button>

      <button className="sidebar__button sidebar__button--quit">
        ✕ Emergency Quit
      </button>

      <div className="sidebar__status">
        ● {appState === "focus" ? "Focusing" : "Idle"}
      </div>
    </div>
  );
}

export default Sidebar;
