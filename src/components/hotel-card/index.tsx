import {
  Bucket as BucketIcon,
  Building as BuildingIcon,
  Heart as HeartIcon,
  Setting3 as Setting3Icon,
  Speedometer as SpeedometerIcon,
} from "iconsax-react";
import { Hotel } from "../../api";

const HotelCard: React.FC<{
  hotel: Hotel;
}> = ({ hotel }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white dark:bg-slate-800">
      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-400">
        <img
          src={"https://i.imgur.com/1TK0hW1.jpeg"}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg text-start font-medium text-slate-900 dark:text-slate-100">
          {hotel.name}
        </h1>
      </div>
      <div className="grid grid-cols-4">
        <div className="col flex flex-col gap-0.5">
          <BuildingIcon
            size="20"
            className="text-slate-700 dark:text-slate-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            3 Room
          </span>
        </div>
        <div className="col flex flex-col gap-0.5">
          <BucketIcon
            size="20"
            className="text-slate-700 dark:text-slate-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            2 Bed
          </span>
        </div>
        <div className="col flex flex-col gap-0.5">
          <SpeedometerIcon
            size="20"
            className="text-slate-700 dark:text-slate-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            1 Bath
          </span>
        </div>
        <div className="col flex flex-col gap-0.5">
          <Setting3Icon
            size="20"
            className="text-slate-700 dark:text-slate-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            732 sqft.
          </span>
        </div>
      </div>
      <div className="h-[1px] mx-2 bg-gray-400 dark:bg-gray-300 opacity-50"></div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-slate-900 dark:text-slate-100">
          <span className="font-medium">{hotel.price}</span>
          <span className="text-base">/night</span>
        </h3>
        <div className="flex gap-3">
          <button className="flex justify-center items-center h-8 aspect-square text-sm text-blue-600 dark:text-blue-400 bg-blue-600/30 dark:bg-blue-400/30 rounded-full hover:scale-105 transition-all">
            <HeartIcon size="20" />
          </button>
          <button className="text-sm text-slate-200 dark:text-slate-100 bg-blue-600 dark:bg-blue-400 rounded-full py-1 px-3 font-medium hover:scale-105 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
