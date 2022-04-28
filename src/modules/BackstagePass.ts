export class BackstagePass {
  name: string;
  sellIn: number;
  quality: number;

  constructor(item: { name: string, sellIn: number, quality: number }) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;

    const result = this.conditions();
    this.quality = result < 50 ? result : 50;

    return this;
  }

  conditions() {
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn < 6) {
      this.quality += 3;
    } else if(this.sellIn < 11) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }
  
    this.sellIn = this.sellIn -= 1;

    return this.quality;
  }
}
