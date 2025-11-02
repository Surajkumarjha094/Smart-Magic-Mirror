import { useEffect, useState } from 'react';

export const TimeDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="mirror-module">
      <div className="mirror-time mb-2">
        {formatTime(currentTime)}
      </div>
      <div className="mirror-text-secondary text-lg tracking-wide">
        {formatDate(currentTime)}
      </div>
      <div className="flex items-center mt-2">
        <div className="mirror-status-dot bg-success mr-2"></div>
        <span className="mirror-text-secondary text-sm">System Active</span>
      </div>
    </div>
  );
};