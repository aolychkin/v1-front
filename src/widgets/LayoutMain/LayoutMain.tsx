import { Suspense } from "react"
import { Outlet } from 'react-router';
import { UIPageLoader } from "./ui/PageLoaderUI";

export const LayoutMain = () => {
  return (
    <Suspense fallback={<UIPageLoader />}>
      <Outlet />
    </Suspense>

  )
}