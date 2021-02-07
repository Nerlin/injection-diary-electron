import { app, BrowserWindow, ipcMain } from "electron";
import fs from "fs";
import path from "path";
import { State } from "./view/state/types";

let window: BrowserWindow = null;
let data: State = null;

const outputPath = path.join(app.getAppPath(), "data.json");

app.on("ready", () => {
  if (fs.existsSync(outputPath)) {
    data = JSON.parse(fs.readFileSync(outputPath).toString());
  }

  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
    height: 700,
    icon: path.join(app.getAppPath(), "injection.ico")
  });

  window.setMenu(null);
  window.loadFile("index.html");
});

ipcMain.on("save-state", (event, state: State) => {
  const data = JSON.stringify(state);
  fs.writeFileSync(outputPath, data);
});

ipcMain.on("load-state", event => {
  event.returnValue = data;
});
