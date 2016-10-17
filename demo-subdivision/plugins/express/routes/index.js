module.exports = {
    main(req, res, next) {
        res.render('express/views/index', {title: 'Express'});
    }
};
