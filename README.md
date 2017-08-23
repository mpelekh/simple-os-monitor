# Simple monitor that allows to observe some OS parameters

Simple monitor that allows to observe some OS parameters, such as free memory available. 
It uses `Node.js`, `Angular 4` and `Chart.js`.

There are two applications: the first is a Node application that monitors the OS parameters and sends them via websocket to the second app, which is an Angular 4 application. The Angular app utilizes Chart.js to represent the server status graphically.

Node application is run on the same machine as the Angular application.

To start server:
```
$ cd server
$ npm install
$ npm run dev
```

To start monitor - read [here](https://github.com/nickpeleh/simple-os-monitor/blob/master/monitor/README.md).
