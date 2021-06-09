const keystone = require('keystone');

const CaseController = keystone.list('Cases');

module.exports = {
    getCaseController(req, res) {
        CaseController.model.find((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}