
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const beerLogRouter = require('./routes/beerLog.router');
const beerInfoRouter = require('./routes/beerInfo.router');
const breweriesRouter = require('./routes/breweries.router');
const postBeerRouter = require('./routes/postBeer.router');
const deleteBeerRouter = require('./routes/deleteEntry.router');
const updateBeerRouter = require('./routes/updateBeer.router')
const favoritesRouter = require('./routes/favorites.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/beerlog', beerLogRouter);
app.use('/api/beerinfo', beerInfoRouter);
app.use('/api/breweries', breweriesRouter);
app.use('/api/postbeer', postBeerRouter);
app.use('/api/delete', deleteBeerRouter);
app.use('/api/putbeer', updateBeerRouter);
app.use('/api/favorites', favoritesRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
