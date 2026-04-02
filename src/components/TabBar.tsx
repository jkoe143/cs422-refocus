interface TabBarProps {
  activeTab: "essay" | "youtube";
  onTabChange: (tab: "essay" | "youtube") => void;
}

function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        padding: "8px 16px",
        backgroundColor: "#1a1a1a",
        borderBottom: "1px solid #333",
      }}
    >
      {["essay", "youtube"].map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab as "essay" | "youtube")}
          style={{
            padding: "6px 16px",
            borderRadius: "8px 8px 0 0",
            border: "1px solid #333",
            borderBottom:
              activeTab === tab ? "2px solid #4caf50" : "1px solid #333",
            backgroundColor: activeTab === tab ? "#2a2a2a" : "#1e1e1e",
            color: activeTab === tab ? "#fff" : "#888",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: activeTab === tab ? "bold" : "normal",
            transition: "all 0.2s ease",
          }}
        >
          {tab === "essay" ? "📄 Essay" : "▶ YouTube"}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
