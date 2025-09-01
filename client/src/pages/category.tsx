import { Link, useParams } from "wouter";
import { fruitsDatabase, formatValue, type FruitData } from "@/lib/fruitsDatabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

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
    <div className={`border-2 rounded-lg p-4 hover:scale-105 transition-transform ${rarityColors[fruit.rarity]}`}>
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
  );
}

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"value" | "demand" | "name">("value");

  // Normalize category name and get fruits
  const normalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "Natural";
  const categoryFruits = Object.values(fruitsDatabase).filter(
    fruit => fruit.type.toLowerCase() === category?.toLowerCase()
  );

  // Dynamic SEO optimization for category page
  useSEO({
    title: `${normalizedCategory} Fruits Values | Complete ${normalizedCategory} Trading List`,
    description: `Complete list of all ${normalizedCategory} type Blox Fruits with current trading values, demand ratings, and market trends. ${categoryFruits.length} ${normalizedCategory.toLowerCase()} fruits with detailed analysis.`,
    keywords: `${normalizedCategory.toLowerCase()} fruits, ${normalizedCategory.toLowerCase()} type blox fruits, ${normalizedCategory.toLowerCase()} values, ${normalizedCategory.toLowerCase()} trading list, blox fruits ${normalizedCategory.toLowerCase()}`,
    canonical: window.location.href
  });

  // Filter and sort fruits
  const filteredAndSortedFruits = categoryFruits
    .filter(fruit => fruit.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case "value":
          return b.value - a.value;
        case "demand":
          return b.demand - a.demand;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return b.value - a.value;
      }
    });

  if (!category || categoryFruits.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <i className="fas fa-exclamation-triangle text-4xl text-muted-foreground mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Category Not Found</h2>
          <p className="text-muted-foreground mb-6">The requested fruit category doesn't exist.</p>
          <Link href="/values">
            <Button>Back to Fruit Values</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors = {
    Natural: "from-green-500 to-emerald-600",
    Elemental: "from-blue-500 to-cyan-600", 
    Beast: "from-orange-500 to-red-600",
    Logia: "from-purple-500 to-indigo-600"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Link href="/values" className="hover:text-foreground">Fruit Values</Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-foreground font-medium">{normalizedCategory}</span>
        </nav>
        
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${categoryColors[normalizedCategory as keyof typeof categoryColors]} bg-clip-text text-transparent mb-4`}>
          {normalizedCategory} Fruits
        </h1>
        <p className="text-muted-foreground">
          {categoryFruits.length} {normalizedCategory.toLowerCase()} type fruits with their current market values
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder={`Search ${normalizedCategory.toLowerCase()} fruits...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            data-testid="category-search"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={sortBy === "value" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("value")}
            data-testid="sort-by-value"
          >
            <i className="fas fa-sort-amount-down mr-2"></i>
            Value
          </Button>
          <Button
            variant={sortBy === "demand" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("demand")}
            data-testid="sort-by-demand"
          >
            <i className="fas fa-fire mr-2"></i>
            Demand
          </Button>
          <Button
            variant={sortBy === "name" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("name")}
            data-testid="sort-by-name"
          >
            <i className="fas fa-sort-alpha-down mr-2"></i>
            Name
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{categoryFruits.length}</div>
          <div className="text-sm text-muted-foreground">Total Fruits</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent">
            {formatValue(Math.max(...categoryFruits.map(f => f.value)))}
          </div>
          <div className="text-sm text-muted-foreground">Highest Value</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-500">
            {categoryFruits.filter(f => f.inStock).length}
          </div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-500">
            {categoryFruits.filter(f => f.rarity === "Mythical").length}
          </div>
          <div className="text-sm text-muted-foreground">Mythical</div>
        </div>
      </div>

      {/* Fruits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAndSortedFruits.map(fruit => (
          <FruitCard key={fruit.name} fruit={fruit} />
        ))}
      </div>

      {/* No results message */}
      {searchTerm && filteredAndSortedFruits.length === 0 && (
        <div className="text-center py-12">
          <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">No fruits found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}