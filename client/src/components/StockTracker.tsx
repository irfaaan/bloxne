import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { fruitsDatabase } from "@/lib/fruitsDatabase";

interface StockTrackerProps {
  className?: string;
}

export function StockTracker({ className }: StockTrackerProps) {
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
    .slice(0, 3);

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
