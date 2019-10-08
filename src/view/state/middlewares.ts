import { ipcRenderer } from "electron";
import { Middleware } from "redux";

export const FileStorage: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  ipcRenderer.send("save-state", state);
  return result;
};
