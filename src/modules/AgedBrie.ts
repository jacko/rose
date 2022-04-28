export class AgedBrie {
  name: string;
  sellIn: number;
  quality: number;

  constructor(item: { name: string, sellIn: number, quality: number }) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;

    const result = this.conditions()
    this.quality = result < 50 ? result : 50;

    return this;
  }

  conditions() {
    this.sellIn > 0 ? this.quality += 1 : this.quality += 2;
    this.sellIn = this.sellIn -= 1;

    return this.quality;
  }
}
