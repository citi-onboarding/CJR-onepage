const path = require('path');
const keystone = require('keystone');
const cors = require('cors');


const CaseController = require('../controller/Cases');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/cases', CaseController.getCaseController);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};