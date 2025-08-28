import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Updates() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Updates & Changelog
        </h1>
        <p className="text-muted-foreground">
          Stay up to date with the latest improvements, features, and value changes in BloxCalc Pro.
        </p>
      </div>

      <div className="space-y-6">
        {/* Latest Update */}
        <Card className="border-primary/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Badge variant="default">Latest</Badge>
                <span>Version 2.1.0</span>
              </CardTitle>
              <span className="text-sm text-muted-foreground">January 15, 2025</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-500 flex items-center space-x-2">
                <i className="fas fa-plus text-xs"></i>
                <span>New Features</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Added comprehensive Trading Guide with strategies and tips</li>
                <li>• Implemented FAQ section with community-driven answers</li>
                <li>• Enhanced mobile responsiveness across all pages</li>
                <li>• Added fruit category filtering for better navigation</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-500 flex items-center space-x-2">
                <i className="fas fa-wrench text-xs"></i>
                <span>Improvements</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Faster loading times for fruit value database</li>
                <li>• Improved calculator accuracy with latest market data</li>
                <li>• Better search functionality for finding specific fruits</li>
                <li>• Enhanced visual feedback for trade calculations</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-500 flex items-center space-x-2">
                <i className="fas fa-chart-line text-xs"></i>
                <span>Value Updates</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Dragon: Increased value due to high PvP demand</li>
                <li>• Dough: Slight decrease after nerf in recent game update</li>
                <li>• Buddha: Remained stable as top grinding fruit</li>
                <li>• Phoenix: Increased value due to rarity and versatility</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Previous Updates */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Version 2.0.5</CardTitle>
              <span className="text-sm text-muted-foreground">January 8, 2025</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-500 flex items-center space-x-2">
                <i className="fas fa-wrench text-xs"></i>
                <span>Bug Fixes</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Fixed calculator not updating when removing fruits</li>
                <li>• Resolved mobile menu navigation issues</li>
                <li>• Fixed fruit images not loading on slower connections</li>
                <li>• Corrected value display formatting for large numbers</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-500 flex items-center space-x-2">
                <i className="fas fa-chart-line text-xs"></i>
                <span>Value Updates</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Leopard: Minor increase based on trading patterns</li>
                <li>• Venom: Stable value maintained</li>
                <li>• Control: Increased due to PvP effectiveness</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Version 2.0.0</CardTitle>
              <span className="text-sm text-muted-foreground">December 28, 2024</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-500 flex items-center space-x-2">
                <i className="fas fa-plus text-xs"></i>
                <span>Major Release</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Complete UI redesign with modern dark theme</li>
                <li>• New fruit database with detailed information</li>
                <li>• Advanced calculator with trade analysis</li>
                <li>• Responsive design for all devices</li>
                <li>• Fruit categorization and filtering system</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-500 flex items-center space-x-2">
                <i className="fas fa-database text-xs"></i>
                <span>Database Overhaul</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Updated all fruit values based on latest market data</li>
                <li>• Added rarity indicators for each fruit</li>
                <li>• Included detailed fruit descriptions and abilities</li>
                <li>• Added high-quality fruit images</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Version 1.5.2</CardTitle>
              <span className="text-sm text-muted-foreground">December 15, 2024</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-500 flex items-center space-x-2">
                <i className="fas fa-chart-line text-xs"></i>
                <span>Value Updates</span>
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Major value adjustments following game update 20.2</li>
                <li>• New fruits: Kitsune and T-Rex added to database</li>
                <li>• Balanced values for recently buffed/nerfed fruits</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Features */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-rocket text-accent"></i>
              <span>Coming Soon</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground mb-4">
                We're constantly working to improve BloxCalc Pro. Here's what's coming next:
              </p>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-500 text-xs"></i>
                  <span>Historical value tracking and price charts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-500 text-xs"></i>
                  <span>User accounts for saving favorite trades</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-500 text-xs"></i>
                  <span>Advanced trade finder with filtering options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-500 text-xs"></i>
                  <span>Daily market reports and trending fruits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-500 text-xs"></i>
                  <span>Community voting system for value updates</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Call-to-Action */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Have Suggestions?</h3>
              <p className="text-muted-foreground">
                Help us improve BloxCalc Pro by sharing your ideas and feedback!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <i className="fas fa-comment mr-2"></i>
                Send Feedback
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}