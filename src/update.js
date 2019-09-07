const runtime = require("react-refresh/runtime");
const debounce = require("lodash.debounce");
let enqueueUpdate = debounce(runtime.performReactRefresh, 30);
module.exports = enqueueUpdate;
