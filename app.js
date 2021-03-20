app.use(passport.initialize());
app.use(passport.session());
const passport = require('passport');
const authenticate = require('./authenticate');

function auth(req, res, next) {
    console.log(req.user);

    if (!req.user) {
        const err = new Error('You are not authenticated!');                    
        err.status = 401;
        return next(err);
    } else {
        return next();
    }
}
