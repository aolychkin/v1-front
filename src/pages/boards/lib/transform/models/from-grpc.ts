
// import { DTOAction, DTOActionStatus, DTOActionType, DTOBoard, DTOColumn } from "pages/boards/model/protos/board/board_pb";
// import { TAction, TActionStatus, TActionType, TBoard, TColumn } from "pages/boards/model/types/board";


// // _____________________________________________ //
// // _______________ GET BOARD () _______________ //
// // ___________________________________________ //
// export const mapTBoard = (dto: DTOBoard.AsObject): TBoard => ({
//   id: dto.id,
//   name: dto.name,
//   description: dto.description,
//   columns: mapTColumnList(dto.columnsList),
// });

// export const mapTColumnList = (dto: Array<DTOColumn.AsObject>): TColumn[] => {
//   return dto.map((item: DTOColumn.AsObject) => (<TColumn>{
//     id: item.id,
//     name: item.name,
//     description: item.description,
//     order: item.order,
//     action_statuses: mapTActionStatusList(item.actionStatusesList),
//     actions: mapTActionList(item.actionsList),
//   }))
// };

// export const mapTActionStatusList = (dto: Array<DTOActionStatus.AsObject>): TActionStatus[] => {
//   return dto.map((item: DTOActionStatus.AsObject) => (<TActionStatus>{
//     id: item.id,
//     name: item.name,
//     description: item.description,
//     type_key: item.typeKey,
//     type_name: item.typeName,
//     type_description: item.typeDescription,
//   }))
// };

// export const mapTActionStatus = (dto: DTOActionStatus.AsObject | undefined): TActionStatus => {
//   return dto
//     ? <TActionStatus>{
//       id: dto.id,
//       name: dto.name,
//       description: dto.description,
//       type_key: dto.typeKey,
//       type_name: dto.typeName,
//       type_description: dto.typeDescription,
//     }
//     : <TActionStatus>{}
// };

// export const mapTActionList = (dto: Array<DTOAction.AsObject>): TAction[] => {
//   return dto.map((item: DTOAction.AsObject) => (<TAction>{
//     order: item.order,
//     id: item.id,
//     index: item.index,
//     status: mapTActionStatus(item.status),
//     type: mapTActionType(item.type),
//     fields_value: mapTAction(item.fieldsValueList),
//   }))
// };

// // export const mapTActionType = (dto: DTOActionType.AsObject | undefined): TActionType => {
// //   return dto
// //     ? <TActionType>{
// //       id: dto.id,
// //       name: dto.name,
// //       description: dto.description,
// //       type_key: dto.typeKey,
// //       type_name: dto.typeName,
// //       type_description: dto.typeDescription,
// //     }
// //     : <TActionType>{}
// // };