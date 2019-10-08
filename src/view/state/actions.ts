import { DiaryPage, InjectionPlace, BodyPart, State } from "./types";

export const NEW_PAGE = "NEW_PAGE";
export const REMOVE_PAGE = "REMOVE_PAGE";
export const SET_INJECTION = "SET_INJECTION";
export const LOAD_STATE = "LOAD_STATE";

export function newPage() {
  return <const> { type: NEW_PAGE };
}

export function removePage(pageId: DiaryPage["id"]) {
  return <const> { type: REMOVE_PAGE, pageId };
}

export function setInjection(pageId: DiaryPage["id"], body: BodyPart, position: InjectionPlace, date?: Date) {
  return <const> { type: SET_INJECTION, pageId, body, position, date };
}

export function loadState(state: State) {
  return <const> { type: LOAD_STATE, state };
}