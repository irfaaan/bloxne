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

        {/* FAQ Section - People Also Ask */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Blox Fruits Values</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to the most common questions about Blox Fruits values, trading, and our calculator tool.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">❓ What is the most valuable fruit in Blox Fruits?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently, <strong>Dragon Token</strong> is the most valuable fruit at 800M value, followed by <strong>Dough</strong> (500M), <strong>Dragon</strong> (350M), and <strong>Leopard</strong> (300M). These mythical fruits have the highest trading values due to their rarity, powerful abilities, and high demand in the community. Values change based on game updates and market trends.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">🔄 How often do Blox Fruits values change?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blox Fruits values are updated daily based on real trading activity and market demand. Major value changes typically occur after game updates, new fruit releases, or balance changes. Our calculator reflects live market prices from authentic trading sources like DarkKitsune.com to ensure accuracy. Always check current values before making trades.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">💎 What makes a fruit valuable in Blox Fruits?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fruit values depend on several factors: <strong>rarity</strong> (Mythical &gt; Legendary &gt; Rare), <strong>combat effectiveness</strong> in PvP and raids, <strong>trading demand</strong> in the community, and <strong>availability</strong> in the stock rotation. Fruits with unique abilities, high damage output, or meta relevance typically maintain higher values and demand ratings.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">⚖️ How do I know if a trade is fair in Blox Fruits?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use our trade calculator to compare exact values of offered items. A fair trade should have less than 10% value difference. Check demand ratings - high-demand fruits (8+/10) are easier to trade. Consider market trends: avoid overpaid fruits unless you're selling, and look for rising or underpaid opportunities. Always verify values before accepting any trade.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">🔄 What's the difference between regular and permanent fruit values?</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Regular values</strong> are for temporary fruits that disappear when you eat another fruit. <strong>Permanent values</strong> are for fruits you permanently own and can switch between freely. Permanent fruits always cost more (typically 2-3x regular price) because they offer permanent access. Use our calculator's toggle to see both pricing options.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">📈 Which Blox Fruits are best for trading profit?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Look for fruits with <strong>Rising</strong> or <strong>Soon</strong> trends for potential profit. High-demand fruits (demand 8+) like Dragon, Dough, and Leopard are always tradeable. Avoid <strong>Overpaid</strong> fruits unless selling. Check our market trends page for current opportunities. Focus on mythical and legendary fruits for the most trading activity and profit potential.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">🛡️ How do I avoid getting scammed in Blox Fruits trading?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Always check exact fruit values using our calculator before trading. Never trust other players' value claims. Verify demand ratings and market trends. Be cautious with overpaid fruits - they may be hard to retrade. Use official trading servers and avoid suspicious offers that seem too good to be true. Check our daily updated values to stay informed.
              </p>
            </div>

            {/* FAQ Item 8 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">📊 How do you calculate Blox Fruits demand ratings?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Demand ratings (1-10 scale) are based on trading frequency, community interest, PvP meta relevance, and how quickly fruits sell in trading servers. High demand (8-10) means easy trading, medium demand (5-7) requires patience, and low demand (1-4) may take time to trade. Our ratings update based on real market activity and player preferences.
              </p>
            </div>

            {/* FAQ Item 9 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">🕐 When do fruit stocks refresh in Blox Fruits?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fruit stocks refresh every 4 hours in the Blox Fruits dealer. Our stock tracker shows live countdown and current available fruits. Stock rotation is random, so rare fruits like Dragon or Dough appear infrequently. Use our stock alerts to monitor when valuable fruits become available for purchase instead of trading.
              </p>
            </div>

            {/* FAQ Item 10 */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">🎯 Are Blox Fruits values the same on all platforms?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, Blox Fruits values are consistent across all platforms (PC, Mobile, Xbox) since it's the same Roblox game. However, trading activity and availability may vary between different servers and regions. Our calculator provides universal values that apply to all platforms. Market trends and demand ratings remain consistent regardless of your device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}