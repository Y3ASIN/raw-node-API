/*
 * Title : Environment
 * Description : Handle the environment to work with environment
 * Author: Yeasin Arafat
 * Date: 21/04/2024
 */

// dependencies

//module scaffolding
const environments = {};

environments.staging = {
  port: 4000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

//determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// module exports
module.exports = environmentToExport;
