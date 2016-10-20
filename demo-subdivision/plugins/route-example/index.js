module.exports = {
    view(req, res, next){
        res.json({
            foo: "bar",
            baz: "quux"
        });
    }
};

