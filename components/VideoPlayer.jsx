import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ mp4Url, hlsUrl, poster }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let hls;
    if (hlsUrl && Hls.isSupported()) {
      hls = new Hls({ lowLatencyMode: true });
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(hlsUrl));
    } else if (hlsUrl && video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
    } else if (mp4Url) {
      video.src = mp4Url;
    }

    video.muted = true;
    video.playsInline = true;

    return () => {
      if (hls) hls.destroy();
    };
  }, [mp4Url, hlsUrl]);

  return (
    <video ref={ref} className="hero-video w-full" poster={poster} controls preload="none" />
  );
}
