import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
   }, []);

   const formatTime = (time) => {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

      const amPm = hours < 12 ? 'AM' : 'PM';

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
   };

   return (
      <div className='clock'>
         <div className='clock-face'>
            <div
               className='hand hour-hand'
               style={{
                  transform: `rotate(${
                     (time.getHours() + time.getMinutes() / 60) * 30
                  }deg)`,
               }}
            />
            <div
               className='hand minute-hand'
               style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
            />
            <div
               className='hand second-hand'
               style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
            />
            <div className='center-point' />
         </div>
         <div className='time'>{formatTime(time)}</div>
      </div>
   );
};

export default Clock;
