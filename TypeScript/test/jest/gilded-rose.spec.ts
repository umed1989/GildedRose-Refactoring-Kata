import { Item, GildedRose } from '@/gilded-rose';

describe('during updating items', () => {
    it("Decreasing sellIn by 1", function() {
      const HaunteShoe = new GildedRose([new Item('Haunted Shoe', 10, 10)]);
      const items = HaunteShoe.updateQuality();
      expect(items[0].sellin).toBe(9);
    });

    it("Decreasing the quality by 1", () =>  {
      const HaunteShoe = new GildedRose([new Item('Haunted Shoe', 10, 10)]);
      const items = HaunteShoe.updateQuality();
      expect(items[0].quality).toBe(9);
    });

    it('Quality shouldn`t be below 0', () => {
      const HaunteShoe = new GildedRose([new Item('Haunted Shoe', 10, 0)]);
      const items = HaunteShoe.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    describe('when the SellIn is below 0', () => {
      it('decreasing the quality by 2', () => {
        const HaunteShoe = new GildedRose([new Item('Haunted Shoe', 0, 10)]);
        const items = HaunteShoe.updateQuality();
        expect(items[0].quality).toBe(8);
      });
    });
  });

   describe('During Aged Brie updating', () => {
     it('increase the quality by 1', () => {
       const Brie = new GildedRose([new Item('Aged Brie', 1, 10)]);
       const items = Brie.updateQuality();
      expect(items[0].quality).toBe(11);
     });

     describe('when the sellIn is below 0', () => {
       it('increase the quality by 2', () => {
        const Brie = new GildedRose([new Item('Aged Brie', 0, 7)]);
        const items = Brie.updateQuality();
        expect(items[0].quality).toBe(9);
      });
     });
  });

  describe('when updating Sulfuras', () => {
    it('quality remains at 80', () => {
      const Sulfuras = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      const items = Sulfuras.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe('when updating a backstage pass', () => {
     describe('when the sellIn is larger than 10', () => {
       it('increase the quality by 1', () => {
         const BackstagePasses = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
         const items = BackstagePasses.updateQuality()
         expect(items[0].quality).toBe(11);
       });
     });

    describe('when the sellIn is 10 or less', () => {
      it('increase the quality by 2', () => {
        const BackstagePasses = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
        const items =BackstagePasses.updateQuality()
        expect(items[0].quality).toBe(12);
      });
    });

    describe('when the sellIn is 5 or less', () => {
      it('increase the quality by 3', () => {
        const BackstagePasses = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12)]);
        const items =BackstagePasses.updateQuality()
        expect(items[0].quality).toBe(15);
      });
    });

    describe('when the sellIn is 0 or less', () => {
      it('reduce the quality to 0', () => {
        const BackstagePasses = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
        const items  = BackstagePasses.updateQuality()
        expect(items[0].quality).toBe(0);
      });
    });
  });

 
