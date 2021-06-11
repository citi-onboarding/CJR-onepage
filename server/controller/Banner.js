const keystone = require('keystone');

const Banner = keystone.list('Banner');

module.exports = {
  getBannerController (req, res) {
    BannerController.model.find((err, data) =>{
        if(err){
          console.log(err);
          res.status(500).send('DB error')
        } else{
            res.status(200).json(data)
        }
    })
  }
}