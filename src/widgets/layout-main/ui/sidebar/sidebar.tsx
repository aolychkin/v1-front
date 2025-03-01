import GlobalStyles from '@mui/joy/GlobalStyles';
import { Sheet, List, ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy';
import { BookmarkCheck, FolderOpenDot, Home, ListChecks, Settings, SquareKanban } from 'lucide-react';
import { SidebarMenuItem } from './ui/menu-item/menu-item';
import { Paths } from 'shared/config/path';

export const Sidebar = () => {
  const iconSize = 16

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '200px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '200px',
            },
          },
        })}
      />
      <List
        size="sm"
        sx={{
          gap: 1,
          '--List-nestedInsetStart': '30px',
          '--ListItem-radius': (theme) => theme.vars.radius.sm,
        }}
      >
        <SidebarMenuItem
          route={Paths.MODULE_ACTIONS}
          icon={<BookmarkCheck size={iconSize} />}
          label='Моя активность' // Сводка
        />
        <SidebarMenuItem
          route={Paths.MODULE_ACTIONS_ISSUES}
          icon={<ListChecks size={iconSize} />}
          label='Все действия'
        />
        <SidebarMenuItem
          route={Paths.MODULE_ACTIONS_PROJECTS}
          icon={<FolderOpenDot size={iconSize} />}
          label='Проекты'
        />
        <SidebarMenuItem
          route={Paths.MODULE_ACTIONS_BOARDS}
          icon={<SquareKanban size={iconSize} />}
          label='Доски' // Вид: список / календарь
        />
        <SidebarMenuItem
          route={Paths.MODULE_ACTIONS_SETTINGS}
          icon={<Settings size={iconSize} />}
          label='Настройки'
        />
      </List>
    </Sheet>
  )
}

export default Sidebar