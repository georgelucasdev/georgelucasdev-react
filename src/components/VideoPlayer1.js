import React, { useRef, useEffect } from 'react';
import Video1 from '../img/fundoMENU.mp4';


const VideoPlayer1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      videoElement.currentTime = 1;
      videoElement.play();
      console.log('O vídeo terminou de ser reproduzido.');
    };

    videoElement.addEventListener('ended', handleVideoEnd);
    videoElement.play();

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <video ref={videoRef} style={{ width: '1000px', height: '500px'}} muted loop>
      <source src={Video1} type="video/mp4" />
      Seu navegador não suporta a reprodução de vídeo.
    </video>
  );
};

export default VideoPlayer1;

