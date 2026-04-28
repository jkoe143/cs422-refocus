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
      <div className="clear-your-head__title">Clear Your Mind</div>
      <div className="clear-your-head__subtitle">
        Just write down whatever is on your mind so you can come back later.
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
          Save Thought
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
