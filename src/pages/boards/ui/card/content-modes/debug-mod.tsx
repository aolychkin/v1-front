import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, CardContent } from "@mui/joy"
import { DTOAction } from "pages/boards/model/protos/board/board_pb";
import { TAction } from "pages/boards/model/types/board";
import { useState } from "react";


export const CardDebugMode = (
  {
    card,
    prevRank,
    nextRank,
  }: {
    card: DTOAction.AsObject;
    prevRank: number;
    nextRank: number;
  }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box>
      <Typography level='title-md'>{card.index}, {card.fieldsValueList[0].value}</Typography>
      <Typography level='title-md'>status: {card.status?.name}</Typography>
      <Typography level='title-md'>order: {card.order}</Typography>
      <Typography level='title-md'>prevRank: {prevRank}, nextRank: {nextRank}</Typography>
    </Box>
  )
}