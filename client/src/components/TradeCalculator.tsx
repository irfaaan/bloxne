import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatValue, calculateWFL, fruitsDatabase, type FruitData } from "@/lib/fruitsDatabase";
import { FruitSelectionModal } from "./FruitSelectionModal";
import { useToast } from "@/hooks/use-toast";

interface TradeItem {
  name: string;
  value: number;
  fruit: FruitData;
}

interface TradeCalculatorProps {
  isPermanent: boolean;
  onModeChange: (mode: 'regular' | 'permanent') => void;
}

export function TradeCalculator({ isPermanent, onModeChange }: TradeCalculatorProps) {
  const [yourItems, setYourItems] = useState<TradeItem[]>([]);
  const [theirItems, setTheirItems] = useState<TradeItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSide, setModalSide] = useState<'your' | 'their'>('your');
  const { toast } = useToast();

  const addItem = (fruitName: string, side: 'your' | 'their') => {
    const targetArray = side === 'your' ? yourItems : theirItems;
    const setTargetArray = side === 'your' ? setYourItems : setTheirItems;

    if (targetArray.length >= 4) {
      toast({
        title: "Maximum Limit Reached",
        description: "You can only add up to 4 items per side.",
        variant: "destructive",
      });
      return;
    }

    if (targetArray.find(item => item.name === fruitName)) {
      toast({
        title: "Duplicate Item",
        description: `${fruitName} is already added to this side!`,
        variant: "destructive",
      });
      return;
    }

    const fruit = fruitsDatabase[fruitName];
    if (!fruit) return;

    const currentValue = isPermanent ? fruit.permanentValue : fruit.value;
    const newItem: TradeItem = {
      name: fruitName,
      value: currentValue,
      fruit
    };

    setTargetArray([...targetArray, newItem]);
    
    toast({
      title: "Item Added",
      description: `${fruitName} added to ${side === 'your' ? 'your' : 'their'} offer`,
    });
  };

  const removeItem = (fruitName: string, side: 'your' | 'their') => {
    const targetArray = side === 'your' ? yourItems : theirItems;
    const setTargetArray = side === 'your' ? setYourItems : setTheirItems;
    
    setTargetArray(targetArray.filter(item => item.name !== fruitName));
  };

  const resetCalculator = () => {
    setYourItems([]);
    setTheirItems([]);
  };

  const yourTotal = yourItems.reduce((sum, item) => sum + item.value, 0);
  const theirTotal = theirItems.reduce((sum, item) => sum + item.value, 0);
  const wflResult = calculateWFL(yourTotal, theirTotal);

  const handleDrop = (e: React.DragEvent, side: 'your' | 'their') => {
    e.preventDefault();
    const fruitName = e.dataTransfer.getData('text/plain');
    if (fruitName) {
      addItem(fruitName, side);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const openFruitModal = (side: 'your' | 'their') => {
    setModalSide(side);
    setModalOpen(true);
  };

  const handleFruitSelect = (fruitName: string) => {
    addItem(fruitName, modalSide);
  };

  const TradeZone = ({ side, items }: { side: 'your' | 'their', items: TradeItem[] }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${side === 'your' ? 'text-secondary' : 'text-accent'}`}>
          {side === 'your' ? 'Your Offer' : 'Their Offer'}
        </h3>
        <span className="text-sm text-muted-foreground">
          Value: <span className={`font-mono ${side === 'your' ? 'text-secondary' : 'text-accent'}`} data-testid={`${side}-total`}>
            {formatValue(side === 'your' ? yourTotal : theirTotal)}
          </span>
        </span>
      </div>
      
      <div 
        className="trade-zone rounded-xl p-6 min-h-[200px] transition-all duration-300"
        data-testid={`${side}-trade-zone`}
        onDrop={(e) => handleDrop(e, side)}
        onDragOver={handleDragOver}
        onDragEnter={(e) => {
          e.preventDefault();
          e.currentTarget.classList.add('drag-over');
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.currentTarget.classList.remove('drag-over');
        }}
        onClick={() => openFruitModal(side)}
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center cursor-pointer">
            <i className="fas fa-plus-circle text-4xl text-muted-foreground mb-4"></i>
            <p className="text-muted-foreground font-medium">Drag fruits here or click to add</p>
            <p className="text-sm text-muted-foreground mt-1">Up to 4 items</p>
          </div>
        ) : items.length < 4 ? (
          <div className="flex flex-col items-center justify-center h-full text-center cursor-pointer py-8">
            <i className="fas fa-plus-circle text-2xl text-muted-foreground/60 mb-3"></i>
            <p className="text-muted-foreground font-medium">Click to add more items</p>
            <p className="text-sm text-muted-foreground mt-1">
              {4 - items.length} slot{4 - items.length !== 1 ? 's' : ''} remaining
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-8">
            <i className="fas fa-check-circle text-2xl text-green-500 mb-3"></i>
            <p className="text-muted-foreground font-medium">Trade offer complete</p>
            <p className="text-sm text-muted-foreground mt-1">4/4 items added</p>
          </div>
        )}
      </div>
      
      <div className="space-y-2 min-h-[100px]" data-testid={`${side}-items`}>
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-3 bg-muted rounded-lg animate-slide-up">
            <div className="flex items-center space-x-3">
              <img src={item.fruit.imageUrl} alt={item.name} className="w-8 h-8 rounded" />
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">Demand: {item.fruit.demand}/10</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-sm font-bold">{formatValue(item.value)}</span>
              <Button
                size="sm"
                variant="ghost"
                className="text-destructive hover:text-destructive/80 h-6 w-6 p-0"
                data-testid={`remove-${item.name.toLowerCase().replace(/\s+/g, '-')}-${side}`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.name, side);
                }}
              >
                <i className="fas fa-times text-xs" />
              </Button>
            </div>
          </div>
        ))}
        
        {/* Add Item Button - Only show if we have items but less than 4 */}
        {items.length > 0 && items.length < 4 && (
          <Button
            variant="outline"
            className="w-full h-12 border-dashed border-muted-foreground/50 hover:border-primary hover:bg-primary/5 transition-all duration-200"
            onClick={() => openFruitModal(side)}
            data-testid={`add-more-items-${side}`}
          >
            <i className="fas fa-plus mr-2"></i>
            Add Item ({4 - items.length} remaining)
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <Card className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <i className="fas fa-exchange-alt text-primary mr-3"></i>
          Trade Calculator
        </h2>
        <div className="flex items-center space-x-2">
          <Button
            variant={!isPermanent ? "default" : "secondary"}
            onClick={() => onModeChange('regular')}
            data-testid="regular-mode-btn"
          >
            Regular
          </Button>
          <Button
            variant={isPermanent ? "default" : "secondary"}
            onClick={() => onModeChange('permanent')}
            data-testid="permanent-mode-btn"
          >
            Permanent
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TradeZone side="your" items={yourItems} />
        <TradeZone side="their" items={theirItems} />
      </div>

      {/* Trade Summary Section */}
      <div className="mt-6 space-y-4">
        {/* WFL Result */}
        <div className="text-center">
          <div 
            className={`inline-flex items-center px-8 py-3 rounded-lg font-bold text-xl ${wflResult.className}`}
            data-testid="wfl-result"
          >
            {wflResult.result}
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Your Offer Summary */}
          <div className="text-center p-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">YOUR OFFER</h3>
            <div className="text-2xl font-bold text-primary font-mono" data-testid="your-offer-total">
              {yourTotal.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Demand: {Math.round(yourItems.reduce((sum, item) => sum + item.fruit.demand, 0) / Math.max(yourItems.length, 1))}/10
            </div>
            <div className="text-xs text-muted-foreground">
              Price: {formatValue(yourItems.reduce((sum, item) => sum + item.fruit.price, 0))}
            </div>
          </div>

          {/* VS */}
          <div className="text-center">
            <div className="text-muted-foreground text-lg font-medium">vs</div>
          </div>

          {/* Their Offer Summary */}
          <div className="text-center p-4 bg-gradient-to-br from-accent/20 to-destructive/20 rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">THEIR OFFER</h3>
            <div className="text-2xl font-bold text-accent font-mono" data-testid="their-offer-total">
              {theirTotal.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Demand: {Math.round(theirItems.reduce((sum, item) => sum + item.fruit.demand, 0) / Math.max(theirItems.length, 1))}/10
            </div>
            <div className="text-xs text-muted-foreground">
              Price: {formatValue(theirItems.reduce((sum, item) => sum + item.fruit.price, 0))}
            </div>
          </div>
        </div>

        {/* Percentage Bar */}
        {(yourTotal > 0 || theirTotal > 0) && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{wflResult.yourPercentage.toFixed(0)}%</span>
              <span>{wflResult.theirPercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-primary flex">
                <div 
                  className="bg-secondary transition-all duration-500" 
                  style={{ width: `${wflResult.yourPercentage}%` }}
                ></div>
                <div 
                  className="bg-accent transition-all duration-500" 
                  style={{ width: `${wflResult.theirPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Difference Display */}
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">DIFFERENCE:</div>
          <div 
            className={`text-lg font-bold font-mono ${theirTotal > yourTotal ? 'text-red-500' : theirTotal < yourTotal ? 'text-green-500' : 'text-muted-foreground'}`}
            data-testid="value-difference"
          >
            {theirTotal > yourTotal ? '-' : theirTotal < yourTotal ? '+' : ''}{wflResult.difference.toLocaleString()}
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <Button
            variant="destructive"
            onClick={resetCalculator}
            data-testid="reset-calculator-btn"
            className="px-8"
          >
            <i className="fas fa-undo mr-2"></i>Reset Calculator
          </Button>
        </div>
      </div>

      {/* Fruit Selection Modal */}
      <FruitSelectionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectFruit={handleFruitSelect}
        isPermanent={isPermanent}
        title={`Select fruit for ${modalSide === 'your' ? 'Your' : 'Their'} offer`}
      />
    </Card>
  );
}
