const createExpressApp = require('./adapters/express');

//Routers
const MasterTestRouterV1 = require('./adapters/routers/v1/master-test-router');

//Repositories
const RequestMasterTestRepository = require('./usecases/master-test/master-test-repository');

//Instanciar repositorios
const requestMasterTestRepository = new RequestMasterTestRepository();

let routers = [
    MasterTestRouterV1(requestMasterTestRepository)
];

module.exports = createExpressApp(routers);