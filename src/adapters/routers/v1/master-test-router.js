const { Router } = require('express');

function masterTestRouterV1() {

    const router = Router();

    router.get('/v1/google-user', async (req, res) => {
        console.log('Google User')
    });

    router.get('/v1/nomenclature', async (req, res) => {
        console.log('Nomenclature')
    });

    router.get('/v1/logic-thinking', async (req, res) => {
        console.log('Logic thinking')
    });

    return router;
}

module.exports = masterTestRouterV1;