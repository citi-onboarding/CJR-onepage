const keystone = require('keystone');

const AboutUsController = keystone.list('AboutUs');

module.exports = {
  getAboutUsController(req, res) {
    AboutUsController.model.find((err, data) =>{
        if(err){
          console.log(err);
          res.status(500).send('DB error')
        } else{
            res.status(200).json(data)
        }
    })
  }
}