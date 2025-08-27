import type { Fruit } from "@shared/schema";

export interface FruitData {
  name: string;
  value: number;
  permanentValue: number;
  price: number;
  rarity: "Mythical" | "Legendary" | "Rare" | "Uncommon" | "Common";
  demand: number;
  trend: "Overpaid" | "Dropping" | "Rising" | "Stable" | "Soon" | "Underpaid";
  type: "Beast" | "Logia" | "Natural" | "Elemental";
  imageUrl: string;
  inStock: boolean;
}

export const fruitsDatabase: Record<string, FruitData> = {
  "West Dragon": {
    name: "West Dragon",
    value: 1325000000,
    permanentValue: 2650000000,
    price: 15000000,
    rarity: "Mythical",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/7LfBxxs8/West-Dragon.png",
    inStock: false
  },
  "East Dragon": {
    name: "East Dragon",
    value: 1060000000,
    permanentValue: 2120000000,
    price: 15000000,
    rarity: "Mythical",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/gkzHzzjS/East-Dragon.png",
    inStock: false
  },
  "Kitsune": {
    name: "Kitsune",
    value: 265000000,
    permanentValue: 530000000,
    price: 8000000,
    rarity: "Mythical",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/CLxbycr9/Kitsune.png",
    inStock: false
  },
  "Yeti": {
    name: "Yeti",
    value: 140000000,
    permanentValue: 280000000,
    price: 5000000,
    rarity: "Mythical",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/mrJmk0Jc/Yeti.png",
    inStock: false
  },
  "Gas": {
    name: "Gas",
    value: 75000000,
    permanentValue: 150000000,
    price: 3200000,
    rarity: "Mythical",
    demand: 9,
    trend: "Stable",
    type: "Elemental",
    imageUrl: "https://i.postimg.cc/nzKqxgJf/Gas.png",
    inStock: false
  },
  "Leopard": {
    name: "Leopard",
    value: 55000000,
    permanentValue: 110000000,
    price: 5000000,
    rarity: "Mythical",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/rwdWsKkJ/Leopard.png",
    inStock: false
  },
  "Dough": {
    name: "Dough",
    value: 30000000,
    permanentValue: 60000000,
    price: 2800000,
    rarity: "Mythical",
    demand: 10,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/wxckYyqR/Dough.png",
    inStock: false
  },
  "T-Rex": {
    name: "T-Rex",
    value: 20000000,
    permanentValue: 40000000,
    price: 2700000,
    rarity: "Mythical",
    demand: 8,
    trend: "Stable",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/zGDtcwTf/T-Rex.png",
    inStock: false
  },
  "Gravity": {
    name: "Gravity",
    value: 20000000,
    permanentValue: 40000000,
    price: 2500000,
    rarity: "Mythical",
    demand: 4,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/D02Lw6vJ/Gravity.png",
    inStock: false
  },
  "Mammoth": {
    name: "Mammoth",
    value: 10000000,
    permanentValue: 20000000,
    price: 2700000,
    rarity: "Mythical",
    demand: 6,
    trend: "Stable",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/sXJGqWYV/Mammoth.png",
    inStock: false
  },
  "Spirit": {
    name: "Spirit",
    value: 10000000,
    permanentValue: 20000000,
    price: 3400000,
    rarity: "Mythical",
    demand: 6,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/wTpbhYvL/Spirit.png",
    inStock: false
  },
  "Control": {
    name: "Control",
    value: 10000000,
    permanentValue: 20000000,
    price: 3200000,
    rarity: "Mythical",
    demand: 4,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/9QNpg6Wx/Control.png",
    inStock: false
  },
  "Venom": {
    name: "Venom",
    value: 10000000,
    permanentValue: 20000000,
    price: 3000000,
    rarity: "Mythical",
    demand: 8,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/zGdtZLkF/Venom.png",
    inStock: false
  },
  "Shadow": {
    name: "Shadow",
    value: 6500000,
    permanentValue: 13000000,
    price: 2900000,
    rarity: "Mythical",
    demand: 6,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/kGpGPvBd/Shadow.png",
    inStock: false
  },
  "Lightning": {
    name: "Lightning",
    value: 55000000,
    permanentValue: 110000000,
    price: 2100000,
    rarity: "Legendary",
    demand: 6,
    trend: "Dropping",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/MHTHLFZD/Rumble.png",
    inStock: false
  },
  "Pain": {
    name: "Pain",
    value: 20000000,
    permanentValue: 40000000,
    price: 2300000,
    rarity: "Legendary",
    demand: 7,
    trend: "Soon",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/mk21srj7/Pain.png",
    inStock: false
  },
  "Portal": {
    name: "Portal",
    value: 10000000,
    permanentValue: 20000000,
    price: 1900000,
    rarity: "Legendary",
    demand: 10,
    trend: "Overpaid",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/DzkWz65v/Portal.png",
    inStock: true
  },
  "Buddha": {
    name: "Buddha",
    value: 10000000,
    permanentValue: 20000000,
    price: 1200000,
    rarity: "Legendary",
    demand: 10,
    trend: "Overpaid",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/02nZD6h1/Buddha.png",
    inStock: false
  },
  "Blizzard": {
    name: "Blizzard",
    value: 5000000,
    permanentValue: 10000000,
    price: 2400000,
    rarity: "Legendary",
    demand: 5,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/fTDBV72v/Blizzard.png",
    inStock: false
  },
  "Creation": {
    name: "Creation",
    value: 3500000,
    permanentValue: 7000000,
    price: 1400000,
    rarity: "Legendary",
    demand: 4,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/HLctq6nT/Creation.png",
    inStock: false
  },
  "Phoenix": {
    name: "Phoenix",
    value: 2750000,
    permanentValue: 5500000,
    price: 1800000,
    rarity: "Legendary",
    demand: 3,
    trend: "Stable",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/DwbJFHrp/Phoenix.png",
    inStock: true
  },
  "Sound": {
    name: "Sound",
    value: 2500000,
    permanentValue: 5000000,
    price: 1700000,
    rarity: "Legendary",
    demand: 4,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/MKgHs5C7/Sound.png",
    inStock: false
  },
  "Spider": {
    name: "Spider",
    value: 1500000,
    permanentValue: 3000000,
    price: 1500000,
    rarity: "Legendary",
    demand: 2,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/MpRTgRwh/Spider.png",
    inStock: false
  },
  "Love": {
    name: "Love",
    value: 1500000,
    permanentValue: 3000000,
    price: 1300000,
    rarity: "Legendary",
    demand: 3,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/0NDwGFrK/Love.png",
    inStock: false
  },
  "Quake": {
    name: "Quake",
    value: 1000000,
    permanentValue: 2000000,
    price: 1000000,
    rarity: "Legendary",
    demand: 2,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/cJRvt35Q/Quake.png",
    inStock: false
  },
  "Magma": {
    name: "Magma",
    value: 1150000,
    permanentValue: 2300000,
    price: 960000,
    rarity: "Rare",
    demand: 8,
    trend: "Overpaid",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/W3VJ58JW/Magma.png",
    inStock: true
  },
  "Light": {
    name: "Light",
    value: 800000,
    permanentValue: 1600000,
    price: 650000,
    rarity: "Rare",
    demand: 2,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/K8dTMxcy/Light.png",
    inStock: false
  },
  "Ghost": {
    name: "Ghost",
    value: 800000,
    permanentValue: 1600000,
    price: 940000,
    rarity: "Rare",
    demand: 1,
    trend: "Underpaid",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/k4PWk9Ly/Ghost.png",
    inStock: false
  },
  "Rubber": {
    name: "Rubber",
    value: 700000,
    permanentValue: 1400000,
    price: 750000,
    rarity: "Rare",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/qRQgjTrq/Rubber.png",
    inStock: false
  },
  "Diamond": {
    name: "Diamond",
    value: 1000000,
    permanentValue: 2000000,
    price: 600000,
    rarity: "Uncommon",
    demand: 2,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/3N7CD7Bw/Diamond.png",
    inStock: false
  },
  "Eagle": {
    name: "Eagle",
    value: 800000,
    permanentValue: 1600000,
    price: 550000,
    rarity: "Uncommon",
    demand: 2,
    trend: "Stable",
    type: "Beast",
    imageUrl: "https://i.postimg.cc/sxcPY864/Eagle.png",
    inStock: false
  },
  "Ice": {
    name: "Ice",
    value: 550000,
    permanentValue: 1100000,
    price: 350000,
    rarity: "Uncommon",
    demand: 2,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/zDjTPs7n/Ice.png",
    inStock: false
  },
  "Sand": {
    name: "Sand",
    value: 420000,
    permanentValue: 840000,
    price: 420000,
    rarity: "Uncommon",
    demand: 1,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/QxFVkwyN/Sand.png",
    inStock: false
  },
  "Dark": {
    name: "Dark",
    value: 400000,
    permanentValue: 800000,
    price: 500000,
    rarity: "Uncommon",
    demand: 1,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/0NTCP7KD/Dark.png",
    inStock: false
  },
  "Flame": {
    name: "Flame",
    value: 250000,
    permanentValue: 500000,
    price: 250000,
    rarity: "Uncommon",
    demand: 1,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/y8WhRLF0/Flame.png",
    inStock: false
  },
  "Spike": {
    name: "Spike",
    value: 180000,
    permanentValue: 360000,
    price: 180000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/fbNLsLTk/Spike.png",
    inStock: false
  },
  "Smoke": {
    name: "Smoke",
    value: 100000,
    permanentValue: 200000,
    price: 100000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Logia",
    imageUrl: "https://i.postimg.cc/nVRCmpTw/Smoke.png",
    inStock: true
  },
  "Bomb": {
    name: "Bomb",
    value: 80000,
    permanentValue: 160000,
    price: 80000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/y8NjP1zg/Bomb.png",
    inStock: false
  },
  "Spring": {
    name: "Spring",
    value: 60000,
    permanentValue: 120000,
    price: 60000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/15r7B7nT/Spring.png",
    inStock: true
  },
  "Blade": {
    name: "Blade",
    value: 50000,
    permanentValue: 100000,
    price: 30000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/bYQmYVTJ/Blade.png",
    inStock: true
  },
  "Spin": {
    name: "Spin",
    value: 7500,
    permanentValue: 15000,
    price: 7500,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/jj4jSbLc/Spin.png",
    inStock: true
  },
  "Rocket": {
    name: "Rocket",
    value: 5000,
    permanentValue: 10000,
    price: 5000,
    rarity: "Common",
    demand: 1,
    trend: "Stable",
    type: "Natural",
    imageUrl: "https://i.postimg.cc/cHdrRJVP/Rocket.png",
    inStock: true
  }
};

export function formatValue(value: number): string {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return value.toString();
  }
}

export function calculateWFL(yourTotal: number, theirTotal: number): {
  result: string;
  className: string;
  difference: number;
  percentage: number;
} {
  const difference = yourTotal - theirTotal;
  const percentage = yourTotal > 0 ? ((difference / yourTotal) * 100) : 0;

  let result: string;
  let className: string;

  if (percentage < -25) {
    result = 'HUGE LOSS';
    className = 'bg-destructive text-destructive-foreground';
  } else if (percentage < -10) {
    result = 'LOSS';
    className = 'bg-destructive/80 text-destructive-foreground';
  } else if (percentage >= -10 && percentage <= 10) {
    result = 'FAIR';
    className = 'bg-muted text-muted-foreground';
  } else if (percentage <= 25) {
    result = 'WIN';
    className = 'bg-secondary/80 text-secondary-foreground';
  } else {
    result = 'HUGE WIN';
    className = 'bg-secondary text-secondary-foreground';
  }

  if (yourTotal === 0 && theirTotal === 0) {
    result = 'NEUTRAL';
    className = 'bg-muted text-muted-foreground';
  }

  return { result, className, difference: Math.abs(difference), percentage };
}
