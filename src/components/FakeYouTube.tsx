interface FakeYouTubeProps {
  onPlay: () => void;
}

import "./FakeYouTube.css";

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
    <div className="fake-youtube">
      <div className="fake-youtube__main">
        <div className="fake-youtube__player" onClick={onPlay}>
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=720&q=80"
            alt="thumbnail"
            className="fake-youtube__thumbnail"
          />
          <div className="fake-youtube__play-button">
            <div className="fake-youtube__play-icon" />
          </div>
        </div>

        <div className="fake-youtube__info-block">
          <div className="fake-youtube__title">
            NBA Top 10 Plays of the Week
          </div>
          <div className="fake-youtube__meta">
            2.4M views · 3 days ago · NBA
          </div>
          <div className="fake-youtube__actions">
            {["👍 84K", "👎 Dislike", "↗ Share", "+ Save"].map((action) => (
              <button key={action} className="fake-youtube__chip">
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="fake-youtube__description-card">
          <div className="fake-youtube__channel">NBA · 18.7M subscribers</div>
          <div className="fake-youtube__description">
            The official YouTube channel of the NBA. Watch the best plays from
            around the league every week including dunks, assists, blocks and
            more...
          </div>
        </div>
      </div>

      <div className="fake-youtube__sidebar">
        <div className="fake-youtube__up-next">Up next</div>
        {sideVideos.map((video, index) => (
          <div key={index} className="fake-youtube__video">
            <img
              src={video.img}
              alt={video.title}
              className="fake-youtube__video-thumb"
            />
            <div>
              <div className="fake-youtube__video-title">{video.title}</div>
              <div className="fake-youtube__video-meta">
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
