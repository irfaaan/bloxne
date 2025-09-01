import { useParams, Link } from "wouter";
import { fruitsDatabase, formatValue } from "@/lib/fruitsDatabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Clock, Users, DollarSign, Star } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function FruitsSEO() {
  const params = useParams();
  const slug = params.slug ? decodeURIComponent(params.slug) : "";
  
  // Extract fruit name from SEO slug (e.g., "west-dragon-value" -> "West Dragon")
  const fruitName = slug
    .replace(/-value$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const fruit = fruitsDatabase[fruitName];

  if (!fruit) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fruit Not Found</h1>
          <p className="text-muted-foreground mb-4">The fruit "{fruitName}" was not found in our database.</p>
          <Link href="/values">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fruit Values
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const rarityColors = {
    Mythical: "border-purple-500 bg-purple-500/10",
    Legendary: "border-orange-500 bg-orange-500/10", 
    Rare: "border-blue-500 bg-blue-500/10",
    Uncommon: "border-green-500 bg-green-500/10",
    Common: "border-gray-500 bg-gray-500/10"
  };

  const trendColors = {
    Overpaid: "text-red-500",
    Dropping: "text-red-400", 
    Rising: "text-green-500",
    Stable: "text-yellow-500",
    Soon: "text-blue-500",
    Underpaid: "text-green-400"
  };

  const trendIcons = {
    Overpaid: TrendingUp,
    Dropping: TrendingDown,
    Rising: TrendingUp,
    Stable: Minus,
    Soon: Clock,
    Underpaid: TrendingDown
  };

  const TrendIcon = trendIcons[fruit.trend];

  // Dynamic SEO optimization using recommended template for SEO fruit pages
  useSEO({
    title: `${fruit.name} Fruit Value – Blox Fruits Fair Trade Info`,
    description: `See the ${fruit.name} Fruit value in Blox Fruits, its current demand, and how it compares in fair trades—updated regularly.`,
    keywords: `${fruit.name.toLowerCase()} value, blox fruits ${fruit.name.toLowerCase()} value, ${fruit.name.toLowerCase()} fruit value, ${fruit.name.toLowerCase()} price, ${fruit.name.toLowerCase()} worth, ${fruit.name.toLowerCase()} trading`,
    canonical: window.location.href
  });

  // SEO-optimized content for display
  const seoTitle = `${fruit.name} Fruit Value – Blox Fruits Fair Trade Info`;
  const seoDescription = `See the ${fruit.name} Fruit value in Blox Fruits, its current demand, and how it compares in fair trades—updated regularly.`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* SEO Meta Content */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          {seoTitle}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {seoDescription}
        </p>
        <Link href="/values">
          <Button variant="outline" size="sm" data-testid="back-button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Fruit Values
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Fruit Info */}
        <div className="lg:col-span-2">
          <Card className={`p-6 ${rarityColors[fruit.rarity]} border-2 mb-6`}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={fruit.imageUrl} 
                  alt={`${fruit.name} Blox Fruits`}
                  className="w-32 h-32 rounded-lg object-contain bg-background/50 p-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMzMzMzMzMiLz4KPHR4dCB4PSI2NCIgeT0iNzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${rarityColors[fruit.rarity]} border`}>
                    {fruit.rarity}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted border">
                    {fruit.type}
                  </span>
                  <span className={fruit.inStock ? "text-green-500" : "text-red-500"}>
                    {fruit.inStock ? "✓ In Stock" : "✗ Out of Stock"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4" data-testid="fruit-name">{fruit.name} Trading Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Current Value</div>
                    <div className="text-2xl font-bold text-primary" data-testid="regular-value">
                      {formatValue(fruit.value)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Permanent Value</div>
                    <div className="text-2xl font-bold text-accent" data-testid="permanent-value">
                      {formatValue(fruit.permanentValue)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Detailed Trading Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Value Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Trading Value:</span>
                  <span className="font-bold text-primary">
                    {formatValue(fruit.value)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Permanent Value:</span>
                  <span className="font-bold text-accent">
                    {formatValue(fruit.permanentValue)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Store Price:</span>
                  <span className="font-bold text-muted-foreground">
                    {formatValue(fruit.price)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Value vs Store:</span>
                  <span className="font-bold text-green-500">
                    +{Math.round(((fruit.value / fruit.price) - 1) * 100)}%
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Market Data
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Demand Rating:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({length: 5}, (_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < fruit.demand / 2 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-bold">{fruit.demand}/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Market Trend:</span>
                  <div className="flex items-center gap-2">
                    <TrendIcon className={`h-4 w-4 ${trendColors[fruit.trend]}`} />
                    <span className={`font-bold ${trendColors[fruit.trend]}`}>
                      {fruit.trend}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Rarity Class:</span>
                  <span className="font-bold">{fruit.rarity}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">Fruit Type:</span>
                  <span className="font-bold">{fruit.type}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Trading Tools</h3>
            <div className="space-y-3">
              <Link href={`/?fruit=${encodeURIComponent(fruit.name)}`}>
                <Button className="w-full" data-testid="use-calculator">
                  Use in Trade Calculator
                </Button>
              </Link>
              <Link href={`/values/${fruit.type.toLowerCase()}`}>
                <Button variant="outline" className="w-full" data-testid="view-category">
                  View All {fruit.type} Fruits
                </Button>
              </Link>
              <Link href="/values">
                <Button variant="outline" className="w-full">
                  Browse All Fruit Values
                </Button>
              </Link>
            </div>
          </Card>

          {/* Trading Tips */}
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-lg font-bold mb-4">💡 Trading Tips</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="font-medium mb-1">Fair Trade Range:</div>
                <div className="text-muted-foreground">
                  {formatValue(Math.round(fruit.value * 0.9))} - {formatValue(Math.round(fruit.value * 1.1))}
                </div>
              </div>
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="font-medium mb-1">Market Status:</div>
                <div className="text-muted-foreground">
                  {fruit.trend === "Rising" ? "Good time to hold" : 
                   fruit.trend === "Dropping" ? "Consider trading soon" :
                   fruit.trend === "Overpaid" ? "Sell for profit" :
                   "Stable trading opportunity"}
                </div>
              </div>
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="font-medium mb-1">Demand Level:</div>
                <div className="text-muted-foreground">
                  {fruit.demand >= 8 ? "Very High - Easy to trade" :
                   fruit.demand >= 6 ? "High - Good demand" :
                   fruit.demand >= 4 ? "Medium - Moderate interest" :
                   "Low - May take time to trade"}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}