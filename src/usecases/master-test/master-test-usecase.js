const { createResponse } = require("../../utils/utilities");

async function getGoogleUserMostPopularRepositories(
  requestMasterTestRepository
) {
  try {
    const repositories =
      await requestMasterTestRepository.getGoogleUserMostPopularRepositories();
    return createResponse(true, repositories);
  } catch (error) {
    throw new Error(error.message);
  }
}

function calculateSin(valueX, valueY, valueZ) {
  let sumXY = valueX + valueY;
  let productSumXYtimezZ = sumXY * valueZ;
  let sinProduct = Math.sin(productSumXYtimezZ);
  return createResponse(true, sinProduct);
}

function getOddNumbers(n) {
  const oddNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  return createResponse(true, oddNumbers);
}

module.exports = {
  getGoogleUserMostPopularRepositories,
  calculateSin,
  getOddNumbers,
};
