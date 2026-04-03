import { useState, useRef } from "react";
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
  | "paused"
  | "submitted";

function App() {
  const FOCUS_DURATION_SECONDS = 25 * 60;
  const [appState, setAppState] = useState<AppState>("idle");
  const [activeTab, setActiveTab] = useState<"essay" | "youtube">("youtube");
  const [focusSeconds, setFocusSeconds] = useState(FOCUS_DURATION_SECONDS);
  const usedFocusSeconds = Math.max(FOCUS_DURATION_SECONDS - focusSeconds, 0);

  const [thoughts, setThoughts] = useState<string[]>([]);
  const [showNudge, setShowNudge] = useState(false);
  const [showClearYourHead, setShowClearYourHead] = useState(false);
  const [showRefocusSuggestion, setShowRefocusSuggestion] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setFocusSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleNudgeClick = () => {
    setShowNudge(true);
  };

  const handleLetsStart = () => {
    setShowNudge(false);
    setFocusSeconds(FOCUS_DURATION_SECONDS);
    setAppState("focus");
    setActiveTab("essay");
    startTimer();
  };

  const handleNudgeLater = () => {
    setShowNudge(false);
  };

  const handleTabChange = (tab: "essay" | "youtube") => {
    if (appState === "focus" && tab === "youtube") {
      setAppState("distraction");
      stopTimer();
      return;
    }
    setActiveTab(tab);
  };
  
  const handleRefocus = () => {
    setAppState("focus");
    setActiveTab("essay");
    setShowRefocusSuggestion(true);
    startTimer();
  };

  const handleTakeBreak = () => {
    setAppState("paused");
    setActiveTab("youtube");
  };

  const handleResumeFocus = () => {
    setAppState("focus");
    setActiveTab("essay");
    startTimer();
  };

  const handleClearYourHeadClick = () => {
    setShowClearYourHead(true);
    setShowRefocusSuggestion(false);
  };

  const handleSaveThoughts = (thought: string) => {
    if (thought.trim()) {
      setThoughts((prev) => [...prev, thought]);
    }
    setShowClearYourHead(false);
  };

  const handleEmergencyQuit = () => {
    stopTimer();
    setAppState("idle");
    setActiveTab("youtube");
    setShowNudge(false);
    setShowClearYourHead(false);
    setShowRefocusSuggestion(false);
  };

  const handleYouTubePlay = () => {
    if (appState === "paused") {
      return;
    }
  };

  const getBorderClass = () => {
    if (appState === "distraction") return "app-shell app-shell--distraction";
    if (appState === "focus") return "app-shell app-shell--focus";
    return "app-shell";
  };

  return (
    <div className={getBorderClass()}>
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="app-shell__content">
        {showNudge && (
          <NudgePanel onStart={handleLetsStart} onLater={handleNudgeLater} />
        )}

        {appState === "distraction" && (
          <DistractionAlert
            onRefocus={handleRefocus}
            onBreak={handleTakeBreak}
          />
        )}

        {showClearYourHead && <ClearYourHead onSave={handleSaveThoughts} />}

        {appState === "focus" && (
          <FocusMode
            onSubmit={() => {
              stopTimer();
              setAppState("submitted");
            }}
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
                  Great work staying focused!
                </div>
                <button
                  onClick={() => {
                    setAppState("idle");
                    setActiveTab("youtube");
                    setFocusSeconds(FOCUS_DURATION_SECONDS);
                    setThoughts([]);
                  }}
                  className="submission-state__button"
                >
                  Start New Session
                </button>
              </div>
            </div>
          ) : activeTab === "essay" ? (
            <EssayEditor
              showRefocusSuggestion={showRefocusSuggestion}
              onClearYourHead={handleClearYourHeadClick}
            />
          ) : (
            <FakeYouTube onPlay={handleYouTubePlay} />
          )}
        </div>

        <Sidebar
          currentTask="English Essay"
          deadline="11:00 PM"
          appState={appState}
          remainingSeconds={focusSeconds}
          usedSeconds={usedFocusSeconds}
          thoughts={thoughts}
          onNudgeClick={handleNudgeClick}
          onClearYourHeadClick={handleClearYourHeadClick}
          onEmergencyQuit={handleEmergencyQuit}
          onResumeFocus={handleResumeFocus}
        />
      </div>
    </div>
  );
}

export default App;
