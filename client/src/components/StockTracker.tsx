import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { fruitsDatabase } from "@/lib/fruitsDatabase";

interface StockTrackerProps {
  className?: string;
  isPreview?: boolean; // Show limited items for homepage preview
}

export function StockTracker({ className, isPreview = false }: StockTrackerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 44,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          // Reset to next stock cycle
          return { hours: 4, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stockFruits = Object.entries(fruitsDatabase)
    .filter(([_, fruit]) => fruit.inStock)
    .slice(0, isPreview ? 6 : 3);

  if (isPreview) {
    return (
      <Card className="glass-effect rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <i className="fas fa-store text-secondary mr-2"></i>
            Current Stock
          </h3>
          <div className="flex items-center space-x-2 text-sm">
            <i className="fas fa-clock text-primary"></i>
            <span className="text-muted-foreground">Next Stock:</span>
            <div className="countdown-digit px-2 py-1 rounded text-xs font-mono bg-muted">
              {timeLeft.hours}H {timeLeft.minutes}M
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stockFruits.map(([name, fruit]) => (
            <div key={name} className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src={fruit.imageUrl} 
                  alt={name} 
                  className="w-8 h-8 rounded object-contain bg-background/50 p-1"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIxNiIgeT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
                  }}
                />
                <span className="text-green-500 text-xs">✓</span>
              </div>
              <div className="text-xs font-medium">{name}</div>
              <div className="text-xs text-muted-foreground">{fruit.rarity}</div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-border/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fas fa-clock text-primary"></i>
              <span className="text-sm font-medium">Next Stock:</span>
              <div className="flex items-center space-x-1" data-testid="stock-countdown">
                <div className="countdown-digit px-2 py-1 rounded text-sm font-mono" data-testid="hours-countdown">
                  {timeLeft.hours}H
                </div>
                <div className="countdown-digit px-2 py-1 rounded text-sm font-mono" data-testid="minutes-countdown">
                  {timeLeft.minutes}M
                </div>
                <div className="countdown-digit px-2 py-1 rounded text-sm font-mono" data-testid="seconds-countdown">
                  {timeLeft.seconds}S
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Current Stock:</span>
              <span className="text-primary font-medium" data-testid="current-stock">
                {stockFruits.map(([name]) => name).join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
