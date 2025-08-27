import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Sidebar() {
  const [location] = useLocation();

  const navigationItems = [
    {
      name: "Calculator",
      href: "/",
      icon: "fa-calculator",
      description: "Trade value calculator"
    },
    {
      name: "Fruit Values",
      href: "/values",
      icon: "fa-list-alt",
      description: "Complete fruit database"
    },
    {
      name: "Natural",
      href: "/values/natural",
      icon: "fa-leaf",
      description: "Natural type fruits"
    },
    {
      name: "Elemental",
      href: "/values/elemental",
      icon: "fa-fire",
      description: "Elemental type fruits"
    },
    {
      name: "Beast",
      href: "/values/beast",
      icon: "fa-paw",
      description: "Beast type fruits"
    },
    {
      name: "Logia",
      href: "/values/logia",
      icon: "fa-wind",
      description: "Logia type fruits"
    }
  ];

  const quickStats = [
    { label: "Total Fruits", value: "35+" },
    { label: "Categories", value: "4" },
    { label: "Updated", value: "Daily" }
  ];

  return (
    <div className="w-72 bg-card border-l border-border h-screen fixed right-0 top-0 z-40 overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground mb-2">BloxCalc Pro</h2>
        <p className="text-sm text-muted-foreground">Navigate to any section</p>
      </div>

      {/* Quick Stats */}
      <div className="p-6 border-b border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Quick Stats</h3>
        <div className="grid grid-cols-1 gap-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <Badge variant="secondary">{stat.value}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Navigation</h3>
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant={location === item.href || (item.href !== "/" && location.startsWith(item.href)) ? "default" : "ghost"}
                className="w-full justify-start h-auto p-3"
                data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center w-full">
                  <i className={`fas ${item.icon} mr-3 text-sm`}></i>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground opacity-75">{item.description}</div>
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="p-6 border-t border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Link href="/values">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <i className="fas fa-search mr-2"></i>
              Search Fruits
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <i className="fas fa-plus mr-2"></i>
              New Trade
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}