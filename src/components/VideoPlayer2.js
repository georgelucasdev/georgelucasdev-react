import React, { useRef, useEffect } from 'react';
import Video2 from '../img/luz-efeitos.mp4';


const VideoPlayer2 = () => {
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
    <video ref={videoRef} style={{ width: '550px', height: '500px' }} muted loop>
      <source src={Video2} type="video/mp4" />
      Seu navegador não suporta a reprodução de vídeo.
    </video>
  );
};

export default VideoPlayer2;

