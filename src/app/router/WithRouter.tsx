import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from 'app/router/Routes';

export const WithRouter = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
