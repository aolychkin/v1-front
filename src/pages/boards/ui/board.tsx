import { Stack } from "@mui/joy"
import { TBoard, TCard, TColumn, objToTCard, objToTColumn } from "../model/types";
import { ActionColumn } from "./column";
import { getMockData } from "../model/mocks";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useState } from "react";
import { addCardInColumnBottom, reorderCardsWithEdge } from "../lib/reorder";
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

//TODO: сделать настройку кастомную карточек и ее полей, настройку колонок + группировки
//TODO BUG: если тянуть карточку за граница экрана (на вкладки браузера), то появляется ошибка
//TODO: улучшить дизайн. Закрепить ширину колонок

//TODO: Добавить возможность сохранить конфигурациюдоски / капточки / проекта, как шаблон
// > (типовой проект с оргструктурой, например, фронт, бек, QA + встречи по проекту можно ставить в календарь, 
// > ставить базовые настройки досок и карточек, задачи при создании проекта с переменными, которые указываются при создании)
export const ActionBoard = () => {
  const [data, setData] = useState(getMockData());

  useEffect(() => {
    return monitorForElements({
      // onDragStart: () => console.log('I am called whenever any element drag starts'),
      onDrop: ({ source, location }) => {
        const currentItem = source.data.card
        const currentCard = objToTCard(currentItem)

        const targetItem = location.current.dropTargets[0]
        if (!targetItem) { //Хз, когда срабатывает
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
          if (currentCard.columnID === targetCard.columnID) {
            if ((extractClosestEdge(targetItem.data) === 'top') && (currentCard.order - targetCard.order === -1)) {
              return
            }
            if ((extractClosestEdge(targetItem.data) === 'bottom') && (currentCard.order - targetCard.order === 1)) {
              return
            }
          }
          // Пересортировка списка карточек
          const reordered = reorderCardsWithEdge({
            board: data,
            currentCard: currentCard,
            targetCard: targetCard,
            edge: extractClosestEdge(targetItem.data),
          })
          // console.log(reordered)
          setData({ ...data, cards: reordered })
        } else {
          const targetColumn = objToTColumn(targetItem.data)
          const reordered = addCardInColumnBottom({
            board: data,
            currentCard: currentCard,
            targetColumn: targetColumn
          })
          setData({ ...data, cards: reordered })
        }
      }
    });
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      {
        data.columns.map((col: TColumn) => (
          <ActionColumn key={col.id} column={col} cards={data.cards.filter((item: TCard) => item.columnID === col.id).sort((a, b) => a.order - b.order)} />
        ))
      }
    </Stack>
  )
}