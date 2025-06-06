import { useEffect, useRef } from "react";
import { ActionCard } from "../card/card"
import { Box, Divider, Stack, Typography } from "@mui/joy"

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
import { createPortal } from "react-dom";
import { CardShadow } from "../card/card-shadow";
import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";
import { UIBorderRadius, UIColor } from "shared/ui/styles";
import { TCardDragData, TColumnDragData, TColumnState, objToTCardDragData } from "pages/boards/model/types/action";
import { TAction, TColumn } from "pages/boards/model/types/board";
import { DTOAction, DTOActionStatus, DTOColumn } from "pages/boards/model/protos/board/board_pb";

const idle: TColumnState = { type: 'column-idle' }

//TODO: вся колонка может быть таргетом перетаскивания
//TODO: Перенести пемещения сюда, тк спейсингом тоже нужно будет управлять
export const ActionColumn = (
  {
    column,
  }: {
    column: DTOColumn.AsObject;
  }
) => {
  const [state, setState] = useState<TColumnState>(idle);
  const [statusId, setStatusID] = useState("");
  const columnUseRef = useRef<HTMLDivElement | null>(null);
  console.log(column)

  // useEffect(() => {
  //   setState({
  //     type: 'is-status-chosen',
  //     status_id: statusId,
  //   } as TColumnState)
  //   console.log("AKMkmakfSKMkamLFSMK", state)
  // }, [statusId]);

  // useEffect(() => {
  //   setState(idle)
  // }, []);

  useEffect(() => {
    const columnRef = columnUseRef.current;
    invariant(columnRef);

    var columnDragData = {
      column_id: column.id,
      actions: column.actionsList,
    } as TColumnDragData

    dropTargetForElements({
      element: columnRef,
      getIsSticky: () => true,
      getData: ({ element, input }) => {
        const data = { columnDragData, target_status_id: statusId, type: "column" }
        return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
      },
      onDragStart({ source, location }) {
        console.log("onDragStart")
        setState({
          type: 'is-status-chosen',
          status_id: objToTCardDragData(source.data).action_id
        } as TColumnState)
      },
      onDragEnter({ source, location }) {
        console.log("onDragEnter")
        if (objToTCardDragData(source.data).column_id === column.id) {
          setState({
            type: 'is-status-chosen',
            status_id: objToTCardDragData(source.data).action_id
          } as TColumnState)
        }
        else if (statusId === "") {
          setState({
            type: 'is-over',
          } as TColumnState)
        } else if (statusId !== "") {
          setState({
            type: 'is-status-over',
            startTime: Date.now(),
          } as TColumnState)
        }
        return;
      },
      onDrag({ source, self, location }) {
        // console.log("Drag in column")
        const proposed = {
          type: 'is-status-chosen',
          status_id: objToTCardDragData(source.data).status_id
        } as TColumnState;
        // console.log(location, self)

        setState((current) => {
          if ((current.type === 'is-status-chosen')) {
            return current;
          }
          if ((current.type === 'is-status-over') && (Date.now() - current.startTime <= 1000)) {
            console.log(current.type)
            return current;
          }
          if ((current.type === 'is-over')) {
            return current;
          }
          return proposed;
        });
      },
      onDropTargetChange({ source, location }) {
        console.log("onDropTargetChange", state)
        // setIsCardOver({ data: objToTCardDragData(source.data), location })
        // console.log("onDropTargetChange 2", state)
        return;
      },
      onDragLeave() {
        console.log("onDragLeave")
        setState(idle);
      },
      onDrop({ self }) {
        console.log("onDrop Column", self, "Status is", statusId)
        setState(idle);
      },
    })
  }, [statusId, state]);

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
      <Typography>{column.name}</Typography>
      <Divider orientation='horizontal' />
      <Stack
        ref={columnUseRef}
        direction='column'
        sx={{
          marginY: '8px',
          background: UIColor["tiny-gray"],
          height: "100%",
          ...(state.type === 'is-status-chosen' && {
            background: UIColor["tiny-primary"],
          })
        }}
      >
        <Box
          sx={{
            ...(((state.type !== 'is-status-over') && (state.type !== 'is-over')) && {
              display: 'none'
            })
          }}
        >
          {
            [...column.actionStatusesList].map((status: DTOActionStatus.AsObject) => (
              // <ActionStatus status={status} parentState={setStatusID} />
              <Box
                sx={{
                  p: 2,
                  border: '1px dashed grey',
                  ...(((state.type === 'is-status-over') && (statusId === status.id)) && {
                    background: UIColor["tiny-primary"],
                    border: '3px dashed grey',
                  })
                }}
                onDragEnter={() => { setStatusID(status.id); setState({ type: 'is-status-over', startTime: Date.now() }) }}
              // onDragLeave={() => { setStatusID(""); setState({ type: 'is-over' }) }}
              // onDragLeave={() => { alert(statusId) }}
              >
                {status.name}
              </Box>
            ))
          }
        </Box>
        <Box
          sx={{
            ...((state.type === 'is-status-over' || state.type === 'is-over') && {
              display: 'none'
            })
          }}
        >
          {
            [...column.actionsList].sort((a, b) => a.order - b.order).map((card: DTOAction.AsObject, i: number, array: DTOAction.AsObject[]) => (
              <ActionCard
                key={card.index}
                card={card}
                prevRank={array[i - 1] ? array[i - 1].order : card.order - 65536}
                nextRank={array[i + 1] ? array[i + 1].order : card.order + 65536}
              />
            ))
          }
        </Box>
        {
          //&& state.closestEdge === 'bottom'
          // (state.type === 'is-card-over') && (!state.isOverChildCard) ? (
          //   <CardShadow cardSpacing='8px' />
          // ) : null
        }
      </Stack>
    </Stack>
  )
}