import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Avatar, Card, CardContent, ListItem, ListItemContent, ListItemDecorator, Sheet, Stack, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import { TBoard, TCard, TColumn } from "pages/boards/model";
import { ActionColumn } from "../column/column";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useState } from "react";
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import IconButton from '@mui/joy/IconButton'
import { Columns3, List, RectangleHorizontal, Save, Text, SaveOff, Settings, SquareKanban } from "lucide-react";
import { UIBorderRadius } from "shared/ui/styles";
// import { BoardSetting } from "./board-settings";
import { useBoardData, useCardsData } from "../../api/hooks";
import { mapTBoard, objToTCard, objToTColumn } from "pages/boards/lib";
import { useGetCardsQuery } from "pages/boards/api/api";
import { reorderCardsWithEdge, addCardInColumnBottom } from "pages/boards/lib/reorder";

//TODO: сделать настройку кастомную карточек и ее полей, настройку колонок + группировки
//TODO BUG: если тянуть карточку за граница экрана (на вкладки браузера), то появляется ошибка
//TODO: улучшить дизайн. Закрепить ширину колонок

//TODO: Добавить возможность сохранить конфигурациюдоски / капточки / проекта, как шаблон
// > (типовой проект с оргструктурой, например, фронт, бек, QA + встречи по проекту можно ставить в календарь, 
// > ставить базовые настройки досок и карточек, задачи при создании проекта с переменными, которые указываются при создании)

export const ActionBoard = () => {
  //TODO: внедрить Redux
  const { board: boardData, isFetching: isFetchingBoard } = useBoardData()
  const { cardsData, fieldsConfigData, isFetching: isFetchingCards } = useCardsData()
  console.log(boardData, isFetchingBoard)
  console.log(cardsData, fieldsConfigData, isFetchingCards)

  const [data, setData] = useState({ boardData, cardsData, fieldsConfigData });

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
          // Пересортировка списка карточек
          const reordered = reorderCardsWithEdge({
            cardsData: data.cardsData,
            currentCard: currentCard,
            targetCard: targetCard,
            edge: extractClosestEdge(targetItem.data),
          })
          setData({ ...data, cardsData: reordered })
        } else if (targetItem.data.type === 'column') {
          const targetColumn = objToTColumn(targetItem.data)
          const reordered = addCardInColumnBottom({
            cardsData: data.cardsData,
            currentCard: currentCard,
            targetColumn: targetColumn
          })
          setData({ ...data, cardsData: reordered })
        } else {
          console.log("Target is not Card or Column in func ActionBoard()")
        }
      }
    });
  }, []);

  // const [data, setData] = useState(dto_board && dto_board.board ? mapTBoard(dto_board.board) : {} as TBoard);

  //TODO: техдолг: реализовать DTO маппинг
  return (
    <Stack direction='column' spacing={2} sx={{ marginX: '16px' }}>
      {/* <BoardSetting /> */}
      <Stack direction='row' spacing={2}>
        {
          boardData && cardsData &&
          boardData.columns.map((col: TColumn) => (
            <ActionColumn
              key={col.id}
              column={col}
              cards={cardsData.filter((item: TCard) => item.columnId === col.id).sort((a, b) => a.order - b.order)}
            />
          ))
        }
        {/* cards={data.filter((item: TCard) => item.columnId === col.id).sort((a, b) => a.meta.order - b.meta.order)}  */}
      </Stack>
    </Stack>
  )
}