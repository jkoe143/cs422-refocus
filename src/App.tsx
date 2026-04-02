import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NudgePanel from "./components/NudgePanel";
import DistractionAlert from "./components/DistractionAlert";
import ClearYourHead from "./components/ClearYourHead";
import FocusMode from "./components/FocusMode";
import FakeYouTube from "./components/FakeYouTube";
import EssayEditor from "./components/EssayEditor";
import TabBar from "./components/TabBar";

type AppState =
  | "idle"
  | "nudge"
  | "working"
  | "distraction"
  | "clearhead"
  | "focus"
  | "submitted";

function App() {
  const [appState, setAppState] = useState<AppState>("idle");
  const [activeTab, setActiveTab] = useState<"essay" | "youtube">("youtube");

  useEffect(() => {
    if (appState === "idle") {
      const timer = setTimeout(() => {
        setAppState("nudge");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const getBorderStyle = () => {
    if (appState === "distraction") return "3px solid #ef5350";
    if (appState === "focus") return "3px solid #4caf50";
    return "3px solid transparent";
  };

  const handleLetsStart = () => {
    setAppState("focus");
    setActiveTab("essay");
  };

  const handleYouTubePlay = () => {
    if (appState === "working" || appState === "focus") {
      setAppState("distraction");
    }
  };

  const handleRefocus = () => {
    setAppState("clearhead");
  };

  const handleStartFocusSession = () => {
    setAppState("focus");
    setActiveTab("essay");
  };

  const handleTabChange = (tab: "essay" | "youtube") => {
    setActiveTab(tab);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        outline: getBorderStyle(),
        transition: "outline 0.3s ease",
      }}
    >
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div style={{ display: "flex", flex: 1 }}>
        {appState === "nudge" && (
          <NudgePanel
            onStart={handleLetsStart}
            onLater={() => setAppState("working")}
          />
        )}

        {appState === "distraction" && (
          <DistractionAlert
            onRefocus={handleRefocus}
            onBreak={() => setAppState("working")}
          />
        )}

        {appState === "clearhead" && (
          <ClearYourHead onStart={handleStartFocusSession} />
        )}

        {appState === "focus" && (
          <FocusMode onSubmit={() => setAppState("submitted")} />
        )}

        <div style={{ flex: 1, overflow: "auto" }}>
          {appState === "submitted" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100%",
                padding: "40px",
              }}
            >
              <div
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  backgroundColor: "#1e1e1e",
                  borderRadius: "16px",
                  padding: "48px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  textAlign: "center",
                  border: "1px solid #4caf50",
                }}
              >
                <div style={{ fontSize: "56px", marginBottom: "16px" }}>✓</div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    marginBottom: "8px",
                    color: "#4caf50",
                  }}
                >
                  Essay Submitted!
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "20px",
                  }}
                >
                  Submitted at 10:58 PM — before the deadline!
                </div>
                <div
                  style={{
                    backgroundColor: "#2a2a2a",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "13px",
                    color: "#4caf50",
                    marginBottom: "20px",
                  }}
                >
                  Great work staying focused, Jack!
                </div>
                <button
                  onClick={() => setAppState("idle")}
                  style={{
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px 28px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Start New Session
                </button>
              </div>
            </div>
          ) : activeTab === "essay" ? (
            <EssayEditor />
          ) : (
            <FakeYouTube onPlay={handleYouTubePlay} />
          )}
        </div>

        <Sidebar
          currentTask="English Essay"
          deadline="11:00 PM"
          appState={appState}
        />
      </div>
    </div>
  );
}

export default App;
