const Brie = 'Aged Brie';
const BackstagePass = 'Backstage passes to a TAFKAL80ETC concert';
const Sulfuras = 'Sulfuras, Hand of Ragnaros';
const Elixir = 'Elixir of the Mongoose';
const Conjured = 'Conjured Mana Cake';
const Shoe = 'Haunted Shoe';

export class Item {
  name: string;
  sellin: number;
  quality: number;

  constructor(name, sellin, quality) {
    this.name = name;
    this.sellin = sellin;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  adjustQuality(item:Item, adjustment: number) {
    const newQuality : number = item.quality + adjustment;
    if(newQuality <= 50 && newQuality >=0) {
      item.quality = newQuality
    } 
  }

  handleExpires(item, degradeRate, degrades) {
    if (this.items[item].name != Brie) {
      if (this.items[item].name != BackstagePass) {
          this.adjustQuality(this.items[item], degradeRate)
      } else {
         this.items[item].quality = 0 
      }
    } else {
        this.adjustQuality(this.items[item], 1)
    }

  }

  updateQuality() {
    for (let item = 0; item < this.items.length; item++) {
      let degradeRate: number  = this.items[item].name == Conjured ? -2 : -1
      let degrades: boolean =  this.items[item].name != Brie && this.items[item].name != BackstagePass && this.items[item].name != Sulfuras  
      degrades ?  this.adjustQuality(this.items[item], degradeRate): null;
      this.items[item].name == Brie ? this.adjustQuality(this.items[item], 1) : null;  

      if (this.items[item].name == BackstagePass) {
          this.adjustQuality(this.items[item], 1);
          this.items[item].sellin < 11 ? this.adjustQuality(this.items[item], 1) : null
          this.items[item].sellin < 6 ? this.adjustQuality(this.items[item], 1) : null  
      } 

      this.items[item].name != Sulfuras ? this.items[item].sellin -= 1 : null;  
      this.items[item].sellin < 0 ? this.handleExpires(item, degradeRate, degrades) : null;  
    }

    return this.items;
  }
}