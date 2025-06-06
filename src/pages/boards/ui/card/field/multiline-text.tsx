import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { FieldSizeError } from "./field-size-error";
// import { TActionField, TFieldConfig } from "pages/boards/model";

// export const CardSlotMultilineText = ({ size, field, config }: { size: number; field?: TActionField; config?: TFieldConfig }) => {
//   console.log("CONFIG", config)
//   console.log("CONFIG field", field)
//   if (size >= 6) {
//     return (
//       <Sheet sx={{ width: size / 12 }}>
//         <Typography level='body-xs'>{field?.value} </Typography>
//         {/* <Typography level='body-xs'>{config?.defaultValue}, {config?.defaultValue}, {config?.defaultValue} </Typography> */}
//       </Sheet>
//     )
//   } else {
//     return (
//       <FieldSizeError />
//     )
//   }
// }