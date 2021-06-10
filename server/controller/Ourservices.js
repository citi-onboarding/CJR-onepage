
const keystone = require('keystone');

const Ourservices = keystone.list('Ourservices');

module.exports = {
  getOurServicesController (req, res) {
    Ourservices.model.find((err, data) =>{
        if(err){
          console.log(err);
          res.status(500).send('DB error')
        } else{
            res.status(200).json(data)
        }
    })
  }
}