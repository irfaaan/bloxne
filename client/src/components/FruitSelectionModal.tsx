import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FruitCard } from "./FruitCard";
import { fruitsDatabase } from "@/lib/fruitsDatabase";

interface FruitSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onSelectFruit: (fruitName: string) => void;
  isPermanent: boolean;
  title: string;
}

export function FruitSelectionModal({ open, onClose, onSelectFruit, isPermanent, title }: FruitSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");

  const filteredFruits = useMemo(() => {
    return Object.entries(fruitsDatabase).filter(([name, fruit]) => {
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRarity = selectedRarity === "all" || fruit.rarity === selectedRarity;
      return matchesSearch && matchesRarity;
    });
  }, [searchTerm, selectedRarity]);

  const rarities = ["all", "Mythical", "Legendary", "Rare", "Uncommon", "Common"];

  const handleFruitSelect = (fruitName: string) => {
    onSelectFruit(fruitName);
    onClose();
    setSearchTerm("");
    setSelectedRarity("all");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <i className="fas fa-apple-alt text-secondary mr-2"></i>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search fruits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="modal-fruit-search"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"></i>
            </div>

            <div className="flex flex-wrap gap-2">
              {rarities.map((rarity) => (
                <Button
                  key={rarity}
                  variant={selectedRarity === rarity ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedRarity(rarity)}
                  data-testid={`modal-filter-${rarity.toLowerCase()}`}
                >
                  {rarity}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{filteredFruits.length} fruits found</span>
            <span>Mode: {isPermanent ? 'Permanent' : 'Regular'} values</span>
          </div>

          {/* Fruits Grid */}
          <ScrollArea className="h-[400px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-1">
              {filteredFruits.map(([name, fruit]) => (
                <div key={name} className="cursor-pointer" onClick={() => handleFruitSelect(name)}>
                  <FruitCard
                    fruit={fruit}
                    isPermanent={isPermanent}
                    onClick={() => handleFruitSelect(name)}
                  />
                </div>
              ))}
            </div>

            {filteredFruits.length === 0 && (
              <div className="text-center py-12">
                <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
                <p className="text-muted-foreground">No fruits found matching your criteria.</p>
                <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </ScrollArea>

          {/* Quick Add Popular Fruits */}
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-3">Quick Add Popular:</p>
            <div className="flex flex-wrap gap-2">
              {["West Dragon", "East Dragon", "Kitsune", "Leopard", "Dough", "Buddha", "Portal", "Lightning"].map((fruitName) => (
                <Button
                  key={fruitName}
                  variant="outline"
                  size="sm"
                  onClick={() => handleFruitSelect(fruitName)}
                  data-testid={`quick-add-${fruitName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs"
                >
                  {fruitName}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}