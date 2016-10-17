module.exports = {
    view(req, res, next){
        res.render("sample/views/index");
    },

    err(req, res, next){
        next(new Error("test error"));
    },

    validate(req, res, next){
        res.json({
            valid: true
        });
    }
};
