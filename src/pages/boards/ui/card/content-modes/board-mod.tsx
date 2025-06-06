import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, CardContent } from "@mui/joy"
import { useState } from "react";
import { config } from "process";

// const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
//   arr.reduce((groups, item) => {
//     (groups[key(item)] ||= []).push(item);
//     return groups;
//   }, {} as Record<K, T[]>);

// const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
// list.reduce((previous, currentItem) => {
//   const group = getKey(currentItem);
//   if (!previous[group]) previous[group] = [];
//   previous[group].push(currentItem);
//   return previous;
// }, {} as Record<K, T[]>);


// export const CardBoardMode = (
//   {
//     card,
//     cardConfig,
//     fieldConfigs,
//   }: {
//     card: TAction;
//     cardConfig: TCardConfig;
//     fieldConfigs: TFieldConfig[]
//   }) => {
//   console.log(card, cardConfig, fieldConfigs)
//   const mode = 'editor'
//   const maxRow = Math.max(...cardConfig.actionFields.map(o => o.rowOrder))
//   //TODO: получить количество строк и если это в нужной строке (как с колонками - выводим)
//   //TODO: вместо всей параши - сделать просто плюсик, если колумн ордер + сайз последнего элемента не 12
//   return (
//     <Stack direction={'column'}>
//       {
//         Array.from(Array(maxRow).keys()).map((item: number) => (
//           <Stack direction={'row'}>
//             {
//               cardConfig.actionFields.filter((AFItem) => AFItem.rowOrder === item + 1).map(
//                 (cardConfigActionField) =>
//                   <Stack direction={'row'}>
//                     {/* <EditBoxes count={cardConfigActionField.columnOrder > 1 ? cardConfigActionField.columnOrder : 0} /> */}
//                     <SwitchFieldTypes
//                       size={Number(cardConfigActionField.size)}
//                       field={card.action.fields.filter((actionField) => actionField.fieldConfigId === cardConfigActionField.fieldConfigId)[0]}
//                       config={fieldConfigs.filter((fConf) => fConf.id === cardConfigActionField.fieldConfigId)[0]}
//                       fieldTypeName={fieldConfigs.filter((fConf) => fConf.id === cardConfigActionField.fieldConfigId)[0].fieldType.name}
//                     />
//                     {/* <EditBoxes count={cardConfigActionField.columnOrder + cardConfigActionField.size === 12 ? 0 : 12 - (cardConfigActionField.columnOrder + cardConfigActionField.size - 1)} /> */}
//                   </Stack>
//               )
//             }
//           </Stack>
//         ))
//       }
//     </Stack>
//   )
// }

// const EditBoxes = (
//   {
//     count,
//   }: {
//     count: number;
//   }) => {
//   if (count === 0) {
//     return
//   } else {
//     // console.log(count)
//     return (
//       <>
//         {
//           Array.from(Array(count).keys()).map((item: number) => (
//             <Box>{item + 1}</Box>
//           )
//           )
//         }
//       </>
//     )
//   }

// }

// const SwitchFieldTypes = (
//   {
//     size,
//     field,
//     config,
//     fieldTypeName,
//   }: {
//     size: number;
//     field: TActionField;
//     config: TFieldConfig;
//     fieldTypeName: string;
//   }) => {
//   return (
//     {
//       'text-inline': <CardSlotInlineText size={size} field={field} config={config} />,
//       'text-multiline': <CardSlotMultilineText size={size} field={field} config={config} />
//     }[fieldTypeName] || <Typography level='title-md'>Тип поля не обнаружен</Typography>
//   )
// }