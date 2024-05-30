const createExpressApp = require('./adapters/express');

//Routers
const MasterTestRouterV1 = require('./adapters/routers/v1/master-test-router');

let routers = [
    MasterTestRouterV1()
];

module.exports = createExpressApp(routers);