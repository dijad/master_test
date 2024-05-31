const { Router } = require("express");
const {
  getGoogleUserMostPopularRepositories,
  calculateSin, getOddNumbers
} = require("../../../usecases/master-test/master-test-usecase");

function masterTestRouterV1(requestMasterTestRepository) {
  const router = Router();

  router.get("/v1/google-user", async (req, res) => {
    try {
      const repositories = await getGoogleUserMostPopularRepositories(
        requestMasterTestRepository
      );
      res.status(200).send({
        status: repositories.status,
        data: repositories.data,
      });
    } catch (err) {
      const errBody = {
        status: false,
        data: {
          message: err.message,
          url: req.originalUrl,
        },
      };
      console.error("Backend response ->", JSON.stringify(errBody, null, 3));
      res.status(err.statusCode || 500).send(errBody);
    }
  });

  router.get("/v1/nomenclature", async (req, res) => {
    const { x, y, z } = req.query;
    const calculation = calculateSin(Number(x), Number(y), Number(z));
    res.status(200).send({
      status: calculation.status,
      data: calculation.data,
    });
  });

  router.get("/v1/logical-thinking", async (req, res) => {
    const { n } = req.query;
    const oddNumbers = getOddNumbers(Number(n));
    res.status(200).send({
      status: oddNumbers.status,
      data: oddNumbers.data,
    });
  });

  return router;
}

module.exports = masterTestRouterV1;
