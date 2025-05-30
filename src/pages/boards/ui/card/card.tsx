import { Box, Card, CardContent, Skeleton, Stack, Typography } from "@mui/joy"

import {
  type Edge,
  attachClosestEdge,
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import { useEffect, useRef, useState, RefObject } from "react";
import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";
import { createPortal } from "react-dom";
import { CardShadow } from "./card-shadow";
import { objToTCard } from "pages/boards/lib";
import { TCard } from "pages/boards/model";
import { TCardState, TFieldConfig } from "pages/boards/model/types/action";
import { CardBoardMode } from "./content-modes/board-mod";
import { CardConfigEditorMode } from "./content-modes/config-editor-mod";
import { CardDebugMode } from "./content-modes/debug-mod";

const idle: TCardState = { type: "idle" }

const Display = (
  {
    card,
    prevRank,
    nextRank,
    fieldConfigs,
    state,
    outerRef,
    innerRef,
    isConfigEditor,
    isDebugMode,
  }: {
    card: TCard;
    prevRank: number;
    nextRank: number;
    fieldConfigs: TFieldConfig[]
    state: TCardState;
    outerRef?: RefObject<HTMLDivElement | null>;
    innerRef?: RefObject<HTMLDivElement | null>;
    isConfigEditor?: boolean;
    isDebugMode?: boolean;
  }
) => {
  var cardSpacing = "8px"
  return (
    <Stack ref={outerRef} sx={state.type === 'is-dragging-and-left-self' ? { visibility: 'hidden', display: 'none' } : undefined}>
      {state.type === 'is-over' && state.closestEdge === 'top' ? (
        <CardShadow cardSpacing={cardSpacing} />
      ) : null}
      <Card ref={innerRef} orientation='vertical'
        sx={{
          marginY: cardSpacing,
          width: "314px",
          ...(state.type === 'preview' &&
          {
            opacity: 0.5,
            transform: 'rotate(4deg)',
          }),
          ...(state.type === 'is-dragging' &&
          {
            opacity: 0.3
          })
        }}>
        <CardContent>
          {
            isDebugMode
              ? <CardDebugMode card={card} prevRank={prevRank} nextRank={nextRank} />
              : isConfigEditor
                ? <Stack direction='row' justifyContent='space-between'>
                  {
                    Array.from(Array(12).keys()).map((item: number) => (
                      <CardConfigEditorMode item={item} fieldConfigs={fieldConfigs} />
                    ))
                  }
                </Stack>
                : <CardBoardMode card={card} />
          }
        </CardContent>
      </Card>
      {
        state.type === 'is-over' && state.closestEdge === 'bottom' ? (
          <CardShadow cardSpacing={cardSpacing} />
        ) : null
      }
    </Stack >
  )
}

// TODO: Добавить конфигурацию карточки
export const ActionCard = (
  {
    card,
    prevRank,
    nextRank,
    fieldConfigs,
    isConfigEditor,
    isDebugMode,
  }: {
    card: TCard;
    prevRank: number;
    nextRank: number;
    fieldConfigs: TFieldConfig[];
    isConfigEditor?: boolean;
    isDebugMode?: boolean;
  }
) => {
  const [state, setState] = useState<TCardState>(idle);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    invariant(outer && inner);

    if (isConfigEditor) {
      return
    }

    return combine(
      draggable({
        element: inner,
        getInitialData: () => ({ card }),
        onGenerateDragPreview({ nativeSetDragImage }) {
          setCustomNativeDragPreview({ // import this 
            getOffset: pointerOutsideOfPreview({ // import this
              x: "5px",
              y: "5px",
            }),
            nativeSetDragImage,
            render({ container }) {
              setState({ type: "preview", container }); // flicks to preview state
              return () => setState({ type: "is-dragging" }); // next tick flicks to dragging
            },
          });
        },
        onDragStart: () => {
          setState({ type: 'is-dragging' })
        },
        onDrop: () => {
          setState(idle)
        },
      }),
      dropTargetForElements({
        element: outer,
        getIsSticky: () => true,
        getData: ({ element, input }) => {
          const data = { ...card, type: "card", prevRank, nextRank, isConfigEditor }
          return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
        },
        onDragEnter({ source, self }) {
          if (objToTCard(source.data.card).id === card.id) {
            return;
          }
          const closestEdge = extractClosestEdge(self.data);
          if (!closestEdge) {
            return;
          }
          setState({ type: 'is-over', closestEdge });
        },
        // source = передвигаемая карточка, self - принимающая
        onDrag({ source, self }) {
          if (objToTCard(source.data.card).id === objToTCard(self.data).id) {
            return;
          }
          const closestEdge = extractClosestEdge(self.data);
          if (!closestEdge) {
            return;
          }
          // Не допускаем перезаписи состояния
          const proposed: TCardState = { type: 'is-over', closestEdge };
          setState((current) => {
            if ((current.type === 'is-over') && (current.closestEdge === closestEdge)) {
              return current;
            }
            return proposed;
          });
        },
        onDragLeave({ source, self }) {
          if (objToTCard(source.data.card).id === objToTCard(self.data).id) {
            setState({ type: 'is-dragging-and-left-self' });
            return;
          }
          setState(idle);
        },
        onDrop() {
          setState(idle);
        },
      }),
    );
  }, [card]);


  return (
    <>
      <Display outerRef={outerRef} innerRef={innerRef} state={state} card={card} prevRank={prevRank} nextRank={nextRank} fieldConfigs={fieldConfigs} isConfigEditor={isConfigEditor} />
      {
        //TODO: Внести превью в компонент колонки?
        state.type === "preview"
          ? createPortal(<Display state={state} card={card} prevRank={prevRank} nextRank={nextRank} fieldConfigs={fieldConfigs} isConfigEditor={isConfigEditor}></Display>, state.container)
          : null
      }
    </>
  )
}