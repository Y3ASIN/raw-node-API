/*
 * Title : Uptime Monitoring Application
 * Description : A RESTfull API to monitor user up or down links
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/handleEnvironment");
const data = require("./lib/data");

// object module scaffolding
const app = {};

// testing file system
data.create("test", "newFile2", { name: "World", position: "4th" }, (err) => {
  console.log("There was an error ", err);
});
// testing read file
// data.read("test", "newFile", (err, fileData) => {
//   console.log(err, fileData);
// });
// testing updating data of file system
data.delete("test", "newFile", (err) => {
  console.log("there was an error", err);
});

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listing to port ${environment.port}`);
  });
};

// handling request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
