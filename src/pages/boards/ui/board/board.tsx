import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Avatar, Button, Card, CardContent, ListItem, ListItemContent, ListItemDecorator, Sheet, Skeleton, Stack, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import { ActionColumn } from "../column/column";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useState } from "react";
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import IconButton from '@mui/joy/IconButton'
import { Columns3, List, RectangleHorizontal, Save, Text, SaveOff, Settings, SquareKanban } from "lucide-react";
import { UIBorderRadius } from "shared/ui/styles";
// import { BoardSetting } from "./board-settings";
import { useGetBoard, useUpdateActionBoardOrdering } from "../../api/hooks";
// import { BoardSetting } from "./board-settings";
import { TAction, TBoard, TColumn } from "pages/boards/model/types/board";
import { DTOAction, DTOBoard, DTOColumn } from "pages/boards/model/protos/board/board_pb";
import { objToTCardDragData, objToTColumnDragData } from "pages/boards/model/types/action";
import { useDispatch } from "react-redux";
import { useGetBoardQuery } from "pages/boards/api";

//TODO: сделать настройку кастомную карточек и ее полей, настройку колонок + группировки
//TODO BUG: если тянуть карточку за граница экрана (на вкладки браузера), то появляется ошибка
//TODO: улучшить дизайн. Закрепить ширину колонок

//TODO: Добавить возможность сохранить конфигурациюдоски / капточки / проекта, как шаблон
// > (типовой проект с оргструктурой, например, фронт, бек, QA + встречи по проекту можно ставить в календарь, 
// > ставить базовые настройки досок и карточек, задачи при создании проекта с переменными, которые указываются при создании)

type ReorderModel = {
  actionId: string;
  newRankValue: number;
  statusId: string;
  columnId: string;
}

export const ActionBoard = () => {
  const [boardData, setBoardData] = useState({} as DTOBoard.AsObject);
  var data = useGetBoard()

  useEffect(() => {
    data.board && setBoardData(data.board)
    console.log(data.board)
  }, [data.isFetching])

  const [reorderData, setReorderData] = useState({} as ReorderModel);

  const reorderedBoard = useUpdateActionBoardOrdering({
    action_id: reorderData.actionId,
    new_rank: reorderData.newRankValue,
    status_id: reorderData.statusId,
    column_id: reorderData.columnId,
  })
  useEffect(() => {
    console.log("Запрос отправлен", reorderData, reorderedBoard)
    reorderedBoard.board && setBoardData(reorderedBoard.board)
  }, [reorderedBoard.isFetching])

  // useEffect(() => {
  //   reorderedBoard = useUpdateActionBoardOrdering({ action_id: reorderData.actionId, new_rank: reorderData.newRankValue, status_id: reorderData.statusId })
  //   reorderedBoard.board && setBoardData(reorderedBoard.board)
  // }, [reorderData])

  // const newCards = useReorderCards({
  //   card_id: reorderData.cardId,
  //   new_rank: reorderData.newCardRank,
  //   column_id: reorderData.columnId,
  // })
  // useEffect(() => {
  //   // console.log("newCards", newCards);
  //   newCards.cardsData && setCardsData(newCards.cardsData)
  // }, [newCards.isFetching])


  // useEffect(() => {
  //   console.log("reorderData", reorderData);
  // }, [reorderData])

  // useEffect(() => {
  //   console.log("cardsData", cardsData, cards.cards);
  // }, [cardsData])

  // useEffect(() => {
  //   console.log("fieldsConfig", fieldsConfigData, fieldsConfig);
  // }, [fieldsConfigData])

  // useEffect(() => {
  //   console.log("boardData", boardData, board.board);
  // }, [boardData])

  // useEffect(() => {
  //   newCards.cardsData && setReorderData(cards.cards)
  //   if (cards.cards) {
  //     console.log("NEW _____ CARDS")
  //   }
  // }, [newCards.isFetching])

  // if (!isLoadingBoard) {
  //   setBoardData(board)
  //   setFieldsConfigData(fieldsConfig)
  // }

  // if (!isLoadingCards) {
  //   setCardsData(cards)
  // }

  useEffect(() => {
    return monitorForElements({
      // canMonitor: ({ source }) => source.data.type === 'card',
      onDragStart: () => console.log('I am called whenever any element drag starts'),
      onDrop: ({ source, location }) => {
        console.log("_____________________1")
        const currentCard = objToTCardDragData(source.data)
        const targetItem = location.current.dropTargets[0]

        //Срабатывает, когда карточку выносят за рамки браузера (отслеживаемой зоны)
        if (!targetItem) {
          console.log("no targetItem in func ActionBoard()")
          return
        }

        if (targetItem.data.type === 'card') {
          console.log("_____________________")
          const targetCard = objToTCardDragData(targetItem.data)
          // Если перетащил карточку на то же место, в себя же
          if (currentCard.action_id === targetCard.action_id) {
            return
          }
          // Если перетащил карточку на то же место, но не в себя
          if (currentCard.column_id === targetCard.column_id) {
            if ((extractClosestEdge(targetItem.data) === 'top') && (currentCard.order - targetCard.order < 0)) {
              return
            }
            if ((extractClosestEdge(targetItem.data) === 'bottom') && (currentCard.order - targetCard.order > 0)) {
              return
            }
          }

          var reorder_data = {
            actionId: currentCard.action_id,
            newRankValue: extractClosestEdge(targetItem.data) === 'top'
              ? (targetCard.order + targetCard.prev_rank) / 2
              : (targetCard.order + targetCard.next_rank) / 2,
            statusId: targetCard.column_id === currentCard.column_id ? "" : location.current.dropTargets[1].data.target_status_id,
            columnId: targetCard.column_id,
          } as ReorderModel

          setReorderData(reorder_data)
          console.log("setReorderData", reorderData, location.current.dropTargets[1].data.target_status_id)
          console.log("Targets", targetItem, targetItem, currentCard, reorder_data)
          //useUpdateActionBoardOrdering

        } else if (targetItem.data.type === 'column') {
          console.log("_____________25________")
          // console.log("cardsData", Math.max(...Object.values(cardsData).map(o => o.order)))
          // console.log("cardsData", Object.values(cardsData))
          // console.log("cardsData", cardsData)
          // console.log("__")
          var targetColumn = objToTColumnDragData(targetItem.data)
          const newRank = extractClosestEdge(targetItem.data) === 'top'
            ? Math.min(...Object.values(targetColumn.actions).filter((item: DTOAction.AsObject) => ((item.id != currentCard.action_id))).map(o => o.order)) - 65536
            : Math.max(...Object.values(targetColumn.actions).filter((item: DTOAction.AsObject) => ((item.id != currentCard.action_id))).map(o => o.order)) + 65536
          // : Math.max(...Object.values(cardsData).filter((item: TCard) => ((item.columnId === targetItem.data.id) && (item.id != currentCard.id))).map(o => o.order)) + 65536

          // ? Math.min(...Object.values(boardData.columnsList).
          //   filter((column: DTOColumn.AsObject) => ((column.id === targetItem.data.id) && (column.id != currentCard.column_id))).
          //   map((column: DTOColumn.AsObject) => column.actionsList.
          //     filter((action: DTOAction.AsObject) => ((action.columnId === targetItem.data.id) && (action.id != currentCard.action_id))).
          //     map(o => o.order))) - 65536
          // const newRank = Math.max(...Object.values(cardsData).filter((item: TCard) => ((item.columnId === targetItem.data.id) && (item.id != currentCard.id))).map(o => o.order)) + 65536
          setReorderData({
            actionId: currentCard.action_id,
            newRankValue: (newRank !== -Infinity && newRank !== +Infinity) ? newRank : extractClosestEdge(targetItem.data) === 'top' ? 0 : 65536,
            statusId: targetColumn.column_id === currentCard.column_id ? "" : targetColumn.column_id,
            columnId: targetColumn.column_id,
          } as ReorderModel) //TODO: однозначно определить targetItem.data.id !!! ДАЛЬШЕ НЕ ДВИГУСЬ ИНАЧЕ + сделать интерфейс напоминашек (как в обсидиане). нопка круглая снизу с уведомлялкой и туда все задачи с сроком
          console.log("setReorderData COLUMN", reorderData)
        } else {
          console.log("Target is not Card or Column in func ActionBoard()")
          return
        }
      }
    });
  }, [boardData]);

  //TODO: техдолг: реализовать DTO маппинг (upd: что бы это ни значило)
  return (
    <Stack direction='column' spacing={2} sx={{ marginX: '16px' }}>
      {/* {
        fieldsConfigData[0] && fieldsConfigData[0].id &&
        <BoardSetting card={cardsData[0]} cardConfigs={boardData.cardConfigs} fieldConfigs={fieldsConfigData} />
      } */}
      <Stack direction='row' spacing={2}>
        {
          boardData.columnsList ?
            [...boardData.columnsList].sort((a, b) => a.order - b.order).map((col: DTOColumn.AsObject) => (
              <ActionColumn
                key={col.id}
                column={col}
              />
            ))
            : (
              <>"Sorry"</>
            )
        }
        {/* cards={data.filter((item: TCard) => item.columnId === col.id).sort((a, b) => a.meta.order - b.meta.order)}  */}
      </Stack>
    </Stack>
  )
}