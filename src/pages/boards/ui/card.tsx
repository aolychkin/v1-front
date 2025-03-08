import { Card, CardContent, Stack, Typography } from "@mui/joy"

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
import { TCard } from "../types";
import { createPortal } from "react-dom";

type TCardState =
  | {
    type: 'idle';
  }
  | {
    type: 'is-dragging';
  }
  | {
    type: 'is-dragging-and-left-self';
  }
  | {
    type: 'is-over';
    // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
    closestEdge: Edge;
  }
  | {
    type: 'preview';
    container: HTMLElement;
    // dragging: DOMRect;
  };

const idle: TCardState = { type: "idle" }

const Display = (
  {
    card,
    state,
    outerRef,
    innerRef,
  }: {
    card: TCard;
    state: TCardState;
    outerRef?: RefObject<HTMLDivElement | null>;
    innerRef?: RefObject<HTMLDivElement | null>;
  }
) => {
  // if (state.type === 'is-over') {
  //   console.log("IS OVER")
  // }

  return (
    <Stack ref={outerRef}>
      {state.type === 'is-over' && state.closestEdge === 'top' ? (
        <Typography>Test</Typography>
      ) : null}
      <Card ref={innerRef}
        sx={{
          opacity: state.type === "is-dragging" ? 0.5 : 1.0,
          transform: state.type === "preview" ? 'rotate(4deg)' : '',
        }}>
        <CardContent>
          <Typography level='title-md'>{card.description}</Typography>
        </CardContent>
      </Card>
      {state.type === 'is-over' && state.closestEdge === 'bottom' ? (
        <Typography>Test</Typography>
      ) : null}
    </Stack>
  )
}

// TODO: Добавить конфигурацию карточки
export const ActionCard = (
  {
    card
  }: {
    card: TCard
  }
) => {
  const [state, setState] = useState<TCardState>(idle);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    invariant(outer && inner);

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
        onDragStart: () => setState({ type: 'is-dragging' }),
        onDrop: () => {
          setState(idle)
        },
      }),
      dropTargetForElements({
        element: outer,
        getIsSticky: () => true, //Хз что делает стики, но видел в доке
        getData: ({ element, input }) => {
          const data = card
          return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
        },
        onDragEnter({ source, self }) {
          const closestEdge = extractClosestEdge(self.data);
          if (!closestEdge) {
            return;
          }
          setState({ type: 'is-over', closestEdge });
        },
        onDrag({ source, self }) {
          const closestEdge = extractClosestEdge(self.data);
          if (!closestEdge) {
            return;
          }
          setState({ type: 'is-over', closestEdge });
        },
        onDragLeave({ source }) {
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
      <Display outerRef={outerRef} innerRef={innerRef} state={state} card={card} />
      {
        //TODO: Внести превью в компонент колонки?
        state.type === "preview"
          ? createPortal(<Display state={state} card={card}></Display>, state.container)
          : null
      }
    </>
  )
}