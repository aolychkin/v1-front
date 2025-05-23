import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, CardContent } from "@mui/joy"
import { CardFieldConfig } from "../field/card-field-config"
import { TCard, TFieldConfig } from "pages/boards/model";
import { useState } from "react";


export const CardDebugMode = (
  {
    card,
    prevRank,
    nextRank,
  }: {
    card: TCard;
    prevRank: number;
    nextRank: number;
  }) => {
  const [hover, setHover] = useState(false);

  return (
    <Typography level='title-md'>{card.action.actionNum}, column:{card.columnId}, order {card.order}, prev: {prevRank}, next: {nextRank}</Typography>
  )
}