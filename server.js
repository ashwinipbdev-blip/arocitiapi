require('dotenv').config(); 
const express = require('express');
const logger = require('morgan');
const models = require('./server/models'); 
const auth = require('./server/routes/auth');
const cors = require('cors');
const { sequelize } = require('./server/models');
const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => res.send('System Live'));
// Routes
app.use('/v1/auth', auth);

app.get('/user', (req, res) => {
  res.send({
    status: true,
    message: "getting users"
  });
});

const PORT = process.env.PORT || 5000
async function  connectDB(){
await models.sequelize.sync({alert:true})
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is live on http://localhost:${PORT}`);
});
}



connectDB();