const path = require('path');
const keystone = require('keystone');
const cors = require('cors');


const CaseController = require('../controller/Cases');
const Ourservices = require('../controller/Ourservices');
const BannerController = require('../controller/Banner');
const CaseDescriptionController = require('../controller/CaseDescription');


module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/cases', CaseController.getCaseController);
  app.get('/api/ourservices', Ourservices.getOurServicesController);
  app.get('/api/banner', BannerController.getBannerController);
  app.get('/api/casedescription', CaseDescriptionController.getCaseDescriptionController);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};