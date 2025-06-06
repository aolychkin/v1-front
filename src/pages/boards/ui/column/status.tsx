// import { Dispatch, SetStateAction, useEffect, useRef } from "react";
// import { ActionCard } from "../card/card"
// import { Box, Divider, Stack, Typography } from "@mui/joy"

// import {
//   type Edge,
//   attachClosestEdge,
//   extractClosestEdge,
// } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
// import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
// import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
// import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

// import { useState, RefObject } from "react";
// import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
// import invariant from "tiny-invariant";
// import { createPortal } from "react-dom";
// import { CardShadow } from "../card/card-shadow";
// import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";
// import { UIBorderRadius, UIColor } from "shared/ui/styles";
// import { TCardDragData, TColumnDragData, TColumnState, TStatusDragData, objToTCardDragData } from "pages/boards/model/types/action";
// import { TAction, TColumn } from "pages/boards/model/types/board";
// import { DTOAction, DTOActionStatus, DTOColumn } from "pages/boards/model/protos/board/board_pb";

// const idle: TColumnState = { type: 'status-idle' }

// //TODO: вся колонка может быть таргетом перетаскивания
// //TODO: Перенести пемещения сюда, тк спейсингом тоже нужно будет управлять
// export const ActionStatus = (
//   {
//     status,
//     parentState,
//   }: {
//     status: DTOActionStatus.AsObject;
//     parentState: Dispatch<SetStateAction<string>>;
//   }
// ) => {
//   const [statusState, setStatusState] = useState<TColumnState>(idle);
//   const statusUseRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const statusRef = statusUseRef.current;
//     invariant(statusRef);

//     // function setIsCardOver({ data, location }: { data: TCardDragData; location: DragLocationHistory }) {
//     //   const innerMost = location.current.dropTargets[0];
//     //   // console.log('innerMost', innerMost)
//     //   //Есть целью является конкретная карточка, а не колонка в целом
//     //   const isOverChildCard = Boolean(innerMost && innerMost.data.type === 'card');

//     //   const proposed: TColumnState = {
//     //     type: 'is-card-over',
//     //     isOverChildCard,
//     //     startTime: Date.now(),
//     //   };
//     //   // optimization - don't update state if we don't need to.
//     //   setState((current) => {
//     //     if ((current.type === 'is-card-over') && (current.isOverChildCard === isOverChildCard)) {
//     //       return current;
//     //     }
//     //     return proposed;
//     //   });
//     // }

//     var statusDragData = {
//       status_id: status.id,
//     } as TStatusDragData

//     dropTargetForElements({
//       element: statusRef,
//       getIsSticky: () => true,
//       getData: ({ element, input }) => {
//         const data = { statusDragData, type: "column" }
//         return attachClosestEdge(data, { element, input, allowedEdges: ['top', 'bottom'] });
//       },
//       onDragEnter({ source, location }) {
//         console.log("STATUS", "onDragEnter")
//         setStatusState({ type: 'is-status-over', startTime: Date.now() });
//         console.log("STATUS", "onDragEnter", statusState.type)
//       },
//       onDrag({ source, self }) {
//         // if (statusState.type === 'is-status-chosen') {
//         //   return
//         // }
//         // setStatusState((current) => {
//         //   if (current.type === 'is-status-over') {
//         //     if (Date.now() - current.startTime <= 1200) {
//         //       return current;
//         //     } else {
//         //       return ({
//         //         type: 'is-status-chosen',
//         //         status_id: status.id
//         //       } as TColumnState);
//         //     }
//         //   }
//         console.log("STATIS ASD ASD", status.id, statusState)

//         if ((statusState.type === 'is-status-over') && (Date.now() - statusState.startTime >= 1200)) {
//           setStatusState({ type: 'is-status-chosen', status_id: status.id });
//         };
//       },
//       onDragLeave() {
//         setStatusState(idle);
//       },
//       // onDrop() {
//       //   setStatusState(idle);
//       // },
//     })
//   }, []);
//   return (
//     <Box
//       sx={{
//         p: 2,
//         border: '1px dashed grey',
//         ...(statusState.type === 'is-status-over' && {
//           background: UIColor["tiny-primary"],
//           border: '3px dashed grey',
//         })
//       }}
//       ref={statusUseRef}
//     >
//       {status.name}
//     </Box>
//   )
// }