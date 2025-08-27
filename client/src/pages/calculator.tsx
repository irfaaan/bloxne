import { useState } from "react";
import { TradeCalculator } from "@/components/TradeCalculator";
import { StockTracker } from "@/components/StockTracker";
import { FruitLibrary } from "@/components/FruitLibrary";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const [isPermanent, setIsPermanent] = useState(false);

  const handleModeChange = (mode: 'regular' | 'permanent') => {
    setIsPermanent(mode === 'permanent');
  };

  const handleFruitClick = (fruitName: string) => {
    // This would integrate with the trade calculator to add fruits
    console.log('Selected fruit:', fruitName);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="glass-effect border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <i className="fas fa-calculator text-primary-foreground text-lg"></i>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    BloxCalc Pro
                  </h1>
                  <p className="text-xs text-muted-foreground">Trading Calculator</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="default" data-testid="discord-btn">
                <i className="fas fa-discord mr-2"></i>
                Discord
              </Button>
              <Button variant="ghost" size="icon">
                <i className="fas fa-cog text-muted-foreground"></i>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Stock Ticker */}
      <StockTracker />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Calculator Section */}
        <div className="mb-8">
          <TradeCalculator 
            isPermanent={isPermanent} 
            onModeChange={handleModeChange}
          />
        </div>

        {/* Fruits Library */}
        <FruitLibrary 
          isPermanent={isPermanent}
          onFruitClick={handleFruitClick}
        />
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <i className="fas fa-calculator text-primary-foreground"></i>
              </div>
              <div>
                <p className="font-semibold">BloxCalc Pro</p>
                <p className="text-sm text-muted-foreground">Professional Blox Fruits Trading Calculator</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="discord-link">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="twitter-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="youtube-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 BloxCalc Pro. Not affiliated with Roblox or Blox Fruits. All fruit images and data are for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
