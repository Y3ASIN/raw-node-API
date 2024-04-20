/*
 * Title : Uptime Monitoring Application
 * Description : A RESTfull API to monitor user up or down links
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// object module scaffolding
const app = {};

// configuration
app.config = {
  port: 4000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listing to port ${app.config.port}`);
  });
};

// handling request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
