import React from "react";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import reducer from "../state/reducers";
import Diary from "./Diary";
import { Global, css } from "@emotion/core";
import { FileStorage } from "../state/middlewares";
import { ipcRenderer } from "electron";
import { loadState } from "../state/actions";
import { State, BodyPart, InjectionPlace } from "../state/types";

const Application = () => {
  return (
    <Provider store={store}>
      <Global styles={styles} />
      <Diary />
    </Provider>
  );
};

const store: Store = initStore();

function initStore() {
  const store: Store = createStore(reducer, applyMiddleware(FileStorage));
  let loadedState = ipcRenderer.sendSync("load-state");
  if (loadedState) {
    loadedState = parseState(loadedState);
    store.dispatch(loadState(loadedState));
  }
  return store;
}


function parseState(state: State): State {
  const bodyParts = [
    BodyPart.LeftArm,
    BodyPart.LeftBelly,
    BodyPart.LeftButtock,
    BodyPart.LeftLeg,
    BodyPart.RightArm,
    BodyPart.RightBelly,
    BodyPart.RightButtock,
    BodyPart.RightLeg
  ];

  const places = [
    InjectionPlace.LeftTop,
    InjectionPlace.LeftMiddle,
    InjectionPlace.LeftBottom,
    InjectionPlace.RightTop,
    InjectionPlace.RightMiddle,
    InjectionPlace.RightBottom
  ];

  for (const page of state.pages) {
    for (const bodyPart of bodyParts) {
      for (const place of places) {
        page[bodyPart][place] = page[bodyPart][place] ? new Date(page[bodyPart][place]) : null;
      }
    }
  }

  return state;
}

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  html {
    font-family: Raleway, sans-serif;
  }
`;

export default Application;
