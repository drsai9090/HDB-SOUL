import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2003-06-15T07:10:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = now - targetDate;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="cheers-gif-container">
          <img
            src={`${process.env.PUBLIC_URL}/cheers.gif`}
            className="cheers-gif"
            alt="cheers to your 21st bday"
          />
          <div className="overlay"></div> {/* Add a gray transparent overlay */}
        </div>
        <div className="cheers-text">
          <span>Cheers To Your 21st</span>
        </div>
        <div className="tagline">
          The earth has been witnessing your spark since...
        </div>
        <div className="countdown">
          <div className="countdown-item">
            <span>{timeLeft.days}</span> Days
          </div>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span> Hours
          </div>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span> Minutes
          </div>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span> Seconds
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
