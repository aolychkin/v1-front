import Typography from "@mui/joy/Typography";
import { TCardField } from "pages/boards/model/types";

export const CardSlotDescription = ({ size, field }: { size: number; field: TCardField }) => {
  if (size === 12) {
    return (
      <Typography level='body-xs'>{field.value}</Typography>
    )
  }
  if (size === 6) {
    return <Typography level='title-md'>Не задан</Typography>
  }
  if (size === 3) {
    return <Typography level='title-md'>Не задан</Typography>
  }
  if (size === 0) {
    return <Typography level='title-md'>Не задан</Typography>
  }
}