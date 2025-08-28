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
    
    if (fruitParam && fruitsDatabase[fruitParam]) {
      // Small delay to ensure the TradeCalculator component is ready
      setTimeout(() => {
        if (calculatorRef.current) {
          calculatorRef.current.addItem(fruitParam, 'your');
          
          toast({
            title: "Fruit Added!",
            description: `${fruitParam} has been added to your offer`,
          });
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
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Blox Fruits Values Calculator - Get Accurate Trade Values Instantly
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't get scammed! Use our FREE Blox Fruits values calculator to check exact fruit values, 
            calculate fair trades, and dominate the trading market. Updated daily with latest prices!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <div className="text-2xl font-bold text-primary">35+</div>
            <div className="text-sm text-muted-foreground">Total Fruits</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <div className="text-2xl font-bold text-accent">4</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <div className="text-2xl font-bold text-green-500">Live</div>
            <div className="text-sm text-muted-foreground">Market Data</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <div className="text-2xl font-bold text-blue-500">24/7</div>
            <div className="text-sm text-muted-foreground">Updates</div>
          </div>
        </div>

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
    </div>
  );
}