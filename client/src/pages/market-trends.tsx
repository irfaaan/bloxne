import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Clock } from "lucide-react";
import { fruitsDatabase, formatValue } from "@/lib/fruitsDatabase";

export default function MarketTrends() {
  // Group fruits by trends
  const trendGroups = {
    Rising: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Rising"),
    Dropping: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Dropping"),
    Overpaid: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Overpaid"),
    Underpaid: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Underpaid"),
    Stable: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Stable"),
    Soon: Object.entries(fruitsDatabase).filter(([, fruit]) => fruit.trend === "Soon")
  };

  const trendColors = {
    Rising: "text-green-500 border-green-500/20 bg-green-500/10",
    Dropping: "text-red-500 border-red-500/20 bg-red-500/10",
    Overpaid: "text-orange-500 border-orange-500/20 bg-orange-500/10",
    Underpaid: "text-blue-500 border-blue-500/20 bg-blue-500/10",
    Stable: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10",
    Soon: "text-purple-500 border-purple-500/20 bg-purple-500/10"
  };

  const trendIcons = {
    Rising: TrendingUp,
    Dropping: TrendingDown,
    Overpaid: TrendingUp,
    Underpaid: TrendingDown,
    Stable: Minus,
    Soon: Clock
  };

  const trendDescriptions = {
    Rising: "Values are increasing - good time to hold or buy",
    Dropping: "Values are decreasing - consider selling soon",
    Overpaid: "Currently trading above fair value - sell opportunity",
    Underpaid: "Trading below fair value - good buying opportunity",
    Stable: "Consistent values with steady demand",
    Soon: "Expected to change value in upcoming updates"
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
          Blox Fruits Market Trends
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Track all fruit value trends, identify trading opportunities, and stay ahead of market changes with real-time data.
        </p>
      </div>

      <div className="grid gap-6">
        {Object.entries(trendGroups).map(([trend, fruits]) => {
          if (fruits.length === 0) return null;
          
          const TrendIcon = trendIcons[trend as keyof typeof trendIcons];
          
          return (
            <Card key={trend} className={`border-2 ${trendColors[trend as keyof typeof trendColors]}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <TrendIcon className={`h-6 w-6 ${trendColors[trend as keyof typeof trendColors].split(' ')[0]}`} />
                    <span>{trend} Fruits</span>
                    <Badge variant="outline" className="ml-2">
                      {fruits.length} items
                    </Badge>
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {trendDescriptions[trend as keyof typeof trendDescriptions]}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {fruits.map(([name, fruit]) => (
                    <div key={name} className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={fruit.imageUrl} 
                          alt={name} 
                          className="w-12 h-12 rounded-lg object-contain bg-background/50 p-1"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI2IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{name}</h3>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span>{fruit.rarity}</span>
                            <span>•</span>
                            <span>{fruit.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Value:</span>
                          <span className="font-bold text-primary">{formatValue(fruit.value)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Demand:</span>
                          <span className="font-medium">{fruit.demand}/10</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t">
                        <div className="flex gap-2">
                          <Link href={`/fruits/${name.toLowerCase().replace(/\s+/g, '-')}-value`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full text-xs">
                              View Details
                            </Button>
                          </Link>
                          <Link href={`/?fruit=${encodeURIComponent(name)}`} className="flex-1">
                            <Button size="sm" className="w-full text-xs">
                              Use in Calculator
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trading Tips */}
      <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 text-center">💡 Market Trading Tips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">Rising Fruits</h4>
              <p className="text-muted-foreground">Hold or buy these fruits as their values are increasing. Good long-term investment.</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">Overpaid Items</h4>
              <p className="text-muted-foreground">These are trading above fair value. Great time to sell if you own them.</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold mb-2">Underpaid Opportunities</h4>
              <p className="text-muted-foreground">Trading below fair value. Consider buying before prices correct upward.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}