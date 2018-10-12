# electron-AdonisJs App

Note: This is an experiment but it offers a starting point.

**Referinces**
1. [Electron API Demos](https://electronjs.org/#get-started)
2. [Adonis JS](https://www.adonisjs.com/)

## To Use
1. Navigate to the app directory (this directory contains the AdoniJS files)
2. Run ```npm install```
3. Navigate to the root directory
4. Run ```nnpm install```
5. Still on the home directory, run ```npm run start```

## Execution
Inside your root directory ```package.js``` we are starting the electron server
```
  "scripts": {
    "start": "electron . "
  },
  ```
  Inside Electron's ```main.js``` file we are requiring the adonis server
  
```
  //Adonis server
  server = require("./app/server")
```

![capture](https://github.com/kisese/adonisjs-electron/blob/master/capture.png)
