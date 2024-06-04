import React, { useEffect, useRef } from 'react';
import './Letter.css'; // Include Letter styles

function Letter() {
  const letterVideoRef = useRef(null);

  useEffect(() => {
    const video = letterVideoRef.current;

    if (video) {
      const playVideo = () => {
        setTimeout(() => {
          video.play().catch(error => {
            console.error("Error attempting to play the video:", error);
          });
        }, 2000);
      };

      video.addEventListener('loadeddata', playVideo);

      return () => {
        video.removeEventListener('loadeddata', playVideo);
      };
    }
  }, []);

  return (
    <div className="letter-page">
      <div className="video-container">
        <video ref={letterVideoRef} className="letter-video" controls>
          <source src={`${process.env.PUBLIC_URL}/letter.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Letter;
