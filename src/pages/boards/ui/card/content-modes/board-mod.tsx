import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, CardContent } from "@mui/joy"
import { CardFieldConfig } from "../field/card-field-config"
import { TCard, TFieldConfig } from "pages/boards/model";
import { useState } from "react";


export const CardBoardMode = (
  {
    card,
  }: {
    card: TCard;
  }) => {

  return (
    <Typography level='title-md'>{card.action.actionNum}</Typography>
  )
}