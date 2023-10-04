import React, { useEffect } from "react";
import {
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";

type PaginationProps<T> = {
  path: string;
  render: React.FC<T>;
  pages: (JSX.IntrinsicAttributes & T)[];
  paginationClassName?: string;
};

const Pagination = <T extends unknown>({
  path,
  render: Render,
  pages,
  paginationClassName = "",
}: PaginationProps<T>) => {
  const location = useLocation();
  const navigate = useNavigate();
  const actualPath = path.endsWith("/")
    ? path.substring(0, path.length - 1)
    : path;

  const router = useRoutes(
    [
      {
        path: `${actualPath}`,
        element: <Navigate to={`${actualPath}/1`} replace />,
      },
      ...pages.map((content, index) => {
        return {
          path: `${actualPath}/${index + 1}`,
          element: <Render {...content} />,
        };
      }),
    ],
    actualPath
  );

  const currentPage = parseInt(
    location.pathname.substring(
      actualPath.length + 1,
      actualPath.indexOf("/", actualPath.length + 1) === -1
        ? location.pathname.length
        : actualPath.indexOf("/", actualPath.length + 1)
    )
  );

  useEffect(() => {
    if (isNaN(currentPage) || currentPage < 1 || pages.length === 0) {
      navigate(`${actualPath}/1` + location.search, { replace: true });
    } else if (currentPage > pages.length) {
      navigate(`${actualPath}/${pages.length}` + location.search, {
        replace: true,
      });
    }
  }, [currentPage, pages]);

  return (
    <section className={`${paginationClassName} flex flex-col gap-6 mb-6`}>
      <div className="flex-grow">{router}</div>
      <div className="flex-grow-0 flex justify-center gap-3">
        <NavLink
          to={
            `${actualPath}/${currentPage - 1 === 0 ? 1 : currentPage - 1}` +
            location.search
          }
          className={`flex justify-center items-center w-16 h-8 rounded-lg bg-blue-600 font-medium text-white`}
          style={{
            opacity: currentPage === 1 ? 0.6 : 1,
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            pointerEvents: currentPage === 1 ? "none" : "auto",
          }}
          aria-disabled={currentPage === 1}
        >
          Prev
        </NavLink>
        {pages.map((_, index) => {
          return (
            <NavLink
              to={`${actualPath}/${index + 1}` + location.search}
              key={index}
              className={({ isActive }) =>
                `flex justify-center items-center w-8 h-8 rounded-lg ${
                  !isActive
                    ? "bg-gray-300 text-slate-800 dark:bg-slate-600 dark:text-slate-300"
                    : "bg-blue-300 text-slate-800 dark:bg-slate-400 dark:text-slate-800"
                } cursor-pointer`
              }
            >
              {index + 1}
            </NavLink>
          );
        })}
        <NavLink
          to={
            `${actualPath}/${
              currentPage + 1 > pages.length ? pages.length : currentPage + 1
            }` + location.search
          }
          className={`flex justify-center items-center w-16 h-8 rounded-lg bg-blue-600 font-medium text-white`}
          style={{
            opacity: currentPage === pages.length ? 0.6 : 1,
            cursor: currentPage === pages.length ? "not-allowed" : "pointer",
            pointerEvents: currentPage === pages.length ? "none" : "auto",
          }}
          aria-disabled={currentPage === pages.length}
        >
          Next
        </NavLink>
      </div>
    </section>
  );
};

export default Pagination;
