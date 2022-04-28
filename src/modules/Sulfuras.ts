export class Sulfuras {
  name: string;
  sellIn: number;
  quality: number;

  constructor(item: { name: string, sellIn: number, quality: number }) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;

    return this;
  }
}
