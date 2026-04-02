import { useState } from "react";

function EssayEditor() {
  const [content, setContent] = useState(
    `F. Scott Fitzgerald's The Great Gatsby employs rich symbolism to explore themes of the American Dream and moral decay in 1920s America. The green light at the end of Daisy's dock represents Gatsby's longing for an idealized past that can never be recaptured.\n\n`,
  );
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#121212",
        padding: "32px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            padding: "12px 20px",
            border: "1px solid #333",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "13px", color: "#888" }}>
            English Literature — Due 11:00 PM
          </div>
          <div style={{ fontSize: "12px", color: "#555" }}>
            {wordCount} words
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            border: "1px solid #333",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid #2a2a2a",
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {["B", "I", "U"].map((fmt) => (
              <button
                key={fmt}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #444",
                  borderRadius: "4px",
                  color: "#888",
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: fmt === "B" ? "bold" : "normal",
                  fontStyle: fmt === "I" ? "italic" : "normal",
                  textDecoration: fmt === "U" ? "underline" : "none",
                }}
              >
                {fmt}
              </button>
            ))}
            <div
              style={{ width: "1px", height: "20px", backgroundColor: "#333" }}
            />
            <select
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #444",
                borderRadius: "4px",
                color: "#888",
                padding: "4px 8px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <option>Normal Text</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
            </select>
          </div>

          <input
            type="text"
            defaultValue="The Role of Symbolism in The Great Gatsby"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #2a2a2a",
              padding: "20px 24px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#fff",
              outline: "none",
              fontFamily: "inherit",
            }}
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              minHeight: "400px",
              backgroundColor: "transparent",
              border: "none",
              padding: "20px 24px",
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#ccc",
              outline: "none",
              resize: "none",
              fontFamily: "Georgia, serif",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "8px",
              padding: "8px 20px",
              color: "#888",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}

export default EssayEditor;
