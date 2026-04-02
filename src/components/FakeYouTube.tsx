interface FakeYouTubeProps {
  onPlay: () => void;
}

const sideVideos = [
  {
    img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300&q=80",
    title: "NBA Best Dunks of the Month",
    views: "1.2M views",
  },
  {
    img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=300&q=80",
    title: "NBA Greatest Crossovers 2024",
    views: "3.1M views",
  },
  {
    img: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=300&q=80",
    title: "NBA Bloopers and Funny Moments",
    views: "890K views",
  },
  {
    img: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=300&q=80",
    title: "LeBron James Top 10 Plays",
    views: "5.4M views",
  },
  {
    img: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=300&q=80",
    title: "Stephen Curry Best Three Pointers",
    views: "4.2M views",
  },
];

function FakeYouTube({ onPlay }: FakeYouTubeProps) {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100%",
        padding: "32px 40px",
        display: "flex",
        gap: "24px",
      }}
    >
      <div style={{ flex: 1, maxWidth: "720px" }}>
        <div
          style={{
            backgroundColor: "#000",
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onClick={onPlay}
        >
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=720&q=80"
            alt="thumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.8,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "72px",
              height: "72px",
              backgroundColor: "rgba(255,0,0,0.9)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "14px solid transparent",
                borderBottom: "14px solid transparent",
                borderLeft: "22px solid white",
                marginLeft: "5px",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            NBA Top 10 Plays of the Week
          </div>
          <div
            style={{ fontSize: "13px", color: "#888", marginBottom: "12px" }}
          >
            2.4M views · 3 days ago · NBA
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              paddingBottom: "16px",
              borderBottom: "1px solid #333",
            }}
          >
            {["👍 84K", "👎 Dislike", "↗ Share", "+ Save"].map((action) => (
              <button
                key={action}
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #444",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: "#fff",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            NBA · 18.7M subscribers
          </div>
          <div style={{ fontSize: "13px", color: "#aaa", lineHeight: "1.6" }}>
            The official YouTube channel of the NBA. Watch the best plays from
            around the league every week including dunks, assists, blocks and
            more...
          </div>
        </div>
      </div>

      <div style={{ width: "280px" }}>
        <div
          style={{
            fontSize: "14px",
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          Up next
        </div>
        {sideVideos.map((video, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "12px",
              cursor: "pointer",
            }}
          >
            <img
              src={video.img}
              alt={video.title}
              style={{
                width: "120px",
                height: "68px",
                borderRadius: "8px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#fff",
                  marginBottom: "4px",
                  lineHeight: "1.4",
                }}
              >
                {video.title}
              </div>
              <div style={{ fontSize: "11px", color: "#888" }}>
                NBA · {video.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakeYouTube;
