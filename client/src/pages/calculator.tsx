import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "wouter";
import { TradeCalculator, type TradeCalculatorRef } from "@/components/TradeCalculator";
import { StockTracker } from "@/components/StockTracker";
import { FruitLibrary } from "@/components/FruitLibrary";
import { Button } from "@/components/ui/button";
import { fruitsDatabase } from "@/lib/fruitsDatabase";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/useSEO";

export default function Calculator() {
  const [isPermanent, setIsPermanent] = useState(false);
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const calculatorRef = useRef<TradeCalculatorRef>(null);

  // SEO optimization for Calculator page
  useSEO({
    title: "Blox Fruits Values Calculator – Check Fair Trades Instantly",
    description: "Use our accurate Blox Fruits values calculator to check trade values, compare fruits, and avoid scams. Updated daily with live market data, fair trade analysis, and trending values.",
    keywords: "blox fruits calculator, fair trade checker, fruit value calculator, trade calculator, blox fruits trading, scam prevention, fruit comparison",
    canonical: window.location.href
  });

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

  useEffect(() => {
    // Add page-specific schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Blox Fruits Trading Calculator",
      "description": "Calculate fair trades, compare fruit values, and check trade differences instantly",
      "url": "https://bloxfruitvaluescalculator.com/",
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "Trade Calculator",
        "applicationCategory": "GameApplication"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bloxfruitvaluescalculator.com/"
          }
        ]
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-background text-foreground" role="main">
      {/* Stock Ticker */}
      <StockTracker />

      <div className="max-w-7xl mx-auto px-4 py-8">


        {/* Main Calculator Section */}
        <section className="mb-8" aria-labelledby="calculator-heading">
          <header className="text-center mb-6">
            <h1 id="calculator-heading" className="text-3xl font-bold mb-3">Blox Fruits Trade Calculator</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Drag and drop fruits to compare values, calculate fair trades, and see the exact difference instantly.
            </p>
          </header>
          <TradeCalculator 
            ref={calculatorRef}
            isPermanent={isPermanent} 
            onModeChange={handleModeChange}
          />
        </section>

        {/* Features Section */}
        <section className="mt-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
          <header className="text-center mb-8">
            <h2 id="features-heading" className="text-2xl font-bold mb-4">Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional Blox Fruits calculator with advanced features for accurate trading and value analysis.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-sm font-semibold mb-2">Instant Calculations</h3>
              <p className="text-xs text-muted-foreground">Real-time value comparison and trade fairness analysis</p>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-sm font-semibold mb-2">Live Market Data</h3>
              <p className="text-xs text-muted-foreground">Updated daily with authentic trading values and trends</p>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-sm font-semibold mb-2">Demand Ratings</h3>
              <p className="text-xs text-muted-foreground">Trading difficulty and market demand indicators</p>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-sm font-semibold mb-2">Permanent Mode</h3>
              <p className="text-xs text-muted-foreground">Toggle between regular and permanent fruit values</p>
            </div>
          </div>
        </section>

        {/* How to Use Calculator Section */}
        <section className="mt-16 max-w-4xl mx-auto" aria-labelledby="howto-heading">
          <header className="text-center mb-8">
            <h2 id="howto-heading" className="text-2xl font-bold mb-4">How to Use the Calculator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to calculate Blox Fruits values and make fair trades instantly.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold mb-3">Add Fruits</h3>
              <p className="text-sm text-muted-foreground">
                Drag fruits into "Your Offer" and "Their Offer" sections or click to add from the library.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold mb-3">Compare Values</h3>
              <p className="text-sm text-muted-foreground">
                View total values, differences, and fairness indicators to evaluate the trade balance.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold mb-3">Make Decision</h3>
              <p className="text-sm text-muted-foreground">
                Use results to negotiate, accept fair trades, or identify better opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* How We Calculate Values */}
        <section className="mt-16 max-w-4xl mx-auto" aria-labelledby="calculation-heading">
          <header className="text-center mb-8">
            <h2 id="calculation-heading" className="text-2xl font-bold mb-4">How We Calculate Values (Methodology)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our transparent methodology ensures accurate, reliable fruit values based on real market data.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-500">📈</span>
                  Market Analysis
                </h3>
                <p className="text-sm text-muted-foreground">
                  Daily monitoring of trading servers, Discord communities, and official sources to track real transaction values.
                </p>
              </div>

              <div className="p-4 bg-card rounded-lg border">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="text-green-500">🎯</span>
                  Demand Metrics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Analyzing trade frequency, search volume, and community interest to determine accurate demand ratings.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="text-purple-500">🔍</span>
                  Data Sources
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aggregating from live trading activity and community analysis for comprehensive market coverage.
                </p>
              </div>

              <div className="p-4 bg-card rounded-lg border">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="text-orange-500">⚖️</span>
                  Verification Process
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cross-referencing multiple sources and validating through community feedback to ensure accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mt-16 max-w-4xl mx-auto" aria-labelledby="faq-heading">
          <header className="text-center mb-8">
            <h2 id="faq-heading" className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about Blox Fruits values and trading.
            </p>
          </header>

          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">What is the most valuable Blox Fruit?</h3>
              <p className="text-sm text-muted-foreground">
                Dragon Token (800M), followed by Dough (500M), Dragon (350M), and Leopard (300M). Values update based on game changes and market demand.
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">How often do fruit values change?</h3>
              <p className="text-sm text-muted-foreground">
                Daily updates based on real trading activity. Major changes occur after game updates, new releases, or balance modifications.
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">How do I know if a trade is fair?</h3>
              <p className="text-sm text-muted-foreground">
                Use our calculator to compare values. Fair trades have less than 10% difference. Check demand ratings and avoid overpaid fruits.
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">What's the difference between regular and permanent values?</h3>
              <p className="text-sm text-muted-foreground">
                Regular fruits disappear when switching. Permanent fruits cost 2-3x more but allow permanent access and switching between fruits.
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">How do you calculate demand ratings?</h3>
              <p className="text-sm text-muted-foreground">
                Based on trading frequency, community interest, and PvP relevance. Scale 1-10 where 8+ means easy trading, 1-4 requires patience.
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-base font-semibold mb-2">Are values the same on all platforms?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, values are universal across PC, Mobile, and Xbox. Our calculator provides consistent pricing for all platforms.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}