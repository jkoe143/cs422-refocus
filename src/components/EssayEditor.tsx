import { useState } from "react";

import "./EssayEditor.css";

function EssayEditor() {
  const [content, setContent] = useState(
    `F. Scott Fitzgerald's The Great Gatsby employs rich symbolism to explore themes of the American Dream and moral decay in 1920s America. The green light at the end of Daisy's dock represents Gatsby's longing for an idealized past that can never be recaptured.\n\n`,
  );
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="essay-editor">
      <div className="essay-editor__shell">
        <div className="essay-editor__meta">
          <div className="essay-editor__meta-label">
            English Literature — Due 11:00 PM
          </div>
          <div className="essay-editor__meta-count">{wordCount} words</div>
        </div>

        <div className="essay-editor__card">
          <div className="essay-editor__toolbar">
            {["B", "I", "U"].map((fmt) => (
              <button
                key={fmt}
                className={`essay-editor__format ${fmt === "B" ? "essay-editor__format--bold" : ""} ${fmt === "I" ? "essay-editor__format--italic" : ""} ${fmt === "U" ? "essay-editor__format--underline" : ""}`}
              >
                {fmt}
              </button>
            ))}
            <div className="essay-editor__divider" />
            <select className="essay-editor__select">
              <option>Normal Text</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
            </select>
          </div>

          <input
            type="text"
            defaultValue="The Role of Symbolism in The Great Gatsby"
            className="essay-editor__title"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="essay-editor__body"
          />
        </div>

        <div className="essay-editor__actions">
          <button className="essay-editor__save">Save Draft</button>
        </div>
      </div>
    </div>
  );
}

export default EssayEditor;
