import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatValue, calculateWFL, fruitsDatabase, type FruitData } from "@/lib/fruitsDatabase";

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

  const addItem = (fruitName: string, side: 'your' | 'their') => {
    const targetArray = side === 'your' ? yourItems : theirItems;
    const setTargetArray = side === 'your' ? setYourItems : setTheirItems;

    if (targetArray.length >= 4) {
      alert('Maximum 4 items allowed per side!');
      return;
    }

    if (targetArray.find(item => item.name === fruitName)) {
      alert(`${fruitName} is already added to this side!`);
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

  const selectFruit = (side: 'your' | 'their') => {
    const fruitNames = Object.keys(fruitsDatabase);
    const selectedFruit = prompt(`Select a fruit to add to ${side} side:\n\n${fruitNames.slice(0, 10).join(', ')}...\n\nType the exact fruit name:`);
    
    if (selectedFruit && fruitsDatabase[selectedFruit]) {
      addItem(selectedFruit, side);
    } else if (selectedFruit) {
      alert('Fruit not found! Please check the spelling.');
    }
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
        onClick={() => selectFruit(side)}
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center cursor-pointer">
            <i className="fas fa-plus-circle text-4xl text-muted-foreground mb-4"></i>
            <p className="text-muted-foreground font-medium">Drag fruits here or click to add</p>
            <p className="text-sm text-muted-foreground mt-1">Up to 4 items</p>
          </div>
        ) : null}
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

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-card border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className={`wfl-indicator px-6 py-3 rounded-lg font-bold text-lg ${wflResult.className}`}
              data-testid="wfl-result"
            >
              {wflResult.result}
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">
                Difference: <span className="font-mono" data-testid="value-difference">{formatValue(wflResult.difference)}</span>
              </p>
              <p className="text-muted-foreground">
                Percentage: <span className="font-mono" data-testid="percentage-difference">{wflResult.percentage.toFixed(1)}%</span>
              </p>
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={resetCalculator}
            data-testid="reset-calculator-btn"
          >
            <i className="fas fa-undo mr-2"></i>Reset
          </Button>
        </div>
      </div>
    </Card>
  );
}
