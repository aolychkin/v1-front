import { Accordion, AccordionSummary, Avatar, ListItemContent, Typography, AccordionDetails, Card, CardContent } from "@mui/joy"
import { Settings, SquareKanban, Columns3, RectangleHorizontal, List, Text, Save, CaseSensitive } from "lucide-react"
// import { TFieldConfig, TFieldType, TActionField } from "pages/boards/model"
// import { CardSlotInlineText } from "./inline-text"
// import { CardSlotMultilineText } from "./multiline-text"

// const getSlot = (
//   {
//     typeName,
//     size
//   }: {
//     typeName: string;
//     size: number;
//   }
// ) => {
//   return (

//   )
// }


// export const CardFieldConfig = (
//   {
//     config,
//     type,
//   }: {
//     config: TFieldConfig
//     type?: TFieldType
//   }
// ) => {
//   return (
//     <Accordion>
//       <AccordionSummary>
//         <Avatar color="success">
//           {
//             type && {
//               'text-inline': <CaseSensitive />,
//               'text-multiline': <Text />
//             }[type.name] || <Settings />
//           }
//         </Avatar>
//         <ListItemContent>
//           <Typography level="title-sm">{config.alias}</Typography>
//           <Typography level="body-xs">{type ? type.alias : "тип не найден"}</Typography>
//         </ListItemContent>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Card
//           sx={{
//             width: "314px",
//             py: "8px"
//           }}
//           size='md'
//         >
//           <CardContent>
//             {
//               type && type.availableSizes.map((size) => (
//                 {
//                   'text-inline': <CardSlotInlineText size={Number(size)} config={config} />,
//                   'text-multiline': <CardSlotMultilineText size={Number(size)} config={config} />
//                 }[type.name] || <Settings />
//               ))
//             }
//           </CardContent>
//         </Card>
//       </AccordionDetails>
//     </Accordion>
//   )
// }