import { SearchNormal, Star as StarIcon } from "iconsax-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css";
import { Car, Hotel, getCars, getHotels } from "./api";
import CarCard from "./components/car-card";
import Pagination from "./components/pagination";
import HotelCard from "./components/hotel-card";
import Tabination from "./components/tabination";

const CarPage: React.FC<{ cars: Car[] }> = ({ cars }) => {
  return (
    <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

function CarApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<{ cars: Car[] }[]>([]);

  useEffect(() => {
    getCars({ search: searchParams.get("q") || "" }).then((cars) => {
      setCars(cars);
    });
  }, [searchParams]);

  return (
    <main className="max-w-7xl mx-auto">
      <p className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 my-2">
        <StarIcon size="20" className="inline-block text-yellow-500" />
        <span className="">This website is system theme compliant!</span>
      </p>
      <div className="flex p-2 rounded-xl bg-white dark:bg-slate-800 mb-6">
        <div className="flex gap-3 py-2 px-4 bg-slate-200 dark:bg-slate-600 rounded-xl">
          <input
            type="text"
            // use onInput instead of onChange so that it fires on every keystroke and on paste
            value={searchParams.get("q") || ""}
            onInput={(e) => {
              setSearchParams({
                q: (e.target as HTMLInputElement).value.trim(),
              });
            }}
            className="text-sm text-slate-700 dark:text-slate-100 bg-transparent focus:outline-none w-60"
            placeholder="Search here"
          />
          <SearchNormal
            size="16"
            className="text-slate-700 dark:text-slate-100"
          />
        </div>
      </div>
      <Pagination path="/" pages={cars} render={CarPage} />
    </main>
  );
}

const HotelPage: React.FC<{ data: Hotel[] }> = ({ data: hotels }) => {
  return (
    <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
};

const HotelApp = () => {
  const [hotels, setHotels] = useState<{ name: string; data: Hotel[] }[]>([]);

  useEffect(() => {
    getHotels().then(setHotels);
  });

  return (
    <main className="max-w-7xl mx-auto">
      <p className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 my-2">
        <StarIcon size="20" className="inline-block text-yellow-500" />
        <span className="">This website is system theme compliant!</span>
      </p>
      {hotels.length ? (
        <Tabination
          className="mb-6"
          path="/"
          tabs={hotels}
          render={HotelPage}
        />
      ) : null}
    </main>
  );
};

export default window.location.host.includes("car") ? CarApp : HotelApp;

// export default HotelApp;
