// import { Accordion, AccordionSummary, Avatar, ListItemContent, Typography, AccordionDetails, Card, CardContent } from "@mui/joy"
// import { Settings, SquareKanban, Columns3, RectangleHorizontal, List, Text, Save, CaseSensitive } from "lucide-react"
// import { TCardField, TCardFieldConfig, TCardFieldType } from "../../model/types"
// import { CardSlotInlineText, CardSlotMultilineText } from "../card-field-types"

// export const CardFieldConfig = (
//   {
//     config,
//     type,
//     demoField
//   }: {
//     config: TCardFieldConfig
//     type?: TCardFieldType
//     demoField?: TCardField
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
//         <Card>
//           <CardContent>
//             {
//               type && type.availableSizes.map((size) => (
//                 {
//                   'text-inline': <CardSlotInlineText size={size} field={demoField} />,
//                   'text-multiline': <CardSlotMultilineText size={size} field={demoField} />
//                 }[type.name] || <Settings />
//               ))
//             }
//           </CardContent>
//         </Card>
//       </AccordionDetails>
//     </Accordion>
//   )
// }