const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');

// CORS allows requests to come in from React
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
  console.log("THIS IS WHO IS LOGGED IN");
  console.log(req.session.userId)
  next();
})

// Require the controller after the middleware
const movieController = require('./controllers/movieController');
const authController  = require('./controllers/authController');

app.use('/api/v1/movies', movieController);
app.use('/auth', authController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
