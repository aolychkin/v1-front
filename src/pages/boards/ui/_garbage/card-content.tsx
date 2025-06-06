import { Card, CardContent, Sheet, Stack, Typography } from "@mui/joy"
import { UIColor } from "shared/ui/styles"
import { CardDebugMode } from "../card/content-modes/debug-mod"

// const ActionCardSlot = () => { }

const renderSlotSwitch = ({ param }: { param: string }) => {

}

// // TODO: на самой доске рядом с фильтрами добавить "Скрыть поля с карточки" и возможность настраивать шаблоны просмотров
// // //TODO: M - скрывает все мета, S - скрывает все поля, кроме основных
// // //TODO: при наведении на сконструированную карточку появляется тултип с просмотром инфы о поле и действиями с ним (убрать/заменить/переместить).
// const ActionCardRow = ({ fields }: { fields: TCardField[] }) => {
//   console.log("fields", fields)
//   return (
//     <Stack direction='row'>
//       {
//         fields.map((field) => (
//           //Системные поля должны быть отдельного типа (например, не инлайн, а саммари, не user, а assignee или наблюдатель)
//           //У системных полей заложена специальная логика внутри системы
//           //TODO: добавить как-то place - карточка / Поля описания / Контекстные поля / Скрытые поля
//           //TODO: Выделить типы полей в обсидиан
//           field.isCustom ?
//             field.configID === 'inline-text'
//               ? <CardSlotInlineText size={field.visual.board.size} field={field} />
//               : field.configID === 'multiline-text'
//                 ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                 : field.configID === 'number'
//                   ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                   : field.configID === 'money-number'
//                     ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                     : field.configID === 'date'
//                       ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                       : field.configID === 'time' //тут еще нужно как-то конфигурировать отображение (абсолютное/относительное, часы/минуты/дни и тд.)
//                         ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                         : field.configID === 'tag'
//                           ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                           : field.configID === 'select' //разрешить вставлять свои иконки при min масштабе
//                             ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                             : field.configID === 'multi-select'
//                               ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                               : field.configID === 'checkbox'
//                                 ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                                 : field.configID === 'user'
//                                   ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                                   : field.configID === 'url'
//                                     ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                                     : field.configID === 'subtask'
//                                       ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                                       : field.configID === 'sprint'
//                                         ? <CardSlotMultilineText size={field.visual.board.size} field={field} />
//                                         : <Card variant='soft' size="sm" sx={{ width: '100%', background: UIColor['tiny-primary'] }}>Назначьте поле</Card>
//             : field.configID === 'summary'
//               ? <CardSlotSummary size={field.visual.board.size} field={field} />
//               : field.configID === 'description'
//                 ? <CardSlotDescription size={field.visual.board.size} field={field} />
//                 : <Card variant='soft' size="sm" sx={{ width: '100%', background: UIColor['tiny-primary'] }}>Назначьте поле</Card>
//         ))
//       }
//     </Stack>
//   )
// }

// //TODO: как перерисовывать только доску при перетаскивании карточек на доске?
// //TODO: ключ и номер карточки
// export const ActionCardContent = (
//   {
//     card,
//     prevRank,
//     nextRank,
//     fieldConfigs,
//     isConfigEditor,
//     isDebugMode,
//   }: {
//     card: TCard;
//     revRank: number;
//     nextRank: number;
//     fieldConfigs: TFieldConfig[];
//     isConfigEditor?: boolean;
//     isDebugMode?: boolean;
//   }
// ) => {
//   return (
    
//   )
// }

// export const ActionCardContent = (
//   {
//     fields,
//     isConstruct,
//     isDebug,
//     meta,
//   }: {
//     fields: TCardField[];
//     isConstruct: boolean;
//     isDebug?: boolean
//     meta?: TCardMeta
//   }
// ) => {
//   // if (isConstruct) {
//   //   var rows: TCardFieldGroupedByRow = {}
//   //   const rowsArray = fields.map((field) => {
//   //     try {
//   //       rows[field.visual.board.rowOrder].push(field)
//   //     } catch {
//   //       rows[field.visual.board.rowOrder] = [field]
//   //       console.log("Push")
//   //     }
//   //   })


//   //   console.log(rows, Object.keys(rows).length)
//   //   return (
//   //     <CardContent>
//   //       {
//   //         Object.keys(rows).map((item) => (
//   //           <ActionCardRow fields={rows[item]} />
//   //         ))
//   //       }

//   //     </CardContent>
//   //   )
//   // }


//   // const rowsArray = ({ fields }: { fields: TCardField[] }) => fields.reduce((acc, { id, ...rest }) => {
//   //   acc[id] ??= [];
//   //   acc[id].push(rest);
//   //   return acc;
//   // }, {});
//   // const rowsArray = fields.map((field) => {
//   //   acc[id] ??= [];
//   //   acc[id].push(rest);
//   // })
//   // const rowedFields = 
//   return (
//     <CardContent>
//       {/* {fields.map((field) => (
//         <ActionCardRow slots={row.slots} card={card} />
//       ))
//       }*/}
//       {isDebug && meta &&
//         <Typography level='title-md'>{fields[0].value}, column:{meta.columnID}, order {meta.order}</Typography>
//       }
//     </CardContent>
//   )
// }