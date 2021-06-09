const keystone = require('keystone');

const { Types } = keystone.Field;

const ourservices = new keystone.List('ourservices');

Ourservices.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
  },
  discription: {
      type: types.text,
      require: true,
  },
});

Our-services.register();