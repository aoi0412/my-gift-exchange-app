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
      videoId: "yXQViqx6GMY", // ここにYouTube動画IDを設定
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = (event) => {
    // プレーヤーの準備ができたら、ここで何かアクションを行う
  };

  const handlePlay = () => {
    // 60から80秒のランダムな時間
    const randomTime = Math.floor(Math.random() * 20) + 60;
    setPlaying(true);
    youtubePlayerRef.current.playVideo();

    setTimeout(() => {
      youtubePlayerRef.current.pauseVideo();
      setPlaying(false);
    }, randomTime * 1000); // ミリ秒に変換
  };

  return (
    <div>
      <div
        id="youtube-player"
        // style={{ opacity: 0 }}
      ></div>
      <button onClick={handlePlay} disabled={playing}>
        {playing ? "再生中..." : "プレゼント交換開始！"}
      </button>
    </div>
  );
};

export default YoutubePartyApp;
