import Box from "@mui/joy/Box"
import { UIColor } from "shared/ui/styles"

export const CardShadow = ({ cardSpacing }: { cardSpacing: string }) => {
  return (
    <Box sx={{ height: "60px", background: UIColor["primary"], opacity: '0.6', borderRadius: "8px", marginY: cardSpacing }} />
  )
}