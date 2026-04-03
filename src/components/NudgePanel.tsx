import "./NudgePanel.css";

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
    <div className="nudge-panel">
      <div className="nudge-panel__icon">⏰</div>
      <div className="nudge-panel__title">Heads Up!</div>
      <div className="nudge-panel__subtitle">
        Your English Essay is due in{" "}
        <span className="nudge-panel__deadline">
          {diffHrs}h {diffMins}m
        </span>{" "}
        and you haven't started yet!
      </div>
      <div className="nudge-panel__callout">
        💡 Try starting with a simple outline
      </div>
      <div className="nudge-panel__actions">
        <button
          onClick={onStart}
          className="nudge-panel__button nudge-panel__button--primary"
        >
          Let's Start
        </button>
        <button
          onClick={onLater}
          className="nudge-panel__button nudge-panel__button--secondary"
        >
          Later
        </button>
      </div>
    </div>
  );
}

export default NudgePanel;
