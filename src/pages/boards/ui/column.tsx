import { Stack, Divider } from "@mui/joy"
import { TColumn } from "../types"
import { ActionCard } from "./card"

export const ActionColumn = (
  {
    data
  }: {
    data: TColumn
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
      {
        data.cards.map((card) => (
          <ActionCard key={card.id} card={card} />
        ))
      }
    </Stack>
  )
}