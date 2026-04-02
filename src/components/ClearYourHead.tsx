import { useState } from "react";
import "./ClearYourHead.css";

interface ClearYourHeadProps {
  onStart: () => void;
}

function ClearYourHead({ onStart }: ClearYourHeadProps) {
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
      <button className="clear-your-head__button" onClick={onStart}>
        Start Focus Session
      </button>
    </div>
  );
}

export default ClearYourHead;
