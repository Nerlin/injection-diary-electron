import { AnyAction } from "redux";
import * as actions from "./actions";
import { DiaryPage, InjectionGrid, State } from "./types";

type ActionNamespace<T> = ReturnType<Actions<T>[keyof Actions<T>]>;
type Actions<T> = {
  [K in keyof T]: T[K] extends AnyActionCreator ? T[K] : never
};
type AnyActionCreator = (...args: any) => AnyAction;

export default function reducer(
  state: State = initState(),
  action: ActionNamespace<typeof actions>
): State {
  switch (action.type) {
    case actions.LOAD_STATE: 
      return action.state;
    case actions.NEW_PAGE:
      return {
        ...state,
        pages: [initPage(state.pageId), ...state.pages],
        pageId: state.pageId + 1
      };
    case actions.REMOVE_PAGE:
      return {
        ...state,
        pages: state.pages.filter(page => page.id !== action.pageId)
      };
    case actions.SET_INJECTION: {
      const pageIndex = state.pages.findIndex(page => page.id === action.pageId);
      if (pageIndex === -1) {
        return state;
      }

      const page = state.pages[pageIndex];
      const updatedPage = {
        ...page,
        [action.body]: {
          ...page[action.body],
          [action.position]: action.date
        }
      };

      return {
        ...state,
        pages: [
          ...state.pages.slice(0, pageIndex),
          updatedPage,
          ...state.pages.slice(pageIndex + 1)
        ]
      };
    }
    default:
      return state;
  }
}

function initState(): State {
  return {
    pages: [],
    pageId: 1
  };
}

function initPage(id: number): DiaryPage {
  return {
    id,
    leftArm: initGrid(),
    leftLeg: initGrid(),
    leftBelly: initGrid(),
    leftButtock: initGrid(),
    rightArm: initGrid(),
    rightLeg: initGrid(),
    rightBelly: initGrid(),
    rightButtock: initGrid()
  };
}

function initGrid(): InjectionGrid {
  return {
    leftTop: null,
    leftMiddle: null,
    leftBottom: null,
    rightTop: null,
    rightMiddle: null,
    rightBottom: null
  };
}
