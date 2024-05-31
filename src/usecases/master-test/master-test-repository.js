const axios = require("axios");
const { createResponse } = require("../../utils/utilities");

class RequestMasterTestRepository {
  async getGoogleUserMostPopularRepositories() {
    const TOKEN_GITHUB = process.env.TOKEN_GITHUB;

    console.log(TOKEN_GITHUB);

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN_GITHUB}`,
      },
    };

    try {
      // Realizamos la solicitud GET a la API de GitHub
      const response = await axios.get(
        "https://api.github.com/users/google/repos",
        config
      );

      // Obtenemos los datos de los repositorios
      const repositories = response.data.map((item) => ({
        name: item.name,
        stars: item.stargazers_count,
      }));

      repositories.sort((a, b) => b.stars - a.stars);

      // Mostramos los nombres de los repositorios
      return createResponse(true, repositories.slice(0,10));
    } catch (error) {
      console.error("Error al obtener los repositorios:", error);
    }
  }
}

module.exports = RequestMasterTestRepository;
