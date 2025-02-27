import { HomePage } from "pages/modules/Home";
import { NotFoundPage } from "pages/not-found/NotFound";
import { Paths } from "shared/config/path";
import { LayoutMain } from "widgets/LayoutMain";
import { LazyPages } from "./LazyPages";

// Сюда необходимо подгружать новые роуты. 
// Каждая константа - новые пути
// У элементов могут быть поддети

// У ананимов handle: { isLoginButtonShown: false },
// У всех errorElement: <ErrorBoundary />,
const mainRoutes = {
  path: '/',
  element: <LayoutMain />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: Paths.MODULE_ACTIONS,
      element: <LazyPages.PageModuleActions />,
    },
    {
      path: Paths.NOT_FOUND,
      element: <NotFoundPage />,
    },
  ],
};

export const routes = [mainRoutes];