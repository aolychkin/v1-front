import { useEffect } from "react"
import { mockData } from "../mocks"
import { ActionBoard } from "../ui/board"
import { ActionCard } from "../ui/card"
import { ActionColumn } from "../ui/column"

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';


// TODO: отправлять ID свимлейнов (группировка) + их стейт. 
export const PageBoards = () => {
  let data = mockData
  useEffect(() => {
    return monitorForElements({
      onDragStart: () => console.log('I am called whenever any element drag starts'),
    });
  }, []);

  return (
    <ActionBoard data={data} />
  )
}