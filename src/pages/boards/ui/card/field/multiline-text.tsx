import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { FieldSizeError } from "./field-size-error";
import { TFieldConfig } from "pages/boards/model";

export const CardSlotMultilineText = ({ size, config }: { size: number; config?: TFieldConfig }) => {
  if (size === 12) {
    return (
      <Sheet sx={{ width: size / 12 }}>
        <Typography level='body-xs'>{config?.defaultValue}, {config?.defaultValue}, {config?.defaultValue} </Typography>
      </Sheet>
    )
  } else {
    return (
      <FieldSizeError />
    )
  }
}