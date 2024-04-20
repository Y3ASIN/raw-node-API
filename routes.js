/*
 * Title : Routes
 * Description : Routes application
 * Author: Yeasin Arafat
 * Date: 20/04/2024
 */

const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
