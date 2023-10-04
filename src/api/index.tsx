import Cars from "./cars.json";
import Hotels from "./hotels.json";

export type Car = {
  title: string;
  image: string;
};

export type Hotel = {
  name: string;
  image: string;
  price: string;
};

function filterCars(search?: string): Car[] {
  if (!search) return Cars;
  search = search.toLowerCase();

  return Cars.filter((car) => {
    return car.title.toLowerCase().includes(search!);
  }).sort((a, b) => {
    return (
      a.title.toLowerCase().indexOf(search!) -
      b.title.toLowerCase().indexOf(search!)
    );
  });
}

export async function getCars({
  search,
  itemsPerPage = 6,
  pageLimit = 10,
}: {
  search: string;
  itemsPerPage?: number;
  pageLimit?: number;
}): Promise<{ cars: Car[] }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cars = filterCars(search);
      const pages = [];
      let page = 0;
      while (page < cars.length && pages.length < pageLimit) {
        console.log({
          page: pages.length,
        });
        pages.push({
          cars: cars.slice(page, page + itemsPerPage),
        });
        page += itemsPerPage;
      }
      resolve(pages);
    }, 500);
  });
}

export function getHotels() {
  return new Promise<{ name: string; data: Hotel[] }[]>((resolve) => {
    const hotels: { name: string; data: Hotel[] }[] = [];
    for (const key in Hotels) {
      hotels.push({
        name: key,
        data: Hotels[key as keyof typeof Hotels],
      });
    }
    setTimeout(() => {
      resolve(hotels);
    }, 500);
  });
}
