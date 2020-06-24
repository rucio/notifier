const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
} = require("electron");
const path = require("path");

let tray = undefined;
let window = undefined;

const os = require("os");
const platforms = {
  WINDOWS: "WINDOWS",
  MAC: "MAC",
  LINUX: "LINUX",
};

const platformsNames = {
  win32: platforms.WINDOWS,
  darwin: platforms.MAC,
  linux: platforms.LINUX,
};

const currentPlatform = platformsNames[os.platform()];

app.on("ready", () => {
  createTray();
  createWindow();
});

const createTray = () => {
  var iconPath = path.join(__dirname, "rucioSqLogo.png");
  let trayIcon = nativeImage.createFromPath(iconPath);
  tray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Open App",
      click: () => {
        showWindow("activity");
      },
    },
    {
      label: "Separator",
      type: "separator",
    },
    {
      label: "Show Activity",
      click: () => {
        showWindow("activity");
      },
    },
    {
      label: "Notifications",
      click: () => {
        showWindow("notifications");
      },
    },
    {
      label: "Separator",
      type: "separator",
    },
    {
      label: "Help Centre",
      click: () => {
        showHelp();
      },
    },
    {
      label: "Quit",
      click: () => {
        window.destroy();
        tray.destroy();
      },
    },
  ]);
  tray.setToolTip("Rucio Notifier");
  tray.on("click", function (event) {
    toggleWindow();
  });
  tray.setContextMenu(contextMenu);
};

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  if (currentPlatform != "LINUX") {
    // Center window horizontally below the tray icon
    const x = Math.round(
      trayBounds.x - trayBounds.width / 2 + windowBounds.width / 2 - 320
    );

    // Position window 4 pixels vertically below the tray icon
    const y = Math.round(trayBounds.y - trayBounds.height - 440);

    return { x: x, y: y };
  } else {
    return { x: 1500, y: 5 };
  }
};

//-40 in size for setting the constant value in position
const createWindow = () => {
  window = new BrowserWindow({
    width: 360,
    height: 480,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    skipTaskbar: true,
    scrollable: false,
    backgroundColor: "#fffafa",
    useContentSize: true,
    webPreferences: {
      backgroundThrottling: false,
    },
  });

  // Hide the window when it loses focus
  window.on("blur", () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });
};

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
};

const showWindow = (target) => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.loadURL("http://localhost:3003/app/" + target);
  window.show();
};

ipcMain.on("show-window", () => {
  showWindow();
});
