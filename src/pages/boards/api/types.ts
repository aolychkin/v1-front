//TODO: сделать что-то с этими типами
// export type BoardRequest = {
//   id: string;
// };

// export type BoardResponse = {
//   board: TBoard;
// };

// export type TBoard = {
//   id: string;
//   key: string;
//   columns: TColumn[];
//   sprints: TSprint[];
//   field_configs: TFieldConfig[];
//   card_configs: TCardConfig[];
// }

// // ____ COLUMN TYPES ____ //
// export type TColumn = {
//   id: string;
//   name: string;
//   steps: TCurrentStep[];
//   on_board_action: TCard[];
// }
// export type TCurrentStep = {
//   id: string;
//   name: string;
//   workflow_status: string;
// }
// export type TCard = {
//   id: string;
//   order: number;
//   column_id: string;
//   action_num: number;
//   current_step_id: string;
//   sprint_ids: string;
//   fields: TActionField[];
// }
// export type TActionField = {
//   id: string;
//   value: string;
//   config_id: string;
// }

// // ____ CONFIG TYPES ____ //
// //TODO: отправлять только те поля, которые используются в конфиге доски
// export type TCardConfig = {
//   id: string;
//   row_order: number;
//   column_order: number;
//   size: number;
//   field_config_id: string;
// }
// export type TFieldConfig = {
//   id: string;
//   name: string;
//   alias: string;
//   field_type: TFieldType;
//   defaultValue: string;
//   availableValues: string;
// }

// export type TFieldType = {
//   id: string;
//   name: string;
//   alias: string;
//   is_custom: boolean;
//   available_sizes: string[];
// }

// // ____ OTHER TYPES ____ //
// export type TSprint = {
//   id: string;
//   name: string;
// }

// // export type StatsParams = {
// //   groupBy: number;
// //   startDate: string;
// //   finishDate: string;
// //   adUnitCategory?: number;
// //   country?: number[];
// //   campaign?: number[];
// //   banner?: number;
// //   landing?: number;
// // };

// // export type StatsResponse = {
// //   clicks: number;
// //   conversions: number;
// //   cpm: number;
// //   ctr: number;
// //   ecpa: number;
// //   groupBy: string | number;
// //   i2c: number;
// //   impressions: number;
// //   spent: number;
// //   campaignId?: number;
// //   campaignAlias?: string;
// //   bannerId?: number;
// //   bannerAlias?: string;
// //   landingId?: number;
// //   landingAlias?: string;
// // };
