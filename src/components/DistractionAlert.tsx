import "./DistractionAlert.css";

interface DistractionAlertProps {
  onRefocus: () => void;
  onBreak: () => void;
}

function DistractionAlert({ onRefocus, onBreak }: DistractionAlertProps) {
  return (
    <div className="distraction-alert">
      <div className="distraction-alert__icon">☕</div>
      <div className="distraction-alert__title">Quick Check-in</div>
      <div className="distraction-alert__subtitle">
        It looks like your attention got distracted for a moment.
      </div>
      <div className="distraction-alert__tab-notice">
        That happens. Want to come back to the essay or take a short break?
      </div>
      <div className="distraction-alert__callout">
        You are still on track. Pick the next step that feels right.
      </div>
      <div className="distraction-alert__actions">
        <button
          onClick={onRefocus}
          className="distraction-alert__button distraction-alert__button--primary"
        >
          Return to Essay
        </button>
        <button
          onClick={onBreak}
          className="distraction-alert__button distraction-alert__button--secondary"
        >
          Take a Short Break
        </button>
      </div>
    </div>
  );
}

export default DistractionAlert;
