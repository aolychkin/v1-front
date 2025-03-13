import { Card, CardContent, Sheet, Stack, Typography } from "@mui/joy"
import { TCard, TCardVisualConfig, TCardVisualConfigSlot } from "../model/types"

const CardTitle = ({ slotWidth, data }: { slotWidth: number; data: string }) => {
  if (slotWidth === 9) {
    return (
      <Typography level='title-md'>{data}</Typography>
    )
  }
  if (slotWidth === 5) {
    return <Typography level='title-md'>{data}</Typography>
  }
  if (slotWidth === 3) {
    return <Typography level='title-md'>{data}</Typography>
  }
  if (slotWidth === 0) {
    return <Typography level='title-md'>{data}</Typography>
  }
}

const CardSlotMax = (
  {
    slot,
    card
  }: {
    slot: TCardVisualConfigSlot
    card: TCard
  }
) => {
  if (slot.fieldID) {
    return (
      <Sheet variant='plain' sx={{ width: '100%' }}>
        {
          slot.fieldID === 'title' &&
          <Typography level='title-md'>{card.title}</Typography>
        }
      </Sheet>
    )

  } else {
    return (
      <Card variant='solid' sx={{ width: '100%' }}></Card>
    )
  }
}

export const ActionCardContent = (
  {
    card,
    //config (передавать json по доске)
    isConstruct,
    isDebug,
    config
  }: {
    card: TCard;
    isConstruct: boolean;
    config?: TCardVisualConfig;
    isDebug?: boolean
  }
) => {
  const sortedFields = config?.rows.sort((a, b) => a.rowOrder - b.rowOrder)
  return (
    <CardContent>
      {sortedFields &&
        sortedFields.map((row) => (
          row.slots.map((slot) => (
            slot.slotSize === 9 ? <CardSlotMax slot={slot} card={card} /> : slot.slotSize === 5 ? <CardSlotMax slot={slot} card={card} /> : slot.slotSize === 3 ? <CardSlotMax slot={slot} card={card} /> : <CardSlotMax slot={slot} card={card} />
          ))

          // field.fieldID === 'title' && <Typography level='title-md'>{card.title}</Typography>
        ))
      }
      {isDebug &&
        <Typography level='title-md'>{card.title}, column:{card.meta.columnID}, order {card.meta.order}</Typography>
      }
    </CardContent>
  )
}