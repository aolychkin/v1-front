import { Stack } from "@mui/joy"
import { TBoard, TCard, TColumn, objToTCard } from "../model/types";
import { ActionColumn } from "./column";
import { getMockData } from "../model/mocks";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useState } from "react";
import { reorderCardsWithEdge } from "../lib/reorder";
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

export const ActionBoard = () => {
  const [data, setData] = useState(getMockData());

  useEffect(() => {
    return monitorForElements({
      onDragStart: () => console.log('I am called whenever any element drag starts'),
      onDrop: ({ source, location }) => {
        console.log(source.data.card)
        console.log(location.current.dropTargets[0].data)

        const reordered = reorderCardsWithEdge({
          board: data,
          currentCard: objToTCard(source.data.card),
          targetCard: objToTCard(location.current.dropTargets[0].data),
          edge: extractClosestEdge(location.current.dropTargets[0].data),
        })

        console.log(reordered)
        setData({ ...data, cards: reordered })
      }
    });
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      {
        data.columns.map((col: TColumn) => (
          <ActionColumn key={col.id} column={col} cards={data.cards.filter((item: TCard) => item.columnID === col.id)} />
        ))
      }
    </Stack>
  )
}