import { useQuery } from "react-query";

export type Town = {
  id: string;
  name: string;
  lat: string;
  lon: string;
};

export type NameList = { name: string };

export type Shop = {
  id: string;
  name: string;
  oeffnungszeiten: string;
  strasse: string;
  plz: string;
  geom: { coordinates: [number, number]; type: string };
  website: string;
  stadt: NameList;
  kategorien: NameList[];
  maincategory: NameList[];
  sidecategory: NameList[];
};

type ShopTown = Town & { shop_list: Shop[] };

export const useTownShops = () => {
  return useQuery<{
    Towns: Town[];
    Shops: Shop[];
    Categories: NameList[];
  }>("shopTowns", async () => {
    const data: ShopTown[] = await fetch(
      "https://development.einmalohnebitte.de/de/geschaefte/api/townslist/?format=json"
    ).then((r) => r.json());
    let Categories: NameList[] = [];
    let Shops: Shop[] = [];
    const Towns = data.map((town) => {
      const { shop_list, ...rest } = town;

      const shops = shop_list.map((shop) => {
        Categories = [...Categories, ...shop.kategorien];
        const { geom, ...restShop } = shop;
        const coords: Shop["geom"] = JSON.parse(geom as any);
        return {
          ...restShop,
          geom: {
            coordinates: coords.coordinates.reverse() as [number, number],
            type: "Pont" as const,
          },
        };
      });
      Shops = [...Shops, ...shops];
      return rest;
    });

    return {
      Towns,
      Shops,
      Categories,
    };
  });
};
