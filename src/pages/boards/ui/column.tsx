import { useEffect, useRef } from "react";
import { TCard, TColumn, TColumnState } from "../model/types"
import { ActionCard } from "./action-card"
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
import { UIBorderRadius, UIColor } from "shared/ui/styles";

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
      //Есть целью является конкретная карточка, а не колонка в целом
      const isOverChildCard = Boolean(innerMost && innerMost.data.type === 'card');

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
      getIsSticky: () => true,
      getData: ({ element, input }) => {
        const data = { ...column, type: "column" }
        return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
      },
      onDragStart({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data.card), location })
      },
      onDragEnter({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data.card), location })
        return;
      },
      onDropTargetChange({ source, location }) {
        setIsCardOver({ data: objToTCard(source.data.card), location })
        return;
      },
      onDragLeave() {
        setState(idle);
      },
      onDrop() {
        setState(idle);
      },
    })
  }, []);
  return (
    <Stack
      direction="column"
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'column',
        background: UIColor["tiny-gray"],
        padding: '8px',
        width: '330px',
        minHeight: '64px',
        borderRadius: UIBorderRadius["primary"]
      }}
    >
      <Typography>{column.title}</Typography>
      <Divider orientation='horizontal' />
      <Stack
        ref={columnUseRef}
        direction='column'
        sx={{
          marginY: '8px',
          background: UIColor["tiny-gray"],
          height: "100%",
          ...(state.type === 'is-card-over' && {
            background: UIColor["tiny-primary"],
          })
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