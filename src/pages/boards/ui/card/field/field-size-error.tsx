import { Tooltip, IconButton } from "@mui/joy"
import { TriangleAlert } from "lucide-react"

export const FieldSizeError = () => {
  return (
    <Tooltip title="Ошибка ширины слота">
      <IconButton>
        <TriangleAlert />
      </IconButton>
    </Tooltip>
  )
}