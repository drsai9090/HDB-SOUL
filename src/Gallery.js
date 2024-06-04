import React, { useEffect, useRef } from 'react';
import './Gallery.css';

function Gallery() {
  const birthdayVideoRef = useRef(null);

  useEffect(() => {
    const video = birthdayVideoRef.current;

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
    <div className="gallery-container">
      <header className="header">
        <h1 className="title">Grateful that you arrived on this planet during Ben 10's lifetime.</h1>
      </header>
      <main className="main-content">
        <div className="video-container">
          <video ref={birthdayVideoRef} className="birthday-video" controls>
            <source src={`${process.env.PUBLIC_URL}/birthday-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
