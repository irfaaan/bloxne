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
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Blox Fruits Values Library</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore all Blox Fruits with their live values, demand ratings, and trends. Updated daily to reflect the trading market.
            </p>
          </div>
          <FruitLibrary 
            isPermanent={isPermanent}
            onFruitClick={handleFruitClick}
          />
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Blox Fruits Values Calculator</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Blox Fruits Values Calculator is the #1 tool for Roblox players to find accurate fruit prices, demand levels, and trade fairness. Our tool covers legendary fruits like Dragon, Leopard, Dough, and more. With live updates and market insights, you'll always know the true value of your items before trading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Accurate trade calculator (regular & permanent values)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Full Blox Fruits library with values & demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Daily updated market trends & overpaid items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Fair trade analysis with difference calculation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold mb-2">Trading Safety</h4>
                <p className="text-sm text-muted-foreground">
                  Avoid scams by checking exact fruit values before accepting any trade. Our calculator shows real market prices updated daily.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold mb-2">Market Intelligence</h4>
                <p className="text-sm text-muted-foreground">
                  Track demand trends, identify overpaid fruits, and find the best trading opportunities with our live market data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}