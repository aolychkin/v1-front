import { AccordionGroup, Accordion, AccordionSummary, Typography, AccordionDetails, accordionDetailsClasses, accordionSummaryClasses, Stack, Box, Tooltip, Tab, TabList, Tabs, tabClasses, TabPanel, Avatar, Card, CardContent } from "@mui/joy"
import { CardFieldConfig } from "../field/card-field-config"
import { TFieldConfig } from "pages/boards/model";
import { useEffect, useState } from "react";
import { CaseSensitive, Settings, Text } from "lucide-react";
import { CardSlotInlineText } from "../field/inline-text";
import { CardSlotMultilineText } from "../field/multiline-text";


export const CardConfigEditorMode = (
  {
    item,
    fieldConfigs,
  }: {
    item: number;
    fieldConfigs: TFieldConfig[]
  }) => {
  const [hover, setHover] = useState(false);
  const [elemPosition, setElemPosition] = useState([0, 0, '#FFFFFF']);

  // var cellColor = '#FFFFFF'
  // useEffect(() => {
  //   if (item >= elemPosition[0] && item <= elemPosition[1]) {
  //     cellColor = '#FF0000'
  //   }
  //   console.log(cellColor)
  // }, [elemPosition])


  return (
    <Tooltip
      placement='bottom-start'
      variant="outlined"
      arrow
      title={
        <Tabs
          orientation='vertical'
          aria-label="tabs"
          defaultValue={fieldConfigs[0].name}
          sx={{
            bgcolor: 'transparent',
            flexDirection: 'row-reverse'
          }}
        >
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: 'xl',
              bgcolor: 'background.level1',
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: 'sm',
                bgcolor: 'background.surface',
              },
            }}
          >
            {
              fieldConfigs.map((config) => (
                // !config.fieldType.isCustom &&
                <Tab disableIndicator key={config.id} value={config.name} orientation='horizontal'>
                  <Avatar color='neutral' size='sm'>
                    {
                      config.fieldType && {
                        'text-inline': <CaseSensitive />,
                        'text-multiline': <Text />
                      }[config.fieldType.name] || <Settings />
                    }
                  </Avatar>
                  <Typography level="title-sm">{config.alias}</Typography>
                  {/* <Stack direction={'row'}>

                    <Typography level="body-xs">{config.fieldType ? config.fieldType.alias : "тип не найден"}</Typography>
                  </Stack> */}
                  {/* {config.alias} */}
                </Tab>
              ))
            }
            <Tab disableIndicator value="add">
              <Typography level="title-sm">+Create new field</Typography>
            </Tab>
          </TabList>
          {
            fieldConfigs.map((config) => (
              <TabPanel key={config.id} value={config.name}
                sx={{
                  width: "346px",
                  py: "8px"
                }}
              >
                <Card
                  sx={{
                    width: "314px",
                    py: "8px"
                  }}
                  size='md'
                  onMouseOver={() => setElemPosition([0, 12, '#FF0000'])}
                  onMouseLeave={() => setElemPosition([0, 12, '#FFFFFF'])}
                >
                  <CardContent>
                    {
                      config.fieldType && config.fieldType.availableSizes.map((size) => (
                        {
                          'text-inline': <CardSlotInlineText size={Number(size)} config={config} />,
                          'text-multiline': <CardSlotMultilineText size={Number(size)} config={config} />
                        }[config.fieldType.name] || <Settings />
                      ))
                    }
                  </CardContent>
                </Card>
              </TabPanel>
            ))
          }
          <TabPanel value="add"
            sx={{
              width: "314px",
              py: "8px"
            }}
          >
            Add new panel
          </TabPanel>

        </Tabs >
        // <AccordionGroup variant='plain' transition='0.2s ease'>
        //   <Accordion defaultExpanded>
        //     <AccordionSummary>
        //       <Typography level="body-sm">Системные поля</Typography>
        //     </AccordionSummary>
        //     <AccordionDetails>
        //       <AccordionGroup
        //         variant='plain'
        //         transition="0.2s"
        //         sx={{
        //           maxWidth: 400,
        //           borderRadius: 'md',
        //           [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
        //           {
        //             paddingBlock: '8px',
        //           },
        //           [`& .${accordionSummaryClasses.button}`]: {
        //             paddingBlock: '8px',
        //           },
        //         }}
        //       >
        //         {
        //           fieldConfigs.map((config) => (
        //             !config.fieldType.isCustom &&
        //             <CardFieldConfig
        //               key={config.id}
        //               config={config}
        //               type={config.fieldType}
        //             />
        //           ))
        //         }
        //       </AccordionGroup>
        //     </AccordionDetails>
        //   </Accordion>
        //   <Accordion defaultExpanded>
        //     <AccordionSummary>
        //       <Typography level="body-sm">Пользовательские поля</Typography>
        //     </AccordionSummary>
        //     <AccordionDetails>
        //       <Stack spacing={2}>
        //       </Stack>
        //     </AccordionDetails>
        //   </Accordion>
        // </AccordionGroup>
      }
      disableFocusListener={true}
    >
      <Box
        sx={{
          height: "22px",
          width: "22px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(hover
            ? {
              backgroundColor: '#008000',
            }
            : {
              border: '1px dashed green',
              backgroundColor: elemPosition[2],
            })
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography
          level='body-xs'
          sx={{
            ...(hover
              ? {
                color: '#FFFFFF'
              }
              : {
                color: '#000000',
              })
          }}>
          {item + 1}
        </Typography>
      </Box >
    </Tooltip >
  )
}