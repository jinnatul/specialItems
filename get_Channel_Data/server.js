const dotEnv = require('dotenv');
dotEnv.config({ path: './config.env' });
require('./dbConfig');


const app = require('./app');

let port = 3000;
app.listen(port, () => {
  console.log(`Magic run on port ${port}`);
})