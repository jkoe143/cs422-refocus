import "./TabBar.css";

interface TabBarProps {
  activeTab: "essay" | "youtube";
  onTabChange: (tab: "essay" | "youtube") => void;
}

function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="tab-bar">
      {(["essay", "youtube"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`tab-bar__button ${activeTab === tab ? "tab-bar__button--active" : ""}`}
        >
          {tab === "essay" ? "📄 Essay" : "▶ YouTube"}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
