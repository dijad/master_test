const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

async function createExpressApp(routers) {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Welcome my Master test :)');
  });

  app.set('port', process.env.PORT || 3000);

  app.use(morgan('dev'));

  app.use(cors());

  app.use(express.json());

  for (let router of routers) {
    app.use(router);
  }

  app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
  });
}

module.exports = createExpressApp;
