import "./DistractionAlert.css";

interface DistractionAlertProps {
  onRefocus: () => void;
  onBreak: () => void;
}

function DistractionAlert({ onRefocus, onBreak }: DistractionAlertProps) {
  return (
    <div className="distraction-alert">
      <div className="distraction-alert__icon">🚨</div>
      <div className="distraction-alert__title">Distraction Alert</div>
      <div className="distraction-alert__subtitle">
        Still working on your English Essay?
      </div>
      <div className="distraction-alert__tab-notice">
        📋 Tab switch detected — non-essay tab opened
      </div>
      <div className="distraction-alert__callout">
        ⚠️ Deadline is approaching!
      </div>
      <div className="distraction-alert__actions">
        <button
          onClick={onRefocus}
          className="distraction-alert__button distraction-alert__button--primary"
        >
          Yes, Refocus
        </button>
        <button
          onClick={onBreak}
          className="distraction-alert__button distraction-alert__button--secondary"
        >
          Taking a Break
        </button>
      </div>
    </div>
  );
}

export default DistractionAlert;
