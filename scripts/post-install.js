const path = require("path");
const libName = require("../package.json").name;
console.warn(`🚨  WARNING  🚨
If you are updating ${libName} from 1.x, you might need to perform some changes,
please read the 📕 ${path.resolve(".")}/README.MD 📕`);
