import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { FieldSizeError } from "./field-size-error";
import { TFieldConfig } from "pages/boards/model";
// import { TCardField } from "pages/boards/model/types";


export const CardSlotInlineText = ({ size, config }: { size: number; config?: TFieldConfig }) => {
  if (size === 12) {
    return (
      <Sheet sx={{ width: size / 12 }}>
        <Typography level='title-sm'>{config?.defaultValue}</Typography>
      </Sheet>
    )
  } else {
    return (
      <FieldSizeError />
    )
  }
}