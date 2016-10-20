module.exports = {
    main(req, res, next) {
        res.render('main/views/index', {title: 'Express'});
    }
};
