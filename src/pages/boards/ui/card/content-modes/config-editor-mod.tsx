import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, Tab, TabList, Tabs, tabClasses, TabPanel, Avatar, Card, CardContent, Chip } from "@mui/joy"
import { useEffect, useState } from "react";
import { CaseSensitive, Settings, Text } from "lucide-react";


// export const CardConfigEditorMode = (
//   {
//     fieldConfigs,
//   }: {
//     fieldConfigs: TFieldConfig[]
//   }) => {
//   const [hover, setHover] = useState(false);
//   const [editConfig, setEditConfig] = useState([0, 0, 0]); // start position: [0,0], mode [0: none, 1: add, 2: edit]
//   const [color, setColor] = useState("");

//   // var cellColor = '#FFFFFF'
//   // useEffect(() => {
//   //   if (item >= elemPosition[0] && item <= elemPosition[1]) {
//   //     cellColor = '#FF0000'
//   //   }
//   //   console.log(cellColor)
//   // }, [elemPosition])

//   return (
//     <Tooltip
//       placement='bottom-start'
//       variant="outlined"
//       arrow
//       // {...(editConfig[2] == 0 ? close : open)}
//       title={
//         <Tabs
//           orientation='vertical'
//           aria-label="tabs"
//           defaultValue={fieldConfigs[0].name}
//           sx={{
//             bgcolor: 'transparent',
//             flexDirection: 'row-reverse'
//           }}
//         >
//           <TabList
//             disableUnderline
//             sx={{
//               p: 0.5,
//               gap: 0.5,
//               borderRadius: 'xl',
//               bgcolor: 'background.level1',
//               [`& .${tabClasses.root}[aria-selected="true"]`]: {
//                 boxShadow: 'sm',
//                 bgcolor: 'background.surface',
//               },
//             }}
//           >
//             {
//               fieldConfigs.map((config) => (
//                 // !config.fieldType.isCustom &&
//                 <Tab disableIndicator key={config.id} value={config.name} orientation='horizontal'>
//                   <Avatar color='neutral' size='sm'>
//                     {
//                       config.fieldType && {
//                         'text-inline': <CaseSensitive />,
//                         'text-multiline': <Text />
//                       }[config.fieldType.name] || <Settings />
//                     }
//                   </Avatar>
//                   <Typography level="title-sm">{config.alias}</Typography>
//                   <Chip size='sm' color='success'>1</Chip>
//                   {/* <Stack direction={'row'}>
//                     <Typography level="body-xs">{config.fieldType ? config.fieldType.alias : "тип не найден"}</Typography>
//                   </Stack> */}
//                   {/* {config.alias} */}
//                 </Tab>
//               ))
//             }
//             <Tab disableIndicator value="add">
//               <Typography level="title-sm">+Create new field</Typography>
//             </Tab>
//           </TabList>
//           {/* TODO: запрещать редактировать одновременно. Отправлять флаг редактирования на бек*/}
//           {
//             fieldConfigs.map((config) => (
//               <TabPanel key={config.id} value={config.name}
//                 sx={{
//                   width: "346px",
//                   py: "8px"
//                 }}
//               >
//                 <Card
//                   sx={{
//                     width: "314px",
//                     py: "8px",
//                     border: editConfig[2] === 0 ? '1px solid black' : '1px dashed green'
//                   }}
//                   size='md'
//                   onMouseOver={() => setEditConfig([0, 12, 1])}
//                   onMouseLeave={() => setEditConfig([0, 12, 0])}
//                   onClick={() => console.log("clicked")}
//                 >
//                   <CardContent>
//                     {
//                       config.fieldType && config.fieldType.availableSizes.map((size) => (
//                         {
//                           'text-inline': <CardSlotInlineText size={Number(size)} config={config} />,
//                           'text-multiline': <CardSlotMultilineText size={Number(size)} config={config} />
//                         }[config.fieldType.name] || <Settings />
//                       ))
//                     }
//                   </CardContent>
//                 </Card>
//               </TabPanel>
//             ))
//           }
//           <TabPanel value="add"
//             sx={{
//               width: "314px",
//               py: "8px"
//             }}
//           >
//             Add new panel
//           </TabPanel>
//         </Tabs >
//       }
//       disableFocusListener={true}
//     >
//       <Box
//         sx={{
//           height: "22px",
//           width: "22px",
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           ...(hover
//             ? {
//               backgroundColor: '#008000',
//             }
//             : {
//               border: '1px dashed green',
//             })
//         }}
//         onMouseOver={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <Typography
//           level='body-xs'
//           sx={{
//             ...(hover
//               ? {
//                 color: '#FFFFFF'
//               }
//               : {
//                 color: '#000000',
//               })
//           }}>
//           +
//         </Typography>
//       </Box >
//     </Tooltip >
//   )
// }

// //   return (
// //     <Tooltip
// //       placement='bottom-start'
// //       variant="outlined"
// //       arrow
// //       title={
// //         <Tabs
// //           orientation='vertical'
// //           aria-label="tabs"
// //           defaultValue={fieldConfigs[0].name}
// //           sx={{
// //             bgcolor: 'transparent',
// //             flexDirection: 'row-reverse'
// //           }}
// //         >
// //           <TabList
// //             disableUnderline
// //             sx={{
// //               p: 0.5,
// //               gap: 0.5,
// //               borderRadius: 'xl',
// //               bgcolor: 'background.level1',
// //               [`& .${tabClasses.root}[aria-selected="true"]`]: {
// //                 boxShadow: 'sm',
// //                 bgcolor: 'background.surface',
// //               },
// //             }}
// //           >
// //             {
// //               fieldConfigs.map((config) => (
// //                 // !config.fieldType.isCustom &&
// //                 <Tab disableIndicator key={config.id} value={config.name} orientation='horizontal'>
// //                   <Avatar color='neutral' size='sm'>
// //                     {
// //                       config.fieldType && {
// //                         'text-inline': <CaseSensitive />,
// //                         'text-multiline': <Text />
// //                       }[config.fieldType.name] || <Settings />
// //                     }
// //                   </Avatar>
// //                   <Typography level="title-sm">{config.alias}</Typography>
// //                   {/* <Stack direction={'row'}>

// //                     <Typography level="body-xs">{config.fieldType ? config.fieldType.alias : "тип не найден"}</Typography>
// //                   </Stack> */}
// //                   {/* {config.alias} */}
// //                 </Tab>
// //               ))
// //             }
// //             <Tab disableIndicator value="add">
// //               <Typography level="title-sm">+Create new field</Typography>
// //             </Tab>
// //           </TabList>
// //           {
// //             fieldConfigs.map((config) => (
// //               <TabPanel key={config.id} value={config.name}
// //                 sx={{
// //                   width: "346px",
// //                   py: "8px"
// //                 }}
// //               >
// //                 <Card
// //                   sx={{
// //                     width: "314px",
// //                     py: "8px"
// //                   }}
// //                   size='md'
// //                   onMouseOver={() => setElemPosition([0, 12, '#FF0000'])}
// //                   onMouseLeave={() => setElemPosition([0, 12, '#FFFFFF'])}
// //                 >
// //                   <CardContent>
// //                     {
// //                       config.fieldType && config.fieldType.availableSizes.map((size) => (
// //                         {
// //                           'text-inline': <CardSlotInlineText size={Number(size)} config={config} />,
// //                           'text-multiline': <CardSlotMultilineText size={Number(size)} config={config} />
// //                         }[config.fieldType.name] || <Settings />
// //                       ))
// //                     }
// //                   </CardContent>
// //                 </Card>
// //               </TabPanel>
// //             ))
// //           }
// //           <TabPanel value="add"
// //             sx={{
// //               width: "314px",
// //               py: "8px"
// //             }}
// //           >
// //             Add new panel
// //           </TabPanel>

// //         </Tabs >
// //         // <AccordionGroup variant='plain' transition='0.2s ease'>
// //         //   <Accordion defaultExpanded>
// //         //     <AccordionSummary>
// //         //       <Typography level="body-sm">Системные поля</Typography>
// //         //     </AccordionSummary>
// //         //     <AccordionDetails>
// //         //       <AccordionGroup
// //         //         variant='plain'
// //         //         transition="0.2s"
// //         //         sx={{
// //         //           maxWidth: 400,
// //         //           borderRadius: 'md',
// //         //           [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
// //         //           {
// //         //             paddingBlock: '8px',
// //         //           },
// //         //           [`& .${accordionSummaryClasses.button}`]: {
// //         //             paddingBlock: '8px',
// //         //           },
// //         //         }}
// //         //       >
// //         //         {
// //         //           fieldConfigs.map((config) => (
// //         //             !config.fieldType.isCustom &&
// //         //             <CardFieldConfig
// //         //               key={config.id}
// //         //               config={config}
// //         //               type={config.fieldType}
// //         //             />
// //         //           ))
// //         //         }
// //         //       </AccordionGroup>
// //         //     </AccordionDetails>
// //         //   </Accordion>
// //         //   <Accordion defaultExpanded>
// //         //     <AccordionSummary>
// //         //       <Typography level="body-sm">Пользовательские поля</Typography>
// //         //     </AccordionSummary>
// //         //     <AccordionDetails>
// //         //       <Stack spacing={2}>
// //         //       </Stack>
// //         //     </AccordionDetails>
// //         //   </Accordion>
// //         // </AccordionGroup>
// //       }
// //       disableFocusListener={true}
// //     >
// //       <Box
// //         sx={{
// //           height: "22px",
// //           width: "22px",
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           ...(hover
// //             ? {
// //               backgroundColor: '#008000',
// //             }
// //             : {
// //               border: '1px dashed green',
// //               backgroundColor: elemPosition[2],
// //             })
// //         }}
// //         onMouseOver={() => setHover(true)}
// //         onMouseLeave={() => setHover(false)}
// //       >
// //         <Typography
// //           level='body-xs'
// //           sx={{
// //             ...(hover
// //               ? {
// //                 color: '#FFFFFF'
// //               }
// //               : {
// //                 color: '#000000',
// //               })
// //           }}>
// //           {item + 1}
// //         </Typography>
// //       </Box >
// //     </Tooltip >
// //   )
// // }