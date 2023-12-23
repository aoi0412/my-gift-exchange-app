import React, { useState, useEffect, useRef } from "react";

const YoutubePartyApp = () => {
  const [playing, setPlaying] = useState(false);
  const youtubePlayerRef = useRef(null);

  useEffect(() => {
    // YouTube IFrame Player APIのロード
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = loadYoutubePlayer;
  }, []);

  const loadYoutubePlayer = () => {
    youtubePlayerRef.current = new window.YT.Player("youtube-player", {
      height: "360",
      width: "640",
      videoId: "YOUR_VIDEO_ID", // ここにYouTube動画IDを設定
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = (event) => {
    // プレーヤーの準備ができたら、ここで何かアクションを行う
  };

  const handlePlay = () => {
    const randomTime = Math.floor(Math.random() * 120) + 1; // 1から120秒のランダムな時間
    setPlaying(true);
    youtubePlayerRef.current.playVideo();

    setTimeout(() => {
      youtubePlayerRef.current.pauseVideo();
      setPlaying(false);
    }, randomTime * 1000); // ミリ秒に変換
  };

  return (
    <div>
      <div style={{ opacity: 0 }} id="youtube-player"></div>
      <button onClick={handlePlay} disabled={playing}>
        {playing ? "再生中..." : "プレゼント交換開始！"}
      </button>
    </div>
  );
};

export default YoutubePartyApp;
