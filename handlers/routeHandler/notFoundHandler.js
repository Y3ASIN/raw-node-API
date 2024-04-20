/*
 * Title : Not Found handler
 * Description : 404 Not Found handler
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(404, {
    message: "Your requested URL was Not Found!",
  });
};

module.exports = handler;
