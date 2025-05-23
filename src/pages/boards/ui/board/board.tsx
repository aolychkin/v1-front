import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Avatar, Button, Card, CardContent, ListItem, ListItemContent, ListItemDecorator, Sheet, Skeleton, Stack, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import { TBoard, TCard, TColumn, TFieldConfig } from "pages/boards/model";
import { ActionColumn } from "../column/column";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useState } from "react";
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import IconButton from '@mui/joy/IconButton'
import { Columns3, List, RectangleHorizontal, Save, Text, SaveOff, Settings, SquareKanban } from "lucide-react";
import { UIBorderRadius } from "shared/ui/styles";
// import { BoardSetting } from "./board-settings";
import { useReorderCards, useBoardData, useCardsData } from "../../api/hooks";
import { mapTBoard, objToTCard, objToTColumn } from "pages/boards/lib";
import { useGetCardsQuery } from "pages/boards/api/api";
import { reorderCardsWithEdge, addCardInColumnBottom } from "pages/boards/lib/reorder";
import { objToTCardMeta } from "pages/boards/lib/transform/models/from-obj";
import { BoardSetting } from "./board-settings";

//TODO: сделать настройку кастомную карточек и ее полей, настройку колонок + группировки
//TODO BUG: если тянуть карточку за граница экрана (на вкладки браузера), то появляется ошибка
//TODO: улучшить дизайн. Закрепить ширину колонок

//TODO: Добавить возможность сохранить конфигурациюдоски / капточки / проекта, как шаблон
// > (типовой проект с оргструктурой, например, фронт, бек, QA + встречи по проекту можно ставить в календарь, 
// > ставить базовые настройки досок и карточек, задачи при создании проекта с переменными, которые указываются при создании)

type ReorderModel = {
  cardId: string;
  newCardRank: number;
  columnId: string;
}

export const ActionBoard = () => {
  const [boardData, setBoardData] = useState({} as TBoard);
  const board = useBoardData()

  const [cardsData, setCardsData] = useState({} as TCard[]);
  const [fieldsConfigData, setFieldsConfigData] = useState({} as TFieldConfig[]);
  const {
    cards,
    fieldsConfig,
    isFetching: isFetchingCards,
    isLoading: isLoadingCards,
    isError: isErrorCards,
    error: errorCards
  } = useCardsData()

  useEffect(() => {
    cards && setCardsData(cards)
    fieldsConfig && setFieldsConfigData(fieldsConfig)
    // console.log("start")
    // console.log(fieldsConfig)
    // console.log(fieldsConfigData)
    // console.log("end")
    board.board && setBoardData(board.board)
  }, [isFetchingCards, board.isFetching])


  const [reorderData, setReorderData] = useState({} as ReorderModel);
  const newCards = useReorderCards({
    card_id: reorderData.cardId,
    new_rank: reorderData.newCardRank,
    column_id: reorderData.columnId,
  })
  useEffect(() => {
    // console.log("newCards", newCards);
    newCards.cardsData && setCardsData(newCards.cardsData)
  }, [newCards.isFetching])


  // useEffect(() => {
  //   console.log("reorderData", reorderData);
  // }, [reorderData])

  // useEffect(() => {
  //   console.log("cardsData", cardsData, cards.cards);
  // }, [cardsData])

  useEffect(() => {
    console.log("fieldsConfig", fieldsConfigData, fieldsConfig);
  }, [fieldsConfigData])

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
      // onDragStart: () => console.log('I am called whenever any element drag starts'),
      onDrop: ({ source, location }) => {
        const currentItem = source.data.card
        const currentCard = objToTCard(currentItem)
        const targetItem = location.current.dropTargets[0]

        //Срабатывает, когда карточку выносят за рамки браузера (отслеживаемой созны)
        if (!targetItem) {
          console.log("no targetItem in func ActionBoard()")
          return
        }

        if (targetItem.data.type === 'card') {
          const targetCard = objToTCard(targetItem.data)
          const cardRanking = objToTCardMeta(targetItem.data)
          // Если перетащил карточку на то же место, в себя же
          if (currentCard.id === targetCard.id) {
            return
          }
          // Если перетащил карточку на то же место, но не в себя
          if (currentCard.stepId === targetCard.stepId) {
            if ((extractClosestEdge(targetItem.data) === 'top') && (currentCard.order - targetCard.order === -1)) {
              return
            }
            if ((extractClosestEdge(targetItem.data) === 'bottom') && (currentCard.order - targetCard.order === 1)) {
              return
            }
          }

          setReorderData({
            cardId: currentCard.id,
            newCardRank: extractClosestEdge(targetItem.data) === 'top'
              ? (targetCard.order + cardRanking.prevRank) / 2
              : (targetCard.order + cardRanking.nextRank) / 2,
            columnId: targetCard.columnId === currentCard.columnId ? "" : targetCard.columnId,
          } as ReorderModel)

        } else if (targetItem.data.type === 'column') {
          // console.log("_____________________")
          // console.log("cardsData", Math.max(...Object.values(cardsData).map(o => o.order)))
          // console.log("cardsData", Object.values(cardsData))
          // console.log("cardsData", cardsData)
          // console.log("__")
          const newRank = extractClosestEdge(targetItem.data) === 'top'
            ? Math.min(...Object.values(cardsData).filter((item: TCard) => ((item.columnId === targetItem.data.id) && (item.id != currentCard.id))).map(o => o.order)) - 65536
            : Math.max(...Object.values(cardsData).filter((item: TCard) => ((item.columnId === targetItem.data.id) && (item.id != currentCard.id))).map(o => o.order)) + 65536
          // const newRank = Math.max(...Object.values(cardsData).filter((item: TCard) => ((item.columnId === targetItem.data.id) && (item.id != currentCard.id))).map(o => o.order)) + 65536
          setReorderData({
            cardId: currentCard.id,
            newCardRank: (newRank !== -Infinity && newRank !== +Infinity) ? newRank : extractClosestEdge(targetItem.data) === 'top' ? 0 : 65536,
            columnId: targetItem.data.id === currentCard.columnId ? "" : targetItem.data.id,
          } as ReorderModel)
        } else {
          console.log("Target is not Card or Column in func ActionBoard()")
          return
        }
      }
    });
  }, [cardsData]);

  //TODO: техдолг: реализовать DTO маппинг (upd: что бы это ни значило)
  return (
    <Stack direction='column' spacing={2} sx={{ marginX: '16px' }}>

      {
        fieldsConfigData[0] && fieldsConfigData[0].id &&
        <BoardSetting card={cardsData[0]} fieldConfigs={fieldsConfigData} />
      }
      <Stack direction='row' spacing={2}>
        {
          boardData && boardData.columns && cardsData ?
            boardData.columns.map((col: TColumn) => (
              <ActionColumn
                key={col.id}
                column={col}
                cards={cardsData.filter((item: TCard) => item.columnId === col.id).sort((a, b) => a.order - b.order)}
                fieldConfigs={fieldsConfigData}
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