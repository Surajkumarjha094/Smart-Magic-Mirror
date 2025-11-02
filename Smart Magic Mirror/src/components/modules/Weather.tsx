import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';

export const Weather = () => {
  // Mock weather data - in real implementation, fetch from weather API
  const weatherData = {
    temperature: 22,
    condition: 'partly-cloudy',
    high: 26,
    low: 18,
    location: 'New York',
    humidity: 65,
    windSpeed: 12
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-warning" />;
      case 'cloudy':
        return <Cloud className="w-12 h-12 text-muted-foreground" />;
      case 'partly-cloudy':
        return <Cloud className="w-12 h-12 text-muted-foreground" />;
      case 'rainy':
        return <CloudRain className="w-12 h-12 text-accent" />;
      case 'snowy':
        return <Snowflake className="w-12 h-12 text-foreground" />;
      default:
        return <Sun className="w-12 h-12 text-warning" />;
    }
  };

  return (
    <div className="mirror-module text-right">
      <div className="flex items-center justify-end mb-4">
        {getWeatherIcon(weatherData.condition)}
        <div className="ml-4">
          <div className="text-4xl font-light mirror-text-primary">
            {weatherData.temperature}°
          </div>
          <div className="mirror-text-secondary text-sm">
            {weatherData.location}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="mirror-text-secondary text-sm">High / Low</span>
          <span className="mirror-text-primary text-sm">{weatherData.high}° / {weatherData.low}°</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="mirror-text-secondary text-sm">Humidity</span>
          <span className="mirror-text-primary text-sm">{weatherData.humidity}%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="mirror-text-secondary text-sm">Wind</span>
          <span className="mirror-text-primary text-sm">{weatherData.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};