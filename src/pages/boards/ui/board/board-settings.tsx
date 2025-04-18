import { Stack, IconButton, Typography, Tabs, TabList, Tab, ListItemDecorator, TabPanel, Sheet, Card, AccordionGroup, Accordion, AccordionSummary, AccordionDetails, CardContent, Avatar, ListItemContent, accordionSummaryClasses, accordionDetailsClasses, Box } from "@mui/joy"
import { Settings, SquareKanban, Columns3, RectangleHorizontal, List, Text, Save } from "lucide-react"
import { UIBorderRadius } from "shared/ui/styles"
import { TFieldConfig } from "pages/boards/model"
import { CardFieldConfig } from "../card/field/card-field-config"
import { ActionBoard } from "./cell"
import { FieldTooltip } from "./field-tooltip"

export const BoardSetting = (
  {
    fieldConfigs,
  }: {
    fieldConfigs: TFieldConfig[]
  }
) => {
  return (
    <Stack direction='column' spacing={2}>
      <Stack direction='row' spacing={2}>
        <IconButton>
          <Settings />
        </IconButton>
      </Stack>
      <Stack direction='column' spacing={2}>
        <Stack direction='row'>
          <Typography level='title-lg'>Настройки доски</Typography>
          {/* <Save />
          <SaveOff /> */}
        </Stack>
        <Tabs aria-label="Icon tabs" orientation='horizontal' defaultValue={2} sx={{ borderRadius: UIBorderRadius["primary"] }}>
          <TabList>
            <Tab value={0}>
              <ListItemDecorator>
                <SquareKanban size={24} />
              </ListItemDecorator>
              <Typography level="title-sm">Общее</Typography>
            </Tab>
            <Tab value={1}>
              <ListItemDecorator>
                <Columns3 size={24} />
              </ListItemDecorator>
              <Typography level="title-sm">Колонки</Typography>
            </Tab>
            <Tab value={2}>
              <ListItemDecorator>
                <RectangleHorizontal size={24} />
              </ListItemDecorator>
              <Typography level="title-sm">Карточки</Typography>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            IndicatorPlacement <b>Top</b>
          </TabPanel>
          <TabPanel value={1}>
            IndicatorPlacement <b>Right</b>
          </TabPanel>
          <TabPanel value={2}>
            <Stack direction='row' spacing={2}>
              <Sheet variant='plain'>
                <Card sx={{ margin: '8px', width: '314px' }} size="md">
                  <CardContent>
                    <Stack direction='row' justifyContent='space-between'>
                      {
                        Array.from(Array(12).keys()).map((item: number) => (
                          <ActionBoard item={item} fieldConfigs={fieldConfigs} />
                        ))
                      }
                    </Stack>
                  </CardContent>
                  {/* <ActionCardContent isConstruct fields={data.fields} /> */}
                </Card>
              </Sheet>
              {/* TODO: где-то должно и глобально управляться, отображаться все доступные шаблоны */}
              {/* TODO: сделать разделение по категориям сворачиваемым + индикатор используемости в чипе (0/4).
                  Каждое поле отображается карточкой: Название поля, под ним мельче тип и допустимые значения (посмотреть, как управляются типы у аналогов)
                  - общая инфа
                  - мета данные
                  - поля обязательные
                  - кастомные поля */}
              <FieldTooltip fieldConfigs={fieldConfigs} />
            </Stack>
          </TabPanel>
        </Tabs>
      </Stack>
    </Stack>
  )
}


{/* <Stack spacing={1}>

<Card size="sm">
  <CardContent orientation='horizontal'>
    <Avatar color="success">
      <Text />
    </Avatar>
    <Stack direction='column'>
      <Typography level="title-sm">Название задачи</Typography>
      <Typography level="body-xs">Текст: "любой"</Typography>
    </Stack>
  </CardContent>
</Card>
<Card size="sm">
  <CardContent orientation='horizontal'>
    <Avatar color="success">
      <List />
    </Avatar>
    <Stack direction='column'>
      <Typography level="title-sm">Notifications</Typography>
      <Typography level="body-xs">Enable or disable your notifications</Typography>
    </Stack>
  </CardContent>
</Card>
</Stack> */}