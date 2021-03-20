app.use('/', indexRouter);
app.use('/users', usersRouter);

function auth(req, res, next) {
    console.log(req.session);

    if (!req.session.user) {
        const err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
    } else {
        if (req.session.user === 'authenticated') {
            return next();
        } else {
            const err = new Error('You are not authenticated!');
            err.status = 401;
            return next(err);
        }
    }
}