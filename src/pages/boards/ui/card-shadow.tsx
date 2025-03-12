import Box from "@mui/joy/Box"

export const CardShadow = ({ cardSpacing }: { cardSpacing: string }) => {
  return (
    <Box sx={{ height: "60px", background: "#878787", borderRadius: "8px", marginY: cardSpacing }} />
  )
}