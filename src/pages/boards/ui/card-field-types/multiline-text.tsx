import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { TCardField } from "pages/boards/model/types";
import { FieldSizeError } from "../field-size-error";

export const CardSlotMultilineText = ({ size, field }: { size: number; field?: TCardField }) => {
  if (size === 12) {
    return (
      <Sheet sx={{ width: size / 12 }}>
        <Typography level='body-xs'>{field?.value}</Typography>
      </Sheet>
    )
  } else {
    return (
      <FieldSizeError />
    )
  }
}