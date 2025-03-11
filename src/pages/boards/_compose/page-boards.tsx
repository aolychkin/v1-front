import { useEffect } from "react"
import { ActionBoard } from "../ui/board"
import { ActionCard } from "../ui/card"
import { ActionColumn } from "../ui/column"

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';


// TODO: отправлять ID свимлейнов (группировка) + их стейт. 
export const PageBoards = () => {

  return (
    <ActionBoard />
  )
}