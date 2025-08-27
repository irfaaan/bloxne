import { useParams, Link } from "wouter";
import { fruitsDatabase, formatValue } from "@/lib/fruitsDatabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Clock, Users, DollarSign } from "lucide-react";

export default function FruitDetail() {
  const params = useParams();
  const fruitName = params.name ? decodeURIComponent(params.name) : "";
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/values">
          <Button variant="outline" size="sm" data-testid="back-button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fruit Values
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Fruit Image and Basic Info */}
        <div>
          <Card className={`p-6 ${rarityColors[fruit.rarity]} border-2`}>
            <div className="text-center mb-6">
              <img 
                src={fruit.imageUrl} 
                alt={fruit.name}
                className="w-32 h-32 mx-auto mb-4 rounded-lg object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMzMzMzMzMiLz4KPHR4dCB4PSI2NCIgeT0iNzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPg==';
                }}
              />
              <h1 className="text-3xl font-bold mb-2" data-testid="fruit-name">{fruit.name}</h1>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${rarityColors[fruit.rarity]}`}>
                  {fruit.rarity}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted">
                  {fruit.type}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className={fruit.inStock ? "text-green-500" : "text-red-500"}>
                  {fruit.inStock ? "✓ In Stock" : "✗ Out of Stock"}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Stats */}
        <div className="space-y-6">
          {/* Values */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Values
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Regular Value:</span>
                <span className="text-xl font-bold text-primary" data-testid="regular-value">
                  {formatValue(fruit.value)}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Permanent Value:</span>
                <span className="text-xl font-bold text-accent" data-testid="permanent-value">
                  {formatValue(fruit.permanentValue)}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Store Price:</span>
                <span className="text-lg font-bold text-muted-foreground">
                  {formatValue(fruit.price)}
                </span>
              </div>
            </div>
          </Card>

          {/* Market Info */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Market Info
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Demand:</span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({length: 10}, (_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 mx-px rounded-full ${
                          i < fruit.demand ? 'bg-primary' : 'bg-muted'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="font-bold">{fruit.demand}/10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Market Trend:</span>
                <div className="flex items-center gap-2">
                  <TrendIcon className={`h-4 w-4 ${trendColors[fruit.trend]}`} />
                  <span className={`font-bold ${trendColors[fruit.trend]}`}>
                    {fruit.trend}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Actions</h2>
            <div className="flex flex-col gap-3">
              <Link href={`/?fruit=${encodeURIComponent(fruit.name)}`}>
                <Button className="w-full" data-testid="use-calculator">
                  Use in Calculator
                </Button>
              </Link>
              <Link href={`/values/${fruit.type.toLowerCase()}`}>
                <Button variant="outline" className="w-full" data-testid="view-category">
                  View All {fruit.type} Fruits
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}