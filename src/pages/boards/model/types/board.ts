export type TBoard = {
  id: string
  name: string
  description: string
  columns: TColumn[]
}

export type TColumn = {
  id: string
  name: string
  description: string
  order: number
  action_statuses: TActionStatus[]
  actions: TAction[]
  // repeated TCard on_board_action = 4;
}

export type TActionStatus = {
  id: string
  name: string
  description: string
  // Child entity: ActionStatusType
  type_key: string
  type_name: string
  type_description: string
}

export type TAction = {
  order: number
  id: string
  index: number
  status: TActionStatus
  type: TActionType
  fields_value: TActionFieldValue[]
}

export type TActionFieldValue = {
  action_field: TActionField
  value: string
}

export type TActionType = {
  name: string
  description: string
  icon: string
  templates: TActionTemplate[]
}

export type TActionTemplate = {
  name: string
  description: string
  configs: TActionConfig[]
}

export type TActionConfig = {
  id: string
  default_value: string
  demo_value: string
  is_required: boolean
  use_type: UseType
  action_field: TActionField
  card_views: TCardView[]
}

export type TCardView = {
  row: number
  order: number
  variant: number
  // Child entity: CardViewStatus
  status_name: string
  status_description: string
  status_color_HEX: string
}

export type TActionField = {
  id: string
  key: string
  name: string
  description: string
  // Child entity: ActionDataType
  type_key: string
  type_name: string
}

export enum UseType {
  UNKNOWN = 0,
  CONSTRUCT = 2,
  TECH = 4,
  DESCRIPTION = 8,
  CONTEXT = 16,
};