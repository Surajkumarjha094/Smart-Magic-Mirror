export const NewsTicker = () => {
  // Mock news headlines - in real implementation, fetch from RSS/news API
  const headlines = [
    "Smart home technology reaches new milestone with AI integration",
    "Renewable energy adoption accelerates across major cities worldwide",
    "Tech innovation continues to reshape remote work practices",
    "Sustainable living trends gain momentum in urban planning",
    "Digital wellness becomes priority in modern lifestyle design"
  ];

  return (
    <div className="w-full overflow-hidden border-t border-border/30 pt-4">
      <div className="flex items-center mb-2">
        <div className="mirror-status-dot bg-accent mr-2"></div>
        <span className="mirror-text-secondary text-sm uppercase tracking-wider">Latest News</span>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="mirror-scroll whitespace-nowrap">
          <span className="mirror-text-primary text-lg font-light">
            {headlines.join(' • ')}
          </span>
        </div>
      </div>
    </div>
  );
};