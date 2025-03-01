import { ListItem, ListItemButton, ListItemContent, Typography } from "@mui/joy"
import { Home } from "lucide-react"
import { ReactNode } from "react";

export const SidebarMenuItem = (
  {
    route,
    icon,
    label,
  }: {
    route: string;
    icon: ReactNode,
    label: string,
  }
) => {
  return (
    <ListItem>
      <ListItemButton component="a" href={route}>
        {icon}
        <ListItemContent>
          <Typography level="title-sm">{label}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  )
}