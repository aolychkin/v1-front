// import { Stack, IconButton, Typography, Tabs, TabList, Tab, ListItemDecorator, TabPanel, Sheet, Card, AccordionGroup, Accordion, AccordionSummary, AccordionDetails, CardContent, Avatar, ListItemContent, accordionSummaryClasses, accordionDetailsClasses } from "@mui/joy"
// import { Settings, SquareKanban, Columns3, RectangleHorizontal, List, Text, Save } from "lucide-react"
// import { UIBorderRadius } from "shared/ui/styles"
// import { TCard } from "../../model/types"
// import { useState } from "react"

// export const BoardSetting = () => {
//   const card: TCard = mockCard
//   const fieldConfigs: TCardFieldConfig[] = mockCardFieldConfig
//   const fieldTypes: TCardFieldType[] = mockCardFieldType
//   const [data, setData] = useState(card);

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
//             <Stack direction='row' spacing={2}>
//               <Sheet variant='plain'>
//                 <Card sx={{ margin: '8px', width: '314px' }} size="md">
//                   {/* <ActionCardContent isConstruct fields={data.fields} /> */}
//                 </Card>
//               </Sheet>
//               {/* TODO: где-то должно и глобально управляться, отображаться все доступные шаблоны */}
//               {/* TODO: сделать разделение по категориям сворачиваемым + индикатор используемости в чипе (0/4).
//                   Каждое поле отображается карточкой: Название поля, под ним мельче тип и допустимые значения (посмотреть, как управляются типы у аналогов)
//                   - общая инфа
//                   - мета данные
//                   - поля обязательные
//                   - кастомные поля */}
//               <Sheet variant='soft' sx={{ width: '372px', borderRadius: UIBorderRadius['primary'] }}>
//                 <AccordionGroup variant='outlined' transition='0.2s ease'>
//                   <Accordion defaultExpanded>
//                     <AccordionSummary>
//                       <Typography level="body-sm">Разметка</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Stack spacing={1}>
//                         <Card size="sm">
//                           <CardContent orientation='horizontal'>
//                             <Card variant='solid' sx={{ width: '100%' }}></Card>
//                           </CardContent>
//                         </Card>
//                         <Stack justifyContent='space-between' direction='row'>
//                           <Card size="sm" sx={{ width: '153px' }}>
//                             <CardContent orientation='horizontal'>
//                               <Card variant='solid' sx={{ width: '100%' }}></Card>
//                             </CardContent>
//                           </Card>
//                           <Card size="sm" sx={{ width: '100px' }}>
//                             <CardContent orientation='horizontal'>
//                               <Card variant='solid' sx={{ width: '100%' }}></Card>
//                             </CardContent>
//                           </Card>
//                           <Card size="sm" sx={{ width: '56px' }}>
//                             <CardContent orientation='horizontal'>
//                               <Card variant='solid' sx={{ width: '100%' }}></Card>
//                             </CardContent>
//                           </Card>
//                         </Stack>
//                       </Stack>
//                     </AccordionDetails>
//                   </Accordion>
//                   <Accordion defaultExpanded>
//                     <AccordionSummary>
//                       <Typography level="body-sm">Системные поля</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <AccordionGroup
//                         variant='plain'
//                         transition="0.2s"
//                         sx={{
//                           maxWidth: 400,
//                           borderRadius: 'md',
//                           [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
//                           {
//                             paddingBlock: '8px',
//                           },
//                           [`& .${accordionSummaryClasses.button}`]: {
//                             paddingBlock: '8px',
//                           },
//                         }}
//                       >
//                         {
//                           fieldConfigs.map((config) => (
//                             <CardFieldConfig config={config} type={fieldTypes.find((type) => type.id === config.valueTypeID)} demoField={card.fields.find((field) => field.configID === config.id)} />
//                           ))
//                         }
//                       </AccordionGroup>
//                     </AccordionDetails>
//                   </Accordion>
//                   <Accordion defaultExpanded>
//                     <AccordionSummary>
//                       <Typography level="body-sm">Пользовательские поля</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Stack spacing={2}>
//                       </Stack>
//                     </AccordionDetails>
//                   </Accordion>
//                 </AccordionGroup>
//               </Sheet>
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