import { Card } from "@/components/ui/card";
import { formatValue, type FruitData } from "@/lib/fruitsDatabase";

interface FruitCardProps {
  fruit: FruitData;
  isPermanent: boolean;
  onDragStart?: () => void;
  onClick?: () => void;
}

export function FruitCard({ fruit, isPermanent, onDragStart, onClick }: FruitCardProps) {
  const currentValue = isPermanent ? fruit.permanentValue : fruit.value;

  const rarityClass = `rarity-${fruit.rarity.toLowerCase()}`;

  const trendIcons: Record<string, string> = {
    'Overpaid': 'fas fa-arrow-up text-destructive',
    'Dropping': 'fas fa-arrow-down text-destructive',
    'Rising': 'fas fa-arrow-up text-secondary',
    'Stable': 'fas fa-minus text-muted-foreground',
    'Soon': 'fas fa-clock text-accent',
    'Underpaid': 'fas fa-arrow-down text-secondary'
  };

  return (
    <Card 
      className={`fruit-card bg-card hover:bg-muted border border-border rounded-xl p-4 cursor-pointer transition-all duration-300 ${onClick ? 'cursor-pointer' : 'cursor-grab'}`}
      draggable={true}
      data-testid={`fruit-card-${fruit.name.toLowerCase().replace(/\s+/g, '-')}`}
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', fruit.name);
        e.dataTransfer.effectAllowed = 'copy';
        onDragStart?.();
      }}
      onClick={onClick}
    >
      <div className={`bg-gradient-to-br ${rarityClass} rounded-lg p-2 mb-3`}>
        <img 
          src={fruit.imageUrl} 
          alt={fruit.name} 
          className="w-full h-16 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIzMiIgeT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
          }}
        />
      </div>
      <h4 className="font-semibold text-xs mb-2 text-center leading-tight" data-testid={`fruit-name-${fruit.name.toLowerCase().replace(/\s+/g, '-')}`}>
        {fruit.name}
      </h4>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Value:</span>
          <span className="font-mono font-bold text-primary" data-testid={`fruit-value-${fruit.name.toLowerCase().replace(/\s+/g, '-')}`}>
            {formatValue(currentValue)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Demand:</span>
          <span className="font-medium">{fruit.demand}/10</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Trend:</span>
          <span className="font-medium">
            <i className={trendIcons[fruit.trend] || 'fas fa-minus text-muted-foreground'} />
          </span>
        </div>
      </div>
    </Card>
  );
}
