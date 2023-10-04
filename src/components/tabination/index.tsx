import { NavLink, Navigate, useRoutes } from "react-router-dom";

type TabinationsProps<T> = {
  path: string;
  tabs: {
    name: string;
    data: T[];
  }[];
  render: React.FC<{ data: T[] }>;
  className?: string;
};

const Tabination = <T extends unknown>({
  path,
  tabs,
  render: Render,
  className,
}: TabinationsProps<T>) => {
  const actualPath = path.endsWith("/")
    ? path.substring(0, path.length - 1)
    : path;

  const router = useRoutes(
    [
      {
        path: `${actualPath}`,
        element: (
          <Navigate
            to={`${actualPath}/${tabs[0].name.replace(" ", "-")}`}
            replace
          />
        ),
      },
      ...tabs.map((tab) => {
        return {
          path: `${actualPath}/${tab.name.replace(" ", "-")}`,
          element: <Render data={tab.data} />,
        };
      }),
      {
        path: "*",
        element: <>No tab with the url exists</>,
      },
    ],
    actualPath
  );

  return (
    <div className={`${className} flex flex-col gap-3`}>
      <div className="flex gap-3 overflow-x-auto">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={`${actualPath}/${tab.name.replace(" ", "-")}`}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-4 rounded-full ${
                isActive
                  ? "bg-blue-500 dark:bg-blue-600 text-white"
                  : "bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-slate-100 hover:bg-slate-500"
              } text-sm font-medium transition-all`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      {router}
    </div>
  );
};

export default Tabination;
