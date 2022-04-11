import { Item, GildedRose } from '@/gilded-rose';

describe('during updating items', () => {
    it("Decreesing sellIn by 1", function() {
      const gildedRose = new GildedRose([new Item('Haunted Shoe', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellin).toBe(9);
    });

    it("Decreesing the quality by 1", () =>  {
      const gildedRose = new GildedRose([new Item('Haunted Shoe', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
    });

    it('Quality shouldn`t be below 0', () => {
      const gildedRose = new GildedRose([new Item('Haunted Shoe', 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    // describe('when the SellIn is below 0', () => {
    //   it('decresing the quality by 2', () => {
    //     const gildedRose = new GildedRose([new Item('Haunted Shoe', 0, 10)]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).toBe(8);
    //   });
    // });
  });

   describe('During Aged Brie updating', () => {
     it('increase the quality by 1', () => {
       const gildedRose = new GildedRose([new Item('Aged Brie', 1, 10)]);
       const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
     });

     describe('when the sellIn is below 0', () => {
       it('increase the quality by 2', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 7)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(9);
      });
     });
  });

  describe('when updating Sulfuras', () => {
    it('quality remains at 80', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe('when updating a backstage pass', () => {
     describe('when the sellIn is larger than 10', () => {
       it('increase the quality by 1', () => {
         const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
         const items = gildedRose.updateQuality()
         expect(items[0].quality).toBe(11);
       });
     });

    describe('when the sellIn is 10 or less', () => {
      it('increase the quality by 2', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(12);
      });
    });

    describe('when the sellIn is 5 or less', () => {
      it('increase the quality by 3', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12)]);
        const backstagePass = gildedRose.updateQuality()
        expect(backstagePass[0].quality).toBe(15);
      });
    });

    describe('when the sellIn is 0 or less', () => {
      it('reduce the quality to 0', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
        const backstagePass  = gildedRose.updateQuality()
        expect(backstagePass[0].quality).toBe(0);
      });
    });
  });

  describe('when updating a Conjured item', () => {
    it.skip("always reduces quality by 2", () =>  {

    });
  });
