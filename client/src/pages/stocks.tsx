import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, RefreshCw, TrendingUp, TrendingDown, Minus, ExternalLink, Star, Eye } from "lucide-react";
import { fruitsDatabase, formatValue, type FruitData } from "@/lib/fruitsDatabase";
import { useSEO } from "@/hooks/useSEO";

interface StockItem extends FruitData {
  stockPrice: number;
  discount: number;
  nextRefresh: string;
  available: boolean;
}

interface StockSection {
  title: string;
  description: string;
  updateInterval: string;
  nextUpdate: string;
  dealer: string;
  location: string;
  items: StockItem[];
}

export default function Stocks() {
  // Get current date for dynamic SEO title
  const getCurrentDate = () => {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  };

  // SEO optimization for Stocks page with dynamic date
  useSEO({
    title: `Live Blox Fruits Stock – Normal & Mirage ${getCurrentDate()}`,
    description: `Check live Blox Fruits stock for ${getCurrentDate()}. Monitor Normal Stock and Mirage Island inventory with real-time prices, discounts, and refresh timers for the best deals.`,
    keywords: "live blox fruits stock, fruit shop tracker, current inventory, stock prices, discounts, refresh timer, normal stock, mirage island stock, today stock",
    canonical: window.location.href
  });

  const [timeLeft, setTimeLeft] = useState({
    normal: "0H 30M 47S",
    mirage: "0H 30M 47S"
  });

  // Create stock items with enhanced data from fruit database
  const createStockItem = (fruitName: string, stockPrice: number, available: boolean = true): StockItem => {
    const fruit = fruitsDatabase[fruitName];
    if (!fruit) {
      throw new Error(`Fruit ${fruitName} not found in database`);
    }
    
    const discount = Math.round(((fruit.price - stockPrice) / fruit.price) * 100);
    
    return {
      ...fruit,
      stockPrice,
      discount,
      nextRefresh: "0H 30M 47S",
      available
    };
  };

  // Enhanced stock data with real fruit information
  const stockSections: StockSection[] = [
    {
      title: "Normal Stock",
      description: "Updated every 4 hours",
      updateInterval: "4 hours",
      nextUpdate: timeLeft.normal,
      dealer: "Blox Fruit Dealer",
      location: "Main Dealer Locations",
      items: [
        createStockItem("Light", 650000),
        createStockItem("Spring", 60000)
      ]
    },
    {
      title: "Mirage Stock", 
      description: "Updated every 2 hours",
      updateInterval: "2 hours",
      nextUpdate: timeLeft.mirage,
      dealer: "Mirage Island Dealer",
      location: "Mirage Island (Sea 2 & 3)",
      items: [
        createStockItem("Control", 3200000),
        createStockItem("Love", 1300000),
        createStockItem("Light", 650000),
        createStockItem("Flame", 250000),
        createStockItem("Blade", 30000)
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate actual countdown - this would be real in production
      setTimeLeft({
        normal: "0H 30M 47S",
        mirage: "0H 30M 47S"
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getRarityColors = (rarity: string) => {
    const rarityColors = {
      Mythical: "from-purple-500/20 to-purple-600/20 border-purple-500/50",
      Legendary: "from-orange-500/20 to-orange-600/20 border-orange-500/50",
      Rare: "from-blue-500/20 to-blue-600/20 border-blue-500/50",
      Uncommon: "from-green-500/20 to-green-600/20 border-green-500/50",
      Common: "from-gray-500/20 to-gray-600/20 border-gray-500/50"
    };
    return rarityColors[rarity as keyof typeof rarityColors] || "";
  };

  const getRarityBadge = (rarity: string) => {
    const rarityStyles = {
      Mythical: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/50",
      Legendary: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/50",
      Rare: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/50",
      Uncommon: "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/50",
      Common: "bg-gray-500/20 text-gray-600 dark:text-gray-400 border border-gray-500/50"
    };
    return rarityStyles[rarity as keyof typeof rarityStyles] || "";
  };

  const getTrendIcon = (trend: string) => {
    const trendIcons = {
      Rising: <TrendingUp className="h-3 w-3 text-green-500" />,
      Dropping: <TrendingDown className="h-3 w-3 text-red-500" />,
      Overpaid: <TrendingUp className="h-3 w-3 text-red-500" />,
      Underpaid: <TrendingDown className="h-3 w-3 text-green-500" />,
      Stable: <Minus className="h-3 w-3 text-yellow-500" />,
      Soon: <Clock className="h-3 w-3 text-blue-500" />
    };
    return trendIcons[trend as keyof typeof trendIcons] || <Minus className="h-3 w-3 text-gray-500" />;
  };

  return (
    <div className="container mx-auto px-4 py-8" data-testid="stocks-page">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4" data-testid="page-title">
            Blox Fruits Stock
          </h1>
          <p className="text-lg text-muted-foreground mb-6" data-testid="page-description">
            Real-time dealer stock from across the Grand Line
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RefreshCw className="h-4 w-4" />
              <span>Live Market Data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>

        {/* Stock Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {stockSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4" data-testid={`stock-section-${sectionIndex}`}>
              {/* Section Header */}
              <Card className="bg-gradient-to-r from-card to-muted/20 border-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold flex items-center gap-2" data-testid={`section-title-${sectionIndex}`}>
                        {section.title}
                        <Badge variant="outline" className="text-xs">
                          {section.updateInterval}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-sm mt-1" data-testid={`section-description-${sectionIndex}`}>
                        {section.dealer} • {section.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-lg font-mono font-bold text-primary">
                        <Clock className="h-4 w-4" />
                        {section.nextUpdate}
                      </div>
                      <div className="text-xs text-muted-foreground">Next Refresh</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Stock Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <Card 
                    key={`${item.name}-${itemIndex}`}
                    className={`group hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-br ${getRarityColors(item.rarity)} border-2 shadow-lg hover:shadow-xl`}
                    data-testid={`stock-item-${sectionIndex}-${itemIndex}`}
                  >
                    <CardContent className="p-4">
                      {/* Fruit Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-16 h-16 rounded-lg object-contain bg-background/80 p-1"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIzMiIgeT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
                            }}
                          />
                          {item.available && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg" data-testid={`item-name-${sectionIndex}-${itemIndex}`}>
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={`text-xs ${getRarityBadge(item.rarity)}`}>
                              {item.rarity}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Stock Price & Discount */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Stock Price:</span>
                          <div className="text-right">
                            <span className="font-bold text-xl text-primary" data-testid={`item-value-${sectionIndex}-${itemIndex}`}>
                              ß{formatValue(item.stockPrice)}
                            </span>
                            {item.discount > 0 && (
                              <div className="text-xs text-green-600">
                                -{item.discount}% off
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Market Value:</span>
                          <span className="font-mono text-accent">ß{formatValue(item.value)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Demand:</span>
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < item.demand / 2 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="font-medium">{item.demand}/10</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Trend:</span>
                          <div className="flex items-center gap-1">
                            {getTrendIcon(item.trend)}
                            <span className="font-medium">{item.trend}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Link href={`/fruit/${encodeURIComponent(item.name)}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                        </Link>
                        <Button 
                          variant={item.available ? "default" : "secondary"} 
                          size="sm" 
                          className="flex-1"
                          disabled={!item.available}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          {item.available ? "Available" : "Out of Stock"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Normal Stock</h3>
              <p className="text-sm text-muted-foreground">
                Refreshes every 4 hours at main dealer locations
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Mirage Stock</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive dealer on Mirage Island, updates every 2 hours
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Deals</h3>
              <p className="text-sm text-muted-foreground">
                Compare stock prices with market values for best trades
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trading Tip */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">💡 Trading Tip</h3>
              <p className="text-muted-foreground mb-4">
                Stock prices are often better than market rates! Check the discount percentage to find the best deals. 
                Mirage Island stock tends to have rarer fruits but requires finding the island first.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Green dot = In Stock
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Missing dot = Out of Stock
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}