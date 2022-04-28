import { AgedBrie } from "./modules/AgedBrie";
import { BackstagePass } from "./modules/BackstagePass";
import { ConjuredItem } from "./modules/ConjuredItem";
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
    }

    /*
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1;
        }
      }
    // if 'Aged Brie' or 'Backstage passes to a TAFKAL80ETC concert'
    } else {
      if (item.quality < 50) {
        //item.quality = item.quality + 1;

        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }

      }
    }

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }

    if (item.sellIn < 0) {
  
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      // if Aged Brie
      
      } else {
        if (item.quality < 50) {
        //  item.quality = item.quality + 1;
        }
      }

    }
    */

    return item;
  });
}

const gildedRose: GildedRose = { adjustQuality };
export default gildedRose;