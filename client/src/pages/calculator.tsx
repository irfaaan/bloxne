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


        {/* Main Calculator Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Blox Fruits Trade Calculator</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Drag and drop fruits to compare values, calculate fair trades, and see the exact difference instantly.
            </p>
          </div>
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