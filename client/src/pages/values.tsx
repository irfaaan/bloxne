import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FruitLibrary } from "@/components/FruitLibrary";

export default function Values() {
  const [isPermanent, setIsPermanent] = useState(false);

  const handleFruitClick = (fruitName: string) => {
    // Navigate to fruit detail page
    const slug = fruitName.toLowerCase().replace(/\s+/g, '-') + '-value';
    window.open(`/fruits/${slug}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" size="sm" data-testid="back-button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculator
          </Button>
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Complete Blox Fruits Values Database
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Browse all Blox Fruits with current market values, demand ratings, and trading trends. Use advanced filters to find specific fruits by rarity, value range, or market status. Updated daily with authentic trading data.
        </p>
        
        {/* Mode Toggle */}
        <div className="flex items-center justify-center gap-2 bg-muted p-1 rounded-lg w-fit mx-auto">
          <Button
            variant={!isPermanent ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsPermanent(false)}
          >
            Regular Values
          </Button>
          <Button
            variant={isPermanent ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsPermanent(true)}
          >
            Permanent Values
          </Button>
        </div>
      </div>

      <FruitLibrary 
        isPermanent={isPermanent}
        onFruitClick={handleFruitClick}
        isLimited={false}
      />

      {/* SEO Content */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Complete Blox Fruits Trading Reference</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This comprehensive Blox Fruits values list includes every fruit with accurate trading prices, demand analysis, and market trends. Whether you're looking for mythical fruits like Dragon and Leopard, or common fruits for starter trades, find exact values to make informed trading decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Value Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Mythical Fruits (100M+ values)</li>
              <li>• Legendary Fruits (10M-100M)</li>
              <li>• Rare Fruits (1M-10M)</li>
              <li>• Uncommon & Common Fruits</li>
            </ul>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Market Analysis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rising value trends</li>
              <li>• Overpaid trading opportunities</li>
              <li>• High-demand fruit identification</li>
              <li>• Stock availability tracking</li>
            </ul>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Trading Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fair trade calculator</li>
              <li>• Value difference analysis</li>
              <li>• Demand rating system</li>
              <li>• Profit opportunity alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}