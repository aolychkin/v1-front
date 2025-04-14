import { useEffect } from "react"
import { ActionBoard } from "../ui/board/board"
import { ActionCard } from "../ui/card/card"
import { ActionColumn } from "../ui/column/column"

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useBoardData } from "../api/hooks";


// TODO: отправлять ID свимлейнов (группировка) + их стейт. 
export const PageBoards = () => {
  return (
    <ActionBoard />
  )
}