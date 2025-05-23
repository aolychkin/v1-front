// import { Box, Dropdown, Menu, MenuButton, Tooltip, Typography } from "@mui/joy";
// import { useState } from "react";
// import { CardFieldConfig } from "../card/field/card-field-config";
// import { TFieldConfig, TFieldType } from "pages/boards/model";
// import { FieldTooltip } from "./field-tooltip";

// export const CardConfigEditorCell = (
//   {
//     item,
//     fieldConfigs,
//   }: {
//     item: number;
//     fieldConfigs: TFieldConfig[]
//   }
// ) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <Tooltip
//       placement='bottom-start'
//       variant="outlined"
//       arrow
//       title={
//         <FieldTooltip fieldConfigs={fieldConfigs} />
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
//               backgroundColor: 'green',
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
//           {item + 1}
//         </Typography>
//       </Box >
//     </Tooltip >
//   )
// }

// // <Dropdown>
// //   <MenuButton
// //     sx={{
// //       height: "22px",
// //       width: "22px",
// //       display: 'flex',
// //       alignItems: 'center',
// //       p: 0,
// //       justifyContent: 'center',
// //       ...(hover
// //         ? {
// //           backgroundColor: 'green',
// //         }
// //         : {
// //           border: '1px dashed green',
// //         })
// //     }}
// //     onMouseOver={() => setHover(true)}
// //     onMouseLeave={() => setHover(false)}
// //   >
// //     <Typography
// //       level='body-xs'
// //       sx={{
// //         ...(hover
// //           ? {
// //             color: '#FFFFFF'
// //           }
// //           : {
// //             color: '#000000',
// //           })
// //       }}>
// //       {item + 1}
// //     </Typography>
// //   </MenuButton>
// //   <Menu>
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         maxWidth: 320,
// //         justifyContent: 'center',
// //         p: 1,
// //       }}
// //     >
// //       {fieldConfigs.map((config: TFieldConfig) => (
// //         !config.fieldType.isCustom &&
// //         <CardFieldConfig
// //           key={config.id}
// //           config={config}
// //           type={config.fieldType}
// //         />
// //       ))
// //       }
// //     </Box>
// //   </Menu>
// // </Dropdown>