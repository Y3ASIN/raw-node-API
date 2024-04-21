/*
 * Title : Handle request response
 * Description : Handling all the request and response
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandler/notFoundHandler");

// module scaffolding
const handler = {};

// handling request response
handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObject,
  };

  const chooserHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    chooserHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    //console.log(realData);
  });

  // console.log(parsedUrl);
  //   res.end("Hello programmer!");
};

module.exports = handler;
