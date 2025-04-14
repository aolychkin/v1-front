

//Карточка не должна внутри колонки сидеть.
//Сопоставлять по куррент степу мб

export type TBoard = {
  id: string;
  key: string;
  columns: TColumn[];
  sprints: TSprint[];
  cardVisualConfigs: TCardConfig[];
};

export type TColumn = {
  id: string;
  name: string;
  steps: TCurrentStep[];
};
export type TCurrentStep = {
  id: string;
  name: string;
  workflowStatus: string;
}

export type TSprint = {
  id: string,
  name: string,
}

export type TCardConfig = {
  id: string,
  rowOrder: number,
  columnOrder: number,
  size: number,
  fieldConfigId: string,
}
