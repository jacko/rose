export class NormalItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(item: { name: string, sellIn: number, quality: number }) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;

    this.conditions();

    return this;
  }

  conditions() {
    if (this.quality == 0) {
      this.quality = 0;
    } else if (this.sellIn <= 0) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }

    this.sellIn = this.sellIn -= 1;
  }
}
