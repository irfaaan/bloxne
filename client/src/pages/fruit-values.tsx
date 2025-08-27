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

// Organize fruits by rarity
const rarityFruits = {
  Mythical: Object.values(fruitsDatabase).filter(fruit => fruit.rarity === "Mythical"),
  Legendary: Object.values(fruitsDatabase).filter(fruit => fruit.rarity === "Legendary"),
  Rare: Object.values(fruitsDatabase).filter(fruit => fruit.rarity === "Rare"),
  Uncommon: Object.values(fruitsDatabase).filter(fruit => fruit.rarity === "Uncommon"),
  Common: Object.values(fruitsDatabase).filter(fruit => fruit.rarity === "Common")
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

function getRarityStyle(rarity: string) {
  const rarityStyles = {
    Mythical: "border-purple-500/50 hover:border-purple-500 text-purple-600 dark:text-purple-400",
    Legendary: "border-orange-500/50 hover:border-orange-500 text-orange-600 dark:text-orange-400",
    Rare: "border-blue-500/50 hover:border-blue-500 text-blue-600 dark:text-blue-400",
    Uncommon: "border-green-500/50 hover:border-green-500 text-green-600 dark:text-green-400",
    Common: "border-gray-500/50 hover:border-gray-500 text-gray-600 dark:text-gray-400"
  };
  return rarityStyles[rarity as keyof typeof rarityStyles] || "";
}

function getRarityColors(rarity: string) {
  const rarityColors = {
    Mythical: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/50",
    Legendary: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/50",
    Rare: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/50",
    Uncommon: "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/50",
    Common: "bg-gray-500/20 text-gray-600 dark:text-gray-400 border border-gray-500/50"
  };
  return rarityColors[rarity as keyof typeof rarityColors] || "";
}

export default function FruitValues() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  // Filter fruits based on search, category, and rarity
  const getFilteredFruits = (fruits: FruitData[]) => {
    return fruits.filter(fruit => 
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRarity === "all" || fruit.rarity === selectedRarity)
    );
  };

  // Get all fruits for table view
  const getAllFilteredFruits = () => {
    let allFruits = Object.values(fruitsDatabase);
    
    // Apply category filter
    if (selectedCategory !== "all") {
      allFruits = allFruits.filter(fruit => fruit.type === selectedCategory);
    }
    
    // Apply other filters
    return getFilteredFruits(allFruits);
  };

  const categories = ["all", "Natural", "Elemental", "Beast", "Logia"];
  const rarities = ["all", "Mythical", "Legendary", "Rare", "Uncommon", "Common"];

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
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <Input
              placeholder="Search fruits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              data-testid="fruit-search"
            />
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
            <Button
              variant={viewMode === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("cards")}
              data-testid="cards-view"
            >
              <i className="fas fa-th-large mr-2"></i>
              Cards
            </Button>
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              data-testid="table-view"
            >
              <i className="fas fa-table mr-2"></i>
              Table
            </Button>
          </div>
        </div>
        
        {/* Type Categories */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Filter by Type</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category === "all" ? "All Types" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Rarity Categories */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Filter by Rarity</h3>
          <div className="flex flex-wrap gap-2">
            {rarities.map(rarity => (
              <Button
                key={rarity}
                variant={selectedRarity === rarity ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRarity(rarity)}
                data-testid={`filter-rarity-${rarity.toLowerCase()}`}
                className={selectedRarity === rarity ? "" : getRarityStyle(rarity)}
              >
                {rarity === "all" ? "All Rarities" : rarity}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Rarity Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {Object.entries(rarityFruits).map(([rarity, fruits]) => (
          <div key={rarity} className="p-4 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary hover:bg-primary/5 transition-all cursor-pointer text-center" onClick={() => setSelectedRarity(rarity)}>
            <h3 className="font-semibold text-lg mb-2">{rarity}</h3>
            <p className="text-muted-foreground text-sm">{fruits.length} fruits</p>
          </div>
        ))}
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
      {viewMode === "table" ? (
        // Table View
        <div className="bg-card rounded-lg border overflow-hidden">
          <div className="bg-muted px-6 py-4">
            <h2 className="text-lg font-semibold">Fruit Values Table</h2>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-muted/50 border-b font-medium text-sm">
            <div>Fruit</div>
            <div>Rarity</div>
            <div>Type</div>
            <div>PvP</div>
            <div>PvE</div>
            <div>Actions</div>
          </div>
          
          {/* Table Rows */}
          <div className="max-h-[600px] overflow-y-auto">
            {getAllFilteredFruits().map((fruit, index) => (
              <div key={fruit.name} className={`grid grid-cols-6 gap-4 px-6 py-4 border-b hover:bg-muted/30 transition-colors ${index % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
                {/* Fruit Name and Image */}
                <div className="flex items-center gap-3">
                  <img src={fruit.imageUrl} alt={fruit.name} className="w-8 h-8 rounded" />
                  <div>
                    <div className="font-medium text-sm">{fruit.name}</div>
                    <div className="text-xs text-muted-foreground">Demand: {fruit.demand}/10</div>
                  </div>
                </div>
                
                {/* Rarity */}
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getRarityColors(fruit.rarity)}`}>
                    {fruit.rarity}
                  </span>
                </div>
                
                {/* Type */}
                <div className="flex items-center text-sm">{fruit.type}</div>
                
                {/* PvP (Regular Value) */}
                <div className="flex items-center">
                  <span className="font-mono font-bold text-primary">{formatValue(fruit.value)}</span>
                </div>
                
                {/* PvE (Permanent Value) */}
                <div className="flex items-center">
                  <span className="font-mono font-bold text-accent">{formatValue(fruit.permanentValue)}</span>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link href={`/fruit/${encodeURIComponent(fruit.name)}`}>
                    <Button variant="outline" size="sm" data-testid={`view-${fruit.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <i className="fas fa-eye mr-1"></i>
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Cards View
        selectedCategory === "all" ? (
          // Show all categories or filtered by rarity
          Object.entries(categorizedFruits).map(([category, fruits]) => {
            const filteredFruits = getFilteredFruits(fruits);
            if (filteredFruits.length === 0 && (searchTerm || selectedRarity !== "all")) return null;
            
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
                  {(searchTerm || selectedRarity !== "all" ? filteredFruits : fruits.slice(0, 8)).map(fruit => (
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
        )
      )}

      {/* No results message */}
      {(searchTerm || selectedRarity !== "all") && Object.values(categorizedFruits).every(fruits => getFilteredFruits(fruits).length === 0) && (
        <div className="text-center py-12">
          <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">No fruits found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
}