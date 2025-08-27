import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { TradeCalculator, type TradeCalculatorRef } from "@/components/TradeCalculator";
import { StockTracker } from "@/components/StockTracker";
import { FruitLibrary } from "@/components/FruitLibrary";
import { Button } from "@/components/ui/button";
import { fruitsDatabase } from "@/lib/fruitsDatabase";
import { useToast } from "@/hooks/use-toast";

export default function Calculator() {
  const [isPermanent, setIsPermanent] = useState(false);
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const calculatorRef = useRef<TradeCalculatorRef>(null);

  useEffect(() => {
    // Check for fruit parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const fruitParam = urlParams.get('fruit');
    
    console.log('URL params:', window.location.search);
    console.log('Fruit param:', fruitParam);
    
    if (fruitParam && fruitsDatabase[fruitParam]) {
      console.log('Found fruit in database:', fruitParam);
      // Small delay to ensure the TradeCalculator component is ready
      setTimeout(() => {
        console.log('Calculator ref:', calculatorRef.current);
        if (calculatorRef.current) {
          console.log('Adding item to calculator:', fruitParam);
          calculatorRef.current.addItem(fruitParam, 'your');
          
          toast({
            title: "Fruit Added!",
            description: `${fruitParam} has been added to your offer`,
          });
        } else {
          console.log('Calculator ref not available');
        }
        
        // Clean up the URL parameter
        navigate('/');
      }, 500);
    }
  }, [location, navigate, toast]);

  const handleModeChange = (mode: 'regular' | 'permanent') => {
    setIsPermanent(mode === 'permanent');
  };

  const handleFruitClick = (fruitName: string) => {
    if (calculatorRef.current) {
      calculatorRef.current.addItem(fruitName, 'your');
    }
  };

  return (
    <div className="bg-background text-foreground">
      {/* Stock Ticker */}
      <StockTracker />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Calculator Section */}
        <div className="mb-8">
          <TradeCalculator 
            ref={calculatorRef}
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
