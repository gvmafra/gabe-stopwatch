const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
  const isDev = await import("electron-is-dev");

  const win = new BrowserWindow({
    width: 220,
    height: 250,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);
