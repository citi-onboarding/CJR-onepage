const keystone = require('keystone');

const CaseDescriptionController = keystone.list('CaseDescription');

module.exports = {
    getCaseDescriptionController(req, res) {
        CaseDescriptionController.model.find((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}