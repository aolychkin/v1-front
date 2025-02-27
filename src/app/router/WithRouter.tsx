import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './Routes';

export const WithRouter = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
