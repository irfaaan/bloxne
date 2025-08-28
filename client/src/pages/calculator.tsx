import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "wouter";
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

        {/* High-Demand Blox Fruits Values */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Most Demanded Blox Fruits Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Check current values for the most trending and high-demand Blox Fruits. These items have the highest trading activity and best market demand ratings.
            </p>
            <Link href="/values">
              <Button size="lg" className="mt-2">
                View All Blox Fruits Values →
              </Button>
            </Link>
          </div>
          <FruitLibrary 
            isPermanent={isPermanent}
            onFruitClick={handleFruitClick}
            isLimited={true}
          />
        </div>

        {/* Stock Trading Opportunities */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Blox Fruits Stock Prices & Trading</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Monitor live stock availability and find the best buying opportunities. Track which fruits are in stock now for immediate purchase.
            </p>
            <Link href="/stocks">
              <Button variant="outline" size="lg" className="mt-2">
                View Full Stock Market →
              </Button>
            </Link>
          </div>
          <StockTracker isPreview={true} />
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ultimate Blox Fruits Values Calculator & Trading Guide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our advanced Blox Fruits values calculator provides real-time fruit prices, demand analysis, and fair trade calculations for all Roblox Blox Fruits players. Whether you're trading Dragon, Leopard, Dough, or any legendary fruit, get accurate values instantly. Track market trends, identify overpaid items, and make profitable trades with confidence using the most trusted Blox Fruits value checker in the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Blox Fruits Calculator Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Precise Blox Fruits values calculator with regular & permanent prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Complete fruit values database with demand ratings & trading tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Live market trends analysis for profitable Blox Fruits trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Instant fair trade calculator with value difference checking</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold mb-2">Accurate Blox Fruits Values</h4>
                <p className="text-sm text-muted-foreground">
                  Get exact Blox Fruits values and avoid trading scams. Our calculator displays current market prices for all fruits, updated daily with authentic trading data.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold mb-2">Smart Trading Insights</h4>
                <p className="text-sm text-muted-foreground">
                  Make informed trading decisions with demand analysis, trend tracking, and profit calculations. Find undervalued fruits and identify overpaid trading opportunities.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold mb-2">Real-Time Stock Updates</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor fruit availability and stock rotation times. Never miss buying opportunities with our live stock tracking system for optimal trading strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}