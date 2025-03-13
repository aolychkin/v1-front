import { CardContent, Typography } from "@mui/joy"
import { TCard } from "../model/types"

export const ActionCardContent = (
  {
    card
  }: {
    card: TCard
  }
) => {
  return (
    <CardContent>
      <Typography level='title-md'>{card.title}, column:{card.meta.columnID}, order {card.meta.order}</Typography>
    </CardContent>
  )
}