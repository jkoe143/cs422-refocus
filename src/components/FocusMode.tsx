import "./FocusMode.css";

interface FocusModeProps {
  onSubmit: () => void;
  remainingSeconds: number;
}

function FocusMode({ onSubmit, remainingSeconds }: FocusModeProps) {
  const minutes = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="focus-mode">
      <div className="focus-mode__status">Focus session in progress...</div>
      <div className="focus-mode__timer">{formatted}</div>
      <button onClick={onSubmit} className="focus-mode__button">
        Submit Essay
      </button>
    </div>
  );
}

export default FocusMode;
