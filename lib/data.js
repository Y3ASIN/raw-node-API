/* eslint-disable prefer-template */
const fs = require("fs");
const path = require("path");

const lib = {};

// base directory
lib.basedir = path.join(__dirname, "../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data to file and then close
      fs.write(fileDescriptor, stringData, (writeErr) => {
        if (!writeErr) {
          fs.close(fileDescriptor, (closeErr) => {
            if (!closeErr) {
              callback(false);
            } else {
              callback("Error closing new file");
            }
          });
        } else {
          callback("Error writing new file");
        }
      });
    } else {
      callback("There was an error, file may already exists");
    }
  });
};

// read data file from
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

// update data in file
lib.update = (dir, file, data, callback) => {
  fs.open(`${lib.basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // make data to string
      const stringData = JSON.stringify(data);

      // truncate data from file
      fs.ftruncate(fileDescriptor, (truncErr) => {
        if (!truncErr) {
          // write to the file and close it
          fs.writeFile(fileDescriptor, stringData, (writeErr) => {
            if (!writeErr) {
              // close file
              fs.close(fileDescriptor, (closeErr) => {
                if (!closeErr) {
                  callback(false);
                } else {
                  callback("Error closing file!");
                }
              });
            } else {
              callback("Error writing file!");
            }
          });
        } else {
          callback("Error while truncating file.");
        }
      });
    } else {
      callback("There was an error updating file");
    }
  });
};

// delete file from file system
lib.delete = (dir, file, callback) => {
  // deleting file
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("Error while deleting file");
    }
  });
};

module.exports = lib;
