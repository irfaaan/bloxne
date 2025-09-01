import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSEO } from "@/hooks/useSEO";

export default function TradingGuide() {
  // SEO optimization for Trading Guide page
  useSEO({
    title: "Complete Blox Fruits Trading Guide | Values, Strategies & Tips",
    description: "Master Blox Fruits trading with our comprehensive guide. Learn about fruit values, rarity tiers, demand analysis, trading strategies, and how to avoid scams. Expert tips included.",
    keywords: "blox fruits trading guide, fruit trading strategies, values guide, rarity tiers, demand analysis, trading tips, scam prevention, fruit market guide",
    canonical: window.location.href
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Blox Fruits Trading Guide
        </h1>
        <p className="text-muted-foreground">
          Master the art of trading with our comprehensive guide to Blox Fruits values and strategies.
        </p>
      </div>

      <div className="space-y-8">
        {/* Quick Start */}
        <Alert>
          <i className="fas fa-lightbulb"></i>
          <AlertDescription>
            <strong>Pro Tip:</strong> Always check current values before making trades. The market changes frequently!
          </AlertDescription>
        </Alert>

        {/* Understanding Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-chart-line text-primary"></i>
              <span>Understanding Fruit Values</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Fruit values in Blox Fruits are determined by several factors:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Badge variant="outline">Rarity</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  How difficult it is to obtain the fruit naturally through spawning or purchasing.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Badge variant="outline">Demand</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  How much players want the fruit for PvP, grinding, or collection purposes.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Badge variant="outline">Meta</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Current strength in PvP and PvE after recent game updates.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Badge variant="outline">Aesthetics</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Visual appeal and special effects that make fruits desirable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fruit Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-layer-group text-accent"></i>
              <span>Fruit Categories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-500">Natural Fruits</h4>
                <p className="text-sm text-muted-foreground">
                  Fruits that manipulate the physical world and environment. Generally good for grinding and some PvP scenarios.
                </p>
                <div className="text-xs space-y-1">
                  <div>• <strong>Examples:</strong> Quake, Buddha, Pain</div>
                  <div>• <strong>Best for:</strong> Grinding, AOE damage</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-500">Elemental Fruits</h4>
                <p className="text-sm text-muted-foreground">
                  Fruits that control natural elements. Often have logia intangibility and are popular for both PvP and grinding.
                </p>
                <div className="text-xs space-y-1">
                  <div>• <strong>Examples:</strong> Dragon, Dough, Venom</div>
                  <div>• <strong>Best for:</strong> PvP, logia immunity</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-500">Beast Fruits</h4>
                <p className="text-sm text-muted-foreground">
                  Fruits that transform users into animals or mythical creatures. Offer unique combat styles and transformations.
                </p>
                <div className="text-xs space-y-1">
                  <div>• <strong>Examples:</strong> Leopard, Phoenix, T-Rex</div>
                  <div>• <strong>Best for:</strong> Unique abilities, versatility</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trading Strategies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-chess text-primary"></i>
              <span>Trading Strategies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-500 mb-2">Value Trading</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Focus on getting fruits worth more than what you're giving away.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Always use BloxCalc Pro to check trade values</li>
                  <li>• Look for traders who don't know current values</li>
                  <li>• Be patient and wait for good deals</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-500 mb-2">Demand Trading</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Trade for fruits that are currently in high demand, even if values seem equal.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Follow game updates and meta changes</li>
                  <li>• Stock up on fruits before they become popular</li>
                  <li>• Sell when demand peaks</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-500 mb-2">Collection Trading</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Help collectors complete their fruit collections for premium prices.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Keep rare fruits that collectors need</li>
                  <li>• Charge extra for hard-to-find fruits</li>
                  <li>• Build relationships with regular collectors</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trading Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span>Pro Trading Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-500">Do's</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>Always verify fruit values before trading</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>Screenshot trades for your records</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>Be patient for the right deals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>Trade with trusted players when possible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>Follow market trends and updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-red-500">Don'ts</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-times text-red-500 mt-1 text-xs"></i>
                    <span>Rush into trades without checking values</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-times text-red-500 mt-1 text-xs"></i>
                    <span>Trade away your main grinding fruit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-times text-red-500 mt-1 text-xs"></i>
                    <span>Fall for obvious scam trades</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-times text-red-500 mt-1 text-xs"></i>
                    <span>Trade with suspicious or new accounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-times text-red-500 mt-1 text-xs"></i>
                    <span>Ignore market crashes or updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety First */}
        <Alert>
          <i className="fas fa-shield-alt"></i>
          <AlertDescription>
            <strong>Safety First:</strong> Always double-check trades and never trade your only valuable fruit unless you're certain. 
            The Blox Fruits market can be unpredictable!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}