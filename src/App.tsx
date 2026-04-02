import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NudgePanel from "./components/NudgePanel";
import DistractionAlert from "./components/DistractionAlert";
import ClearYourHead from "./components/ClearYourHead";
import FocusMode from "./components/FocusMode";
import FakeYouTube from "./components/FakeYouTube";
import EssayEditor from "./components/EssayEditor";
import TabBar from "./components/TabBar";

import "./App.css";

type AppState =
  | "idle"
  | "nudge"
  | "working"
  | "distraction"
  | "clearhead"
  | "focus"
  | "submitted";

function App() {
  const FOCUS_DURATION_SECONDS = 25 * 60;
  const [appState, setAppState] = useState<AppState>("idle");
  const [activeTab, setActiveTab] = useState<"essay" | "youtube">("youtube");
  const [focusSeconds, setFocusSeconds] = useState(FOCUS_DURATION_SECONDS);

  useEffect(() => {
    if (appState !== "focus") {
      return;
    }

    const interval = window.setInterval(() => {
      setFocusSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [appState]);

  useEffect(() => {
    if (appState === "idle") {
      const timer = setTimeout(() => {
        setAppState("nudge");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

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

  const handleStartNewSession = () => {
    setFocusSeconds(FOCUS_DURATION_SECONDS);
    setAppState("idle");
  };

  const appShellClassName = [
    "app-shell",
    appState === "distraction" ? "app-shell--distraction" : "",
    appState === "focus" ? "app-shell--focus" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={appShellClassName}>
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="app-shell__content">
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
          <FocusMode
            onSubmit={() => setAppState("submitted")}
            remainingSeconds={focusSeconds}
          />
        )}

        <div className="app-shell__workspace">
          {appState === "submitted" ? (
            <div className="submission-state">
              <div className="submission-state__card">
                <div className="submission-state__check">✓</div>
                <div className="submission-state__title">Essay Submitted!</div>
                <div className="submission-state__meta">
                  Submitted at 10:58 PM — before the deadline!
                </div>
                <div className="submission-state__message">
                  Great work staying focused, Jack!
                </div>
                <button
                  onClick={handleStartNewSession}
                  className="submission-state__button"
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
          remainingSeconds={focusSeconds}
        />
      </div>
    </div>
  );
}

export default App;
