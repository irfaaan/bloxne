import { useState } from "react";
import { Link } from "wouter";
import { fruitsDatabase, formatValue, type FruitData } from "@/lib/fruitsDatabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Organize fruits by categories
const categorizedFruits = {
  Natural: Object.values(fruitsDatabase).filter(fruit => fruit.type === "Natural"),
  Elemental: Object.values(fruitsDatabase).filter(fruit => fruit.type === "Elemental"),
  Beast: Object.values(fruitsDatabase).filter(fruit => fruit.type === "Beast"),
  Logia: Object.values(fruitsDatabase).filter(fruit => fruit.type === "Logia")
};

function FruitCard({ fruit }: { fruit: FruitData }) {
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

  return (
    <Link href={`/fruit/${encodeURIComponent(fruit.name)}`}>
      <div className={`border-2 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer ${rarityColors[fruit.rarity]}`} data-testid={`fruit-card-${fruit.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex items-center space-x-3 mb-3">
          <img src={fruit.imageUrl} alt={fruit.name} className="w-12 h-12 rounded-lg" />
          <div className="flex-1">
            <h3 className="font-semibold text-sm">{fruit.name}</h3>
            <p className="text-xs text-muted-foreground">{fruit.rarity} • {fruit.type}</p>
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Value:</span>
            <span className="font-bold text-primary">{formatValue(fruit.value)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Permanent:</span>
            <span className="font-bold text-accent">{formatValue(fruit.permanentValue)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Demand:</span>
            <span className="font-medium">{fruit.demand}/10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Trend:</span>
            <span className={`font-medium ${trendColors[fruit.trend]}`}>{fruit.trend}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stock:</span>
            <span className={fruit.inStock ? "text-green-500" : "text-red-500"}>
              {fruit.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FruitValues() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter fruits based on search and category
  const getFilteredFruits = (fruits: FruitData[]) => {
    return fruits.filter(fruit => 
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const categories = ["all", "Natural", "Elemental", "Beast", "Logia"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Fruit Values Database
        </h1>
        <p className="text-muted-foreground">
          Complete catalog of all Blox Fruits with their current market values, demand ratings, and trading trends.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search fruits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            data-testid="fruit-search"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category === "all" ? "All Categories" : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(categorizedFruits).map(([category, fruits]) => (
          <Link key={category} href={`/values/${category.toLowerCase()}`}>
            <div className="p-6 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary hover:bg-primary/5 transition-all cursor-pointer text-center">
              <h3 className="font-semibold text-lg mb-2">{category}</h3>
              <p className="text-muted-foreground">{fruits.length} fruits</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Fruits Display */}
      {selectedCategory === "all" ? (
        // Show all categories
        Object.entries(categorizedFruits).map(([category, fruits]) => {
          const filteredFruits = getFilteredFruits(fruits);
          if (filteredFruits.length === 0 && searchTerm) return null;
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                <Link href={`/values/${category.toLowerCase()}`}>
                  <Button variant="outline" size="sm">
                    View All ({fruits.length})
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {(searchTerm ? filteredFruits : fruits.slice(0, 8)).map(fruit => (
                  <FruitCard key={fruit.name} fruit={fruit} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        // Show specific category
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {getFilteredFruits(categorizedFruits[selectedCategory as keyof typeof categorizedFruits]).map(fruit => (
              <FruitCard key={fruit.name} fruit={fruit} />
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {searchTerm && Object.values(categorizedFruits).every(fruits => getFilteredFruits(fruits).length === 0) && (
        <div className="text-center py-12">
          <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">No fruits found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}