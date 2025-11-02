import { useEffect, useState } from 'react';

export const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [userName] = useState('User'); // In real implementation, get from settings/profile

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour < 12) {
        setGreeting('Good morning');
      } else if (hour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h1 className="mirror-text-primary text-3xl md:text-4xl font-light mb-2">
        {greeting}, {userName}!
      </h1>
      <div className="flex items-center justify-center">
        <div className="h-px bg-accent w-16 mr-3"></div>
        <div className="mirror-status-dot bg-accent"></div>
        <div className="h-px bg-accent w-16 ml-3"></div>
      </div>
    </div>
  );
};