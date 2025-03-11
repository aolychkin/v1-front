import { Stack, Divider, Typography } from "@mui/joy"
import { TCard, TColumn } from "../model/types"
import { ActionCard } from "./card"


//TOOD: вся колонка может быть таргетом перетаскивания
export const ActionColumn = (
  {
    column,
    cards
  }: {
    column: TColumn;
    cards: TCard[]
  }
) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" />}
      spacing={1}
      sx={{
        justifyContent: "flex-start",
        alignItems: "column",
        background: '#999999',
        padding: '1vw',
      }}
    >
      <Typography>{column.title}</Typography>
      {
        cards.map((card) => (
          <ActionCard key={card.id} card={card} />
        ))
      }
    </Stack>
  )
}