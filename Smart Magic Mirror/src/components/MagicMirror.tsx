import { useEffect, useState } from 'react';
import { TimeDate } from './modules/TimeDate';
import { Greeting } from './modules/Greeting';
import { Weather } from './modules/Weather';
import { NewsTicker } from './modules/NewsTicker';
import { Calendar } from './modules/Calendar';
import { MusicPlayer } from './modules/MusicPlayer';
import { ToDoList } from './modules/ToDoList';

export const MagicMirror = () => {
  const [isActive, setIsActive] = useState(true);

  // Simulate motion sensor - auto-activate for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Mirror overlay for realistic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/[0.02] to-transparent pointer-events-none" />
      
      {isActive && (
        <div className="relative z-10 grid grid-cols-12 grid-rows-12 gap-4 p-6 h-screen animate-fade-in">
          {/* Top Left - Time & Date */}
          <div className="col-span-4 row-span-3 flex flex-col justify-start">
            <TimeDate />
          </div>
          
          {/* Top Center - Greeting */}
          <div className="col-span-4 row-span-2 flex items-center justify-center">
            <Greeting />
          </div>
          
          {/* Top Right - Weather */}
          <div className="col-span-4 row-span-3 flex flex-col justify-start">
            <Weather />
          </div>
          
          {/* Middle Left - Calendar */}
          <div className="col-span-3 row-span-4 col-start-1 row-start-4">
            <Calendar />
          </div>
          
          {/* Middle Center - To-Do List */}
          <div className="col-span-3 row-span-4 col-start-4 row-start-4">
            <ToDoList />
          </div>
          
          {/* Middle Right - Music Player */}
          <div className="col-span-3 row-span-4 col-start-7 row-start-4">
            <MusicPlayer />
          </div>
          
          {/* Bottom - News Ticker */}
          <div className="col-span-12 row-span-2 col-start-1 row-start-11 flex items-end">
            <NewsTicker />
          </div>
        </div>
      )}
    </div>
  );
};