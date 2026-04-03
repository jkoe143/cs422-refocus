import { useState } from "react";
import "./ClearYourHead.css";

interface ClearYourHeadProps {
  onSave: (thought: string) => void;
}

function ClearYourHead({ onSave }: ClearYourHeadProps) {
  const [thought, setThought] = useState("");

  return (
    <div className="clear-your-head">
      <div className="clear-your-head__icon">🧠</div>
      <div className="clear-your-head__title">Clear Your Head</div>
      <div className="clear-your-head__subtitle">
        Write down what's on your mind to clear it out
      </div>
      <textarea
        className="clear-your-head__textarea"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        placeholder="e.g. That basketball play was incredible..."
      />
      <div className="clear-your-head__actions">
        <button
          className="clear-your-head__button clear-your-head__button--primary"
          onClick={() => onSave(thought)}
        >
          Save Thoughts
        </button>
        <button
          className="clear-your-head__button clear-your-head__button--secondary"
          onClick={() => onSave("")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ClearYourHead;
