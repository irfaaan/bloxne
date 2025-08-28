import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FruitCard } from "./FruitCard";
import { fruitsDatabase, formatValue, type FruitData } from "@/lib/fruitsDatabase";

interface FruitLibraryProps {
  isPermanent: boolean;
  onFruitClick: (fruitName: string) => void;
}

export function FruitLibrary({ isPermanent, onFruitClick }: FruitLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("value-desc");
  const [valueRange, setValueRange] = useState<string>("all");

  const filteredFruits = useMemo(() => {
    let fruits = Object.entries(fruitsDatabase).filter(([name, fruit]) => {
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRarity = selectedRarity === "all" || fruit.rarity === selectedRarity;
      
      // Value range filter
      let matchesValueRange = true;
      if (valueRange !== "all") {
        const currentValue = isPermanent ? fruit.permanentValue : fruit.value;
        switch (valueRange) {
          case "under-1m":
            matchesValueRange = currentValue < 1000000;
            break;
          case "1m-10m":
            matchesValueRange = currentValue >= 1000000 && currentValue < 10000000;
            break;
          case "10m-100m":
            matchesValueRange = currentValue >= 10000000 && currentValue < 100000000;
            break;
          case "over-100m":
            matchesValueRange = currentValue >= 100000000;
            break;
        }
      }
      
      return matchesSearch && matchesRarity && matchesValueRange;
    });

    // Apply sorting
    switch (sortBy) {
      case "alphabetical":
        fruits.sort(([a], [b]) => a.localeCompare(b));
        break;
      case "value-desc":
        fruits.sort(([, a], [, b]) => (isPermanent ? b.permanentValue - a.permanentValue : b.value - a.value));
        break;
      case "value-asc":
        fruits.sort(([, a], [, b]) => (isPermanent ? a.permanentValue - b.permanentValue : a.value - b.value));
        break;
      case "demand":
        fruits.sort(([, a], [, b]) => b.demand - a.demand);
        break;
      case "rarity":
        const rarityOrder = { "Mythical": 5, "Legendary": 4, "Rare": 3, "Uncommon": 2, "Common": 1 };
        fruits.sort(([, a], [, b]) => rarityOrder[b.rarity as keyof typeof rarityOrder] - rarityOrder[a.rarity as keyof typeof rarityOrder]);
        break;
    }

    return fruits;
  }, [searchTerm, selectedRarity, sortBy, valueRange, isPermanent]);

  const topFruits = useMemo(() => {
    return Object.entries(fruitsDatabase)
      .sort(([, a], [, b]) => (isPermanent ? b.permanentValue - a.permanentValue : b.value - a.value))
      .slice(0, 3);
  }, [isPermanent]);

  const trendCounts = useMemo(() => {
    const trends = Object.values(fruitsDatabase).reduce((acc, fruit) => {
      acc[fruit.trend] = (acc[fruit.trend] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      overpaid: (trends['Overpaid'] || 0),
      stable: (trends['Stable'] || 0),
      rising: (trends['Rising'] || 0) + (trends['Soon'] || 0)
    };
  }, []);

  const rarities = ["all", "Mythical", "Legendary", "Rare", "Uncommon", "Common"];

  return (
    <div className="space-y-8">
      {/* Quick Stats and Search */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-effect rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Find Fruits</h3>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search fruits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="fruit-search"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"></i>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Rarity Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Filter by Rarity</label>
                  <div className="flex flex-wrap gap-2">
                    {rarities.map((rarity) => (
                      <Button
                        key={rarity}
                        variant={selectedRarity === rarity ? "default" : "secondary"}
                        size="sm"
                        onClick={() => setSelectedRarity(rarity)}
                        data-testid={`filter-${rarity.toLowerCase()}`}
                      >
                        {rarity}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Value Range Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Value Range</label>
                  <Select value={valueRange} onValueChange={setValueRange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All values" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Values</SelectItem>
                      <SelectItem value="under-1m">Under 1M</SelectItem>
                      <SelectItem value="1m-10m">1M - 10M</SelectItem>
                      <SelectItem value="10m-100m">10M - 100M</SelectItem>
                      <SelectItem value="over-100m">Over 100M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="text-sm font-medium mb-2 block">Sort by</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="value-desc">Highest Value</SelectItem>
                    <SelectItem value="value-asc">Lowest Value</SelectItem>
                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    <SelectItem value="demand">Highest Demand</SelectItem>
                    <SelectItem value="rarity">Rarity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Top Values */}
          <Card className="glass-effect rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-crown text-accent mr-2"></i>
              Top Values
            </h3>
            <div className="space-y-3">
              {topFruits.map(([name, fruit]) => {
                const currentValue = isPermanent ? fruit.permanentValue : fruit.value;
                return (
                  <div key={name} className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img src={fruit.imageUrl} alt={name} className="w-8 h-8 rounded" />
                      <span className="font-medium text-sm">{name}</span>
                    </div>
                    <span className="font-mono text-accent font-bold text-sm">{formatValue(currentValue)}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Market Trends */}
          <Card className="glass-effect rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-line text-secondary mr-2"></i>
              Market Trends
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Overpaid Items</span>
                <span className="text-sm text-destructive font-medium" data-testid="overpaid-count">{trendCounts.overpaid}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Stable Market</span>
                <span className="text-sm text-secondary font-medium" data-testid="stable-count">{trendCounts.stable}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Rising Values</span>
                <span className="text-sm text-primary font-medium" data-testid="rising-count">{trendCounts.rising}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Fruits Grid */}
      <Card className="glass-effect rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <i className="fas fa-apple-alt text-secondary mr-3"></i>
            Fruits Library
            <span className="ml-2 text-sm text-muted-foreground font-normal">({filteredFruits.length} fruits)</span>
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">View Mode:</span>
            <Select value={isPermanent ? "permanent" : "regular"}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular</SelectItem>
                <SelectItem value="permanent">Permanent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4" data-testid="fruits-grid">
          {filteredFruits.map(([name, fruit]) => (
            <FruitCard
              key={name}
              fruit={fruit}
              isPermanent={isPermanent}
              onClick={() => onFruitClick(name)}
            />
          ))}
        </div>

        {filteredFruits.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
            <p className="text-muted-foreground">No fruits found matching your criteria.</p>
          </div>
        )}
      </Card>
    </div>
  );
}
