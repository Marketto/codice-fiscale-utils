require("colors");
const path = require("path");
const libName = require("../package.json").name;
console.warn(
    "🚨  WARNING  🚨  ".red.bold +
    "If you are updating " + libName.blue.bold + " from " + "1.1.x".red.bold +
    ", you might need to perform some changes, please read the 📕  " +
    `${path.resolve(".")}/`.magenta + "README.MD".red.bold + "  📕 "
);
