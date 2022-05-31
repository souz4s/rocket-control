import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 800,
    height: 600
  });

  mainWindow.resizable = false;
  mainWindow.setMenuBarVisibility(false);

  const port = process.argv[2];
  await mainWindow.loadURL(`http://localhost:${port}`);
})();

app.on('window-all-closed', () => {
  app.quit();
});
