
module.exports = {
    paths: [
        {
            path: 'some/path/to/my/addins',
            addins: [
                {
                    target: 'my.addin.target',
                    id: 'addinId',
                    order: 123
                    //any other properties your addin needs
                },
            ]
        }
    ]
};