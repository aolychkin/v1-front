import { Sheet, AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Card, CardContent, accordionDetailsClasses, accordionSummaryClasses } from "@mui/joy"
import { UIBorderRadius } from "shared/ui/styles"
import { CardFieldConfig } from "../card/field/card-field-config"
import { TFieldConfig } from "pages/boards/model"

export const FieldTooltip = (
  {
    fieldConfigs,
  }: {
    fieldConfigs: TFieldConfig[]
  }
) => {
  return (
    <Sheet variant='soft' sx={{ width: '372px', borderRadius: UIBorderRadius['primary'] }}>
      <AccordionGroup variant='outlined' transition='0.2s ease'>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography level="body-sm">Разметка</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              <Card size="sm">
                <CardContent orientation='horizontal'>
                  <Card variant='solid' sx={{ width: '100%' }}></Card>
                </CardContent>
              </Card>
              <Stack justifyContent='space-between' direction='row'>
                <Card size="sm" sx={{ width: '153px' }}>
                  <CardContent orientation='horizontal'>
                    <Card variant='solid' sx={{ width: '100%' }}></Card>
                  </CardContent>
                </Card>
                <Card size="sm" sx={{ width: '100px' }}>
                  <CardContent orientation='horizontal'>
                    <Card variant='solid' sx={{ width: '100%' }}></Card>
                  </CardContent>
                </Card>
                <Card size="sm" sx={{ width: '56px' }}>
                  <CardContent orientation='horizontal'>
                    <Card variant='solid' sx={{ width: '100%' }}></Card>
                  </CardContent>
                </Card>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography level="body-sm">Системные поля</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionGroup
              variant='plain'
              transition="0.2s"
              sx={{
                maxWidth: 400,
                borderRadius: 'md',
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                {
                  paddingBlock: '8px',
                },
                [`& .${accordionSummaryClasses.button}`]: {
                  paddingBlock: '8px',
                },
              }}
            >
              {
                fieldConfigs.map((config) => (
                  !config.fieldType.isCustom &&
                  <CardFieldConfig
                    key={config.id}
                    config={config}
                    type={config.fieldType}
                  />
                ))
              }
            </AccordionGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography level="body-sm">Пользовательские поля</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Sheet>
  )
}