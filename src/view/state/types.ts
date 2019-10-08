export interface State {
  pages: DiaryPage[];
  pageId: number;
}

export enum BodyPart {
  LeftArm = "leftArm",
  RightArm = "rightArm",
  LeftLeg = "leftLeg",
  RightLeg = "rightLeg",
  LeftBelly = "leftBelly",
  RightBelly = "rightBelly",
  LeftButtock = "leftButtock",
  RightButtock = "rightButtock"
}

export interface DiaryPage {
  id: number;
  [BodyPart.LeftArm]: InjectionGrid;
  [BodyPart.RightArm]: InjectionGrid;
  [BodyPart.LeftLeg]: InjectionGrid;
  [BodyPart.RightLeg]: InjectionGrid;
  [BodyPart.LeftBelly]: InjectionGrid;
  [BodyPart.RightBelly]: InjectionGrid;
  [BodyPart.LeftButtock]: InjectionGrid;
  [BodyPart.RightButtock]: InjectionGrid;
}

export enum InjectionPlace {
  LeftTop = "leftTop",
  RightTop = "rightTop",
  LeftMiddle = "leftMiddle",
  RightMiddle = "rightMiddle",
  LeftBottom = "leftBottom",
  RightBottom = "rightBottom"
}

export interface InjectionGrid {
  [InjectionPlace.LeftTop]: InjectionDay;
  [InjectionPlace.RightTop]: InjectionDay;
  [InjectionPlace.LeftMiddle]: InjectionDay;
  [InjectionPlace.RightMiddle]: InjectionDay;
  [InjectionPlace.LeftBottom]: InjectionDay;
  [InjectionPlace.RightBottom]: InjectionDay;
}

export type InjectionDay = Date | null;