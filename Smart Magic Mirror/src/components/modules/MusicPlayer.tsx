import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import { useState } from 'react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mock music data - in real implementation, integrate with Spotify API
  const currentTrack = {
    title: "Ambient Focus",
    artist: "Study Beats",
    album: "Concentration",
    duration: "3:42",
    progress: 45 // percentage
  };

  return (
    <div className="mirror-module h-full">
      <div className="flex items-center mb-4">
        <Music className="w-6 h-6 text-accent mr-2" />
        <h3 className="mirror-text-primary text-xl font-light">Now Playing</h3>
      </div>
      
      <div className="space-y-4">
        {/* Album Art Placeholder */}
        <div className="w-32 h-32 bg-card rounded-lg border border-border/30 flex items-center justify-center mx-auto">
          <Music className="w-12 h-12 text-muted-foreground" />
        </div>
        
        {/* Track Info */}
        <div className="text-center">
          <div className="mirror-text-primary text-lg font-normal mb-1">
            {currentTrack.title}
          </div>
          <div className="mirror-text-secondary text-sm">
            {currentTrack.artist} • {currentTrack.album}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-border/30 rounded-full h-1">
            <div 
              className="bg-accent h-1 rounded-full transition-all duration-300"
              style={{ width: `${currentTrack.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mirror-text-secondary text-xs">
            <span>1:35</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button className="p-2 hover:bg-muted/20 rounded-full transition-colors">
            <SkipBack className="w-5 h-5 mirror-text-secondary" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-accent hover:bg-accent/80 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-background" />
            ) : (
              <Play className="w-6 h-6 text-background ml-0.5" />
            )}
          </button>
          <button className="p-2 hover:bg-muted/20 rounded-full transition-colors">
            <SkipForward className="w-5 h-5 mirror-text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};