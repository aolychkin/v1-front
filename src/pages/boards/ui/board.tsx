import { Stack } from "@mui/joy"
import { ReactNode } from "react"
import { TBoard } from "../types";
import { ActionColumn } from "./column";

export const ActionBoard = ({ data }: { data: TBoard }) => {
  return (
    <Stack direction="row" spacing={2}>
      {
        data.columns.map((col) => (
          <ActionColumn data={col} />
        ))
      }
    </Stack>
  )
}