import { Car } from "../../api";
import {
  People as PeopleIcon,
  Bucket as BucketIcon,
  Speedometer as SpeedometerIcon,
  Setting3 as Setting3Icon,
  Heart as HeartIcon,
} from "iconsax-react";

const CarCard: React.FC<{
  car: Car;
}> = ({ car }) => {
  return (
    <div className="flex flex-col gap-4 p-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white dark:bg-slate-800">
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-400">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg text-start font-medium text-slate-900 dark:text-slate-100">
          {car.title}
        </h1>
        <span className="block text-xs font-medium text-slate-900 dark:text-slate-100 border rounded-full border-dashed border-blue-600 dark:border-blue-400 py-0.5 px-2">
          2019
        </span>
      </div>
      <div className="grid grid-cols-2 gap-y-3">
        <div className="col flex gap-2 items-center">
          <PeopleIcon size="20" className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            4 people
          </span>
        </div>
        <div className="col flex gap-2 items-center">
          <BucketIcon size="20" className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            Hybrid
          </span>
        </div>
        <div className="col flex gap-2 items-center">
          <SpeedometerIcon
            size="20"
            className="text-blue-600 dark:text-blue-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            8.7 kms/ltr
          </span>
        </div>
        <div className="col flex gap-2 items-center">
          <Setting3Icon
            size="20"
            className="text-blue-600 dark:text-blue-400"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
            Automatic
          </span>
        </div>
      </div>
      <div className="h-[1px] mx-2 bg-gray-400 dark:bg-gray-300 opacity-50"></div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-slate-900 dark:text-slate-100">
          <span className="font-medium">₹4400</span>
          <span className="text-base">/hour</span>
        </h3>
        <div className="flex gap-3">
          <button className="flex justify-center items-center h-8 aspect-square text-sm text-blue-600 dark:text-blue-400 bg-blue-600/30 dark:bg-blue-400/30 rounded-lg hover:scale-105 transition-all">
            <HeartIcon size="20" />
          </button>
          <button className="text-sm text-slate-200 dark:text-slate-100 bg-blue-600 dark:bg-blue-400 rounded-lg py-1 px-3 font-medium hover:scale-105 transition-all">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
