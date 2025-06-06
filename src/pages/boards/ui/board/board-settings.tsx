import { Stack, IconButton, Typography, Tabs, TabList, Tab, ListItemDecorator, TabPanel, Sheet, Card, AccordionGroup, Accordion, AccordionSummary, AccordionDetails, CardContent, Avatar, ListItemContent, accordionSummaryClasses, accordionDetailsClasses, Box, Button, Chip } from "@mui/joy"
import { Settings, SquareKanban, Columns3, RectangleHorizontal, List, Text, Save, Redo2, Undo2 } from "lucide-react"
import { UIBorderRadius } from "shared/ui/styles"
import { ActionCard } from "../card/card"
import { useState } from "react"

// export const BoardSetting = (
//   {
//     card,
//     cardConfigs,
//     fieldConfigs,
//   }: {
//     card: TCard
//     cardConfigs: TCardConfig[]
//     fieldConfigs: TFieldConfig[]
//   }
// ) => {
//   console.log(cardConfigs)
//   const [config2edit, setConfig2edit] = useState({} as TCardConfig);

//   return (
//     <Stack direction='column' spacing={2}>
//       <Stack direction='row' spacing={2}>
//         <IconButton>
//           <Settings />
//         </IconButton>
//       </Stack>
//       <Stack direction='column' spacing={2}>
//         <Stack direction='row'>
//           <Typography level='title-lg'>Настройки доски</Typography>
//           {/* <Save />
//           <SaveOff /> */}
//         </Stack>
//         <Tabs aria-label="Icon tabs" orientation='horizontal' defaultValue={2} sx={{ borderRadius: UIBorderRadius["primary"] }}>
//           <TabList>
//             <Tab value={0}>
//               <ListItemDecorator>
//                 <SquareKanban size={24} />
//               </ListItemDecorator>
//               <Typography level="title-sm">Общее</Typography>
//             </Tab>
//             <Tab value={1}>
//               <ListItemDecorator>
//                 <Columns3 size={24} />
//               </ListItemDecorator>
//               <Typography level="title-sm">Колонки</Typography>
//             </Tab>
//             <Tab value={2}>
//               <ListItemDecorator>
//                 <RectangleHorizontal size={24} />
//               </ListItemDecorator>
//               <Typography level="title-sm">Карточки</Typography>
//             </Tab>
//           </TabList>
//           <TabPanel value={0}>
//             IndicatorPlacement <b>Top</b>
//           </TabPanel>
//           <TabPanel value={1}>
//             IndicatorPlacement <b>Right</b>
//           </TabPanel>
//           <TabPanel value={2}>
//             <Stack direction='row'>
//               <Stack direction='column' spacing={2}>
//                 <Sheet variant='plain'>
//                   <ActionCard card={card} config={config2edit} prevRank={0} nextRank={0} fieldConfigs={fieldConfigs} isConfigEditor={true} />
//                 </Sheet>
//                 {/* TODO: где-то должно и глобально управляться, отображаться все доступные шаблоны */}
//                 {/* TODO: сделать разделение по категориям сворачиваемым + индикатор используемости в чипе (0/4).
//                   Каждое поле отображается карточкой: Название поля, под ним мельче тип и допустимые значения (посмотреть, как управляются типы у аналогов)
//                   - общая инфа
//                   - мета данные
//                   - поля обязательные
//                   - кастомные поля */}
//                 {/* <FieldTooltip fieldConfigs={fieldConfigs} /> */}
//                 <Stack direction='column' spacing={1} alignItems={'center'} justifyContent={'flex-start'} sx={{ paddingX: '8px' }}>
//                   <Stack direction='row' spacing={1} alignItems={'center'} justifyContent={'flex-start'} sx={{ paddingX: '8px' }}>
//                     <Button size='sm' color='neutral' variant='soft'>
//                       <Undo2 size={16} />
//                     </Button>
//                     <Button size='sm' color='neutral' variant='soft'>
//                       <Redo2 size={16} />
//                     </Button>
//                     <Button size='sm' color='neutral'>Закрыть без сохранения</Button>
//                   </Stack>
//                   <Stack direction='row' spacing={1} alignItems={'center'} justifyContent={'flex-start'} sx={{ paddingX: '8px' }}>
//                     <Button size='sm' color='primary'>Сохранить</Button>
//                     <Button size='sm' color='success'>Сделать активным</Button>
//                   </Stack>
//                 </Stack>
//               </Stack>
//               <AccordionGroup variant='plain' transition='0.2s ease'>
//                 <Accordion defaultExpanded>
//                   <AccordionSummary>
//                     <Typography level="body-sm">Варианты отображения: 3</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Stack spacing={1}>
//                       {
//                         cardConfigs.filter((config) => config.state !== "Шаблон").map((config) => (
//                           <Card size='sm'
//                             onClick={() => setConfig2edit(config)}
//                           >
//                             <CardContent>
//                               <Stack direction='row' gap={0.5}>
//                                 <Typography level="title-sm">{config.name}</Typography>
//                                 <Chip size='sm' color={config.state === "Активный" ? 'success' : 'neutral'}>{config.state}</Chip>
//                               </Stack>
//                               <Typography level='body-xs'>Изменено: 23 мая 2025 (hc)</Typography>
//                             </CardContent>
//                           </Card>
//                         ))
//                       }
//                     </Stack>
//                   </AccordionDetails>
//                 </Accordion>
//                 <Accordion defaultExpanded>
//                   <AccordionSummary>
//                     <Typography level="body-sm">Шаблоны: 5</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Stack spacing={1}>
//                       {
//                         cardConfigs.filter((config) => config.state === "Шаблон").map((config) => (
//                           <Card size='sm'>
//                             <CardContent>
//                               <Stack direction='row' gap={0.5}>
//                                 <Typography level="title-sm">{config.name}</Typography>
//                                 <Chip size='sm' color={config.state === "Активный" ? 'success' : 'neutral'}>{config.state}</Chip>
//                               </Stack>
//                               <Typography level='body-xs'>Изменено: 23 мая 2025 (hc)</Typography>
//                             </CardContent>
//                           </Card>
//                         ))
//                       }
//                     </Stack>
//                   </AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Stack>
//           </TabPanel>
//         </Tabs>
//       </Stack>
//     </Stack>
//   )
// }


// {/* <Stack spacing={1}>

// <Card size="sm">
//   <CardContent orientation='horizontal'>
//     <Avatar color="success">
//       <Text />
//     </Avatar>
//     <Stack direction='column'>
//       <Typography level="title-sm">Название задачи</Typography>
//       <Typography level="body-xs">Текст: "любой"</Typography>
//     </Stack>
//   </CardContent>
// </Card>
// <Card size="sm">
//   <CardContent orientation='horizontal'>
//     <Avatar color="success">
//       <List />
//     </Avatar>
//     <Stack direction='column'>
//       <Typography level="title-sm">Notifications</Typography>
//       <Typography level="body-xs">Enable or disable your notifications</Typography>
//     </Stack>
//   </CardContent>
// </Card>
// </Stack> */}