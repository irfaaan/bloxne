import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, RefreshCw } from "lucide-react";

interface StockItem {
  name: string;
  value: string;
  image?: string;
}

interface StockSection {
  title: string;
  description: string;
  updateInterval: string;
  nextUpdate: string;
  items: StockItem[];
}

export default function Stocks() {
  const [timeLeft, setTimeLeft] = useState({
    normal: "0H 30M 47S",
    mirage: "0H 30M 47S"
  });

  // Stock data from DarkKitsune
  const stockSections: StockSection[] = [
    {
      title: "Normal Stock",
      description: "Updated every 4 hours",
      updateInterval: "4 hours",
      nextUpdate: timeLeft.normal,
      items: [
        { name: "Light", value: "650k" },
        { name: "Spring", value: "60k" }
      ]
    },
    {
      title: "Mirage Stock", 
      description: "Updated every 2 hours",
      updateInterval: "2 hours",
      nextUpdate: timeLeft.mirage,
      items: [
        { name: "Control", value: "3.2M" },
        { name: "Love", value: "1.3M" },
        { name: "Light", value: "650k" },
        { name: "Flame", value: "250k" },
        { name: "Blade", value: "30k" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // This would normally calculate real countdown times
      // For now showing static data from DarkKitsune
      setTimeLeft({
        normal: "0H 30M 47S",
        mirage: "0H 30M 47S"
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatValue = (value: string) => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const unit = value.replace(/[0-9.]/g, '');
    
    if (numericValue >= 1000000) {
      return `${(numericValue / 1000000).toFixed(1)}M`;
    } else if (numericValue >= 1000) {
      return `${(numericValue / 1000).toFixed(0)}k`;
    }
    return value;
  };

  return (
    <div className="container mx-auto px-4 py-8" data-testid="stocks-page">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4" data-testid="page-title">
            Blox Fruits Stock
          </h1>
          <p className="text-lg text-muted-foreground mb-6" data-testid="page-description">
            Real-time stock information from dealers across the seas
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
            <span>Data sourced from DarkKitsune.com</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stockSections.map((section, sectionIndex) => (
            <Card key={section.title} className="shadow-lg" data-testid={`stock-section-${sectionIndex}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold" data-testid={`section-title-${sectionIndex}`}>
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1" data-testid={`section-description-${sectionIndex}`}>
                      {section.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="px-3 py-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {section.nextUpdate}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={`${item.name}-${itemIndex}`}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      data-testid={`stock-item-${sectionIndex}-${itemIndex}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm" data-testid={`item-name-${sectionIndex}-${itemIndex}`}>
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">Fruit</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary" data-testid={`item-value-${sectionIndex}-${itemIndex}`}>
                          ß {formatValue(item.value)}
                        </div>
                        <div className="text-xs text-muted-foreground">Value</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
                    Next stock refresh in: <span className="font-semibold">{section.nextUpdate}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Stock Information</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Stock rotates automatically at set intervals. Check back regularly for the best deals!
              </p>
              <div className="flex justify-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Normal Stock: Every 4 hours
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Mirage Stock: Every 2 hours
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}