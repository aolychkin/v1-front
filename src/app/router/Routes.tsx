import { HomePage } from "pages/modules/Home";
import { PageNotFound } from "pages/not-found/NotFound";
import { Paths } from "shared/config/path";
import { LayoutMain } from "widgets/layout-main";
import { LazyPages } from "app/router/LazyPages";
import { PageBoards } from "pages/boards";

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
      path: Paths.NOT_FOUND,
      element: <PageNotFound />,
    },
  ],
};

const moduleActionsRoutes = {
  path: Paths.MODULE_ACTIONS,
  element: <LayoutMain />,
  children: [
    {
      index: true,
      element: <LazyPages.PageModuleActions />,
    },
    {
      path: Paths.MODULE_ACTIONS_ISSUES,
      element: <HomePage />
    },
    {
      path: Paths.MODULE_ACTIONS_PROJECTS,
      element: <HomePage />
    },
    {
      path: Paths.MODULE_ACTIONS_BOARDS,
      element: <PageBoards />
    },
    {
      path: Paths.MODULE_ACTIONS_SETTINGS,
      element: <HomePage />
    },
  ],
};

export const routes = [mainRoutes, moduleActionsRoutes];