import { Suspense } from "react"
import { Outlet } from 'react-router';
import { UIPageLoader } from "./ui/PageLoaderUI";
import Box from '@mui/joy/Box';
import { Sidebar } from "./ui/sidebar/sidebar";


export const LayoutMain = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Sidebar />
      <Suspense fallback={<UIPageLoader />}>
        <Outlet />
      </Suspense>
    </Box>
  )
}