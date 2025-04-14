import { useEffect } from "react"
import { ActionBoard } from "../ui/board"
import { ActionCard } from "../ui/action-card"
import { ActionColumn } from "../ui/column"

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useBoardData } from "../api/hooks";


// TODO: отправлять ID свимлейнов (группировка) + их стейт. 
export const PageBoards = () => {
  return (
    <ActionBoard />
  )
}