import { useEffect, useRef } from "react";
import { TCard, TColumn, TColumnState } from "../model/types"
import { ActionCard } from "./card"
import { Divider, Stack, Typography } from "@mui/joy"

import {
  type Edge,
  attachClosestEdge,
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import { useState, RefObject } from "react";
import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";
import { TCardState, objToTCard } from "../model/types";
import { createPortal } from "react-dom";
import { CardShadow } from "./card-shadow";
import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";

const idle: TColumnState = { type: 'column-idle' }

//TODO: вся колонка может быть таргетом перетаскивания
//TODO: Перенести пемещения сюда, тк спейсингом тоже нужно будет управлять
export const ActionColumn = (
  {
    column,
    cards
  }: {
    column: TColumn;
    cards: TCard[]
  }
) => {
  const [state, setState] = useState<TColumnState>(idle);
  const columnUseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const columnRef = columnUseRef.current;
    invariant(columnRef);

    function setIsCardOver({ data, location }: { data: TCard; location: DragLocationHistory }) {
      const innerMost = location.current.dropTargets[0];
      // console.log(innerMost.data)
      //Есть целью является конкретная карточка, а не колонка в целом
      const isOverChildCard = Boolean(innerMost.data.type === 'card');

      const proposed: TColumnState = {
        type: 'is-card-over',
        isOverChildCard,
      };
      // optimization - don't update state if we don't need to.
      setState((current) => {
        if ((current.type === 'is-card-over') && (current.isOverChildCard === isOverChildCard)) {
          return current;
        }
        return proposed;
      });
    }

    dropTargetForElements({
      element: columnRef,
      getIsSticky: () => true, //Хз что делает стики, но видел в доке
      getData: ({ element, input }) => {
        const data = { ...column, type: "column" }
        return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
      },
      onDragStart({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data), location })
      },
      onDragEnter({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data), location })
        return;
      },
      onDropTargetChange({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data), location })
        return;
      },
      onDragLeave({ source }) {
        setState(idle);
      },
      onDrop({ source, location }) {
        setState(idle);
        // console.log(location)
        // console.log(source.data)
      },
    })
  }, []);
  return (
    <Stack
      direction="column"
      sx={{
        justifyContent: "flex-start",
        alignItems: "column",
        background: '#F6F6F6',
        padding: '1vw',
      }}
    >
      <Typography>{column.title}</Typography>
      <Divider orientation='horizontal' />
      <Stack
        ref={columnUseRef}
        direction='column'
        sx={{
          paddingTop: "8px",
          background: '#FFFFFF',
          height: "100%"
        }}
      >
        {
          cards.map((card) => (
            <ActionCard key={card.id} card={card} />
          ))
        }
        {
          //&& state.closestEdge === 'bottom'
          (state.type === 'is-card-over') && (!state.isOverChildCard) ? (
            <CardShadow cardSpacing='8px' />
          ) : null
        }
      </Stack>
    </Stack>
  )
}