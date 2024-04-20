/*
 * Title : Sample handler
 * Description : Sample handler
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
