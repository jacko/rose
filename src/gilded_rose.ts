import { AgedBrie } from "./modules/AgedBrie";
import { BackstagePass } from "./modules/BackstagePass";
import { ConjuredItem } from "./modules/ConjuredItem";
import { NormalItem } from "./modules/Normaltem";
import { Sulfuras } from "./modules/Sulfuras";

export type Items = Item[];

export interface Item {
  name: string;
  sellIn: number;
  quality: number;
}

interface GildedRose {
  adjustQuality: (items: Items) => Items
}

const adjustQuality = (items: Items): Items => {
  return items.map((item: Item) => {

    switch (item.name) {
      case "Aged Brie":
        item = new AgedBrie(item);
      break;

      case "Sulfuras":
        item = new Sulfuras(item);
      break;
  
      case "Backstage passes to a TAFKAL80ETC concert":
        item = new BackstagePass(item);
      break;

      case "Conjured Mana Cake":
        item = new ConjuredItem(item);
      break;

      case "Normal Item":
        item = new NormalItem(item);
      break;
    }

    return item;
  });
}

const gildedRose: GildedRose = { adjustQuality };
export default gildedRose;
