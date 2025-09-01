import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown, Star, Award } from "lucide-react";
import { fruitsDatabase, formatValue } from "@/lib/fruitsDatabase";
import { useSEO } from "@/hooks/useSEO";

export default function TopValues() {
  const [isPermanent, setIsPermanent] = useState(false);

  // SEO optimization for Top Values page
  useSEO({
    title: "Top 25 Most Valuable Blox Fruits | Highest Trading Values Ranked",
    description: "Discover the most valuable Blox Fruits ranked by trading value. Top 25 highest-priced fruits with regular and permanent values, rarity analysis, and demand ratings.",
    keywords: "most valuable blox fruits, highest fruit values, top 25 fruits, expensive fruits, valuable trading fruits, dragon value, leopard value, mythical fruits",
    canonical: window.location.href
  });

  // Sort fruits by value
  const sortedFruits = Object.entries(fruitsDatabase)
    .sort(([, a], [, b]) => (isPermanent ? b.permanentValue - a.permanentValue : b.value - a.value));

  const top10 = sortedFruits.slice(0, 10);
  const top25 = sortedFruits.slice(10, 25);
  const highDemand = sortedFruits.filter(([, fruit]) => fruit.demand >= 8);

  const getRarityColor = (rarity: string) => {
    const colors = {
      Mythical: "border-purple-500/50 bg-purple-500/10 text-purple-600",
      Legendary: "border-orange-500/50 bg-orange-500/10 text-orange-600",
      Rare: "border-blue-500/50 bg-blue-500/10 text-blue-600",
      Uncommon: "border-green-500/50 bg-green-500/10 text-green-600",
      Common: "border-gray-500/50 bg-gray-500/10 text-gray-600"
    };
    return colors[rarity as keyof typeof colors] || "";
  };

  const FruitCard = ({ name, fruit, index }: { name: string; fruit: any; index: number }) => {
    const currentValue = isPermanent ? fruit.permanentValue : fruit.value;
    const rankIcons = [Crown, Award, Star];
    const RankIcon = index < 3 ? rankIcons[index] : null;
    
    return (
      <div className={`p-4 bg-card rounded-lg border-2 hover:border-primary transition-all ${getRarityColor(fruit.rarity)}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <img 
              src={fruit.imageUrl} 
              alt={name} 
              className="w-16 h-16 rounded-lg object-contain bg-background/50 p-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIzMiIgeT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
              }}
            />
            {index < 3 && RankIcon && (
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
              }`}>
                <RankIcon className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold">#{index + 1}</span>
              <h3 className="font-bold text-lg">{name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={getRarityColor(fruit.rarity)}>
                {fruit.rarity}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {fruit.type}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Value:</span>
            <span className="text-xl font-bold text-primary">{formatValue(currentValue)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Demand:</span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < fruit.demand / 2 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="font-medium">{fruit.demand}/10</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Trend:</span>
            <span className={`font-medium ${
              fruit.trend === "Rising" ? "text-green-500" :
              fruit.trend === "Dropping" ? "text-red-500" :
              fruit.trend === "Overpaid" ? "text-orange-500" :
              "text-yellow-500"
            }`}>
              {fruit.trend}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link href={`/fruits/${name.toLowerCase().replace(/\s+/g, '-')}-value`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs">
              Details
            </Button>
          </Link>
          <Link href={`/?fruit=${encodeURIComponent(name)}`} className="flex-1">
            <Button size="sm" className="w-full text-xs">
              Use in Calculator
            </Button>
          </Link>
        </div>
      </div>
    );
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
          Top Blox Fruits Values
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Discover the most valuable fruits in Blox Fruits, ranked by current market prices and trading demand.
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

      {/* Top 10 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-yellow-500" />
            Top 10 Most Valuable Fruits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {top10.map(([name, fruit], index) => (
              <FruitCard key={name} name={name} fruit={fruit} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top 11-25 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-orange-500" />
            Top 11-25 Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {top25.map(([name, fruit], index) => (
              <FruitCard key={name} name={name} fruit={fruit} index={index + 10} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* High Demand */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-6 w-6 text-blue-500" />
            High Demand Fruits (8+ Rating)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {highDemand.slice(0, 15).map(([name, fruit], index) => (
              <FruitCard key={name} name={name} fruit={fruit} index={sortedFruits.findIndex(([n]) => n === name)} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trading Tips */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 text-center">💰 Value Trading Guide</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">Top 10 Fruits</h4>
              <p className="text-muted-foreground">Extremely valuable and rare. Perfect for high-value trades and permanent upgrades.</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">High Demand Items</h4>
              <p className="text-muted-foreground">Easy to trade due to popularity. Great for quick exchanges and building trade reputation.</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">Value Strategy</h4>
              <p className="text-muted-foreground">Combine high-value fruits with high-demand items for the most successful trades.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}